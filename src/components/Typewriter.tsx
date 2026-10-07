import React, { useState, useEffect, useRef } from 'react';

export interface TypewriterProps {
  children: string;
  speed?: number; // Typing speed in ms per character
  deleteSpeed?: number; // Backspacing speed in ms per character
  delayBeforeDelete?: number; // Pause before deleting when text changes automatically
  className?: string;
  cursorClassName?: string;
  showCursor?: boolean;
  cursorChar?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  children: targetText,
  speed = 45,
  deleteSpeed = 25,
  delayBeforeDelete = 1200,
  className = '',
  cursorClassName = '',
  showCursor = true,
  cursorChar = '|',
}) => {
  const [displayText, setDisplayText] = useState('');
  const currentTextRef = useRef('');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Synchronize ref with current state for timer callbacks
  useEffect(() => {
    currentTextRef.current = displayText;
  }, [displayText]);

  useEffect(() => {
    // Clear any existing active timeout when targetText changes
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const currentText = currentTextRef.current;
    
    // Find the longest common prefix between current displayed text and new target text
    let commonPrefixLength = 0;
    const minLength = Math.min(currentText.length, targetText.length);
    for (let i = 0; i < minLength; i++) {
      if (currentText[i] === targetText[i]) {
        commonPrefixLength++;
      } else {
        break;
      }
    }

    // Step 1: Backspace character by character to commonPrefixLength
    const backspace = (currentLen: number) => {
      if (currentLen > commonPrefixLength) {
        const nextText = currentText.substring(0, currentLen - 1);
        setDisplayText(nextText);
        currentTextRef.current = nextText;
        timeoutRef.current = setTimeout(() => backspace(currentLen - 1), deleteSpeed);
      } else {
        // Step 2: Type out character by character from commonPrefixLength to targetText.length
        typeOut(commonPrefixLength);
      }
    };

    // Step 2: Type character by character
    const typeOut = (currentLen: number) => {
      if (currentLen < targetText.length) {
        const nextText = targetText.substring(0, currentLen + 1);
        setDisplayText(nextText);
        currentTextRef.current = nextText;
        timeoutRef.current = setTimeout(() => typeOut(currentLen + 1), speed);
      }
    };

    // If current text is empty, start typing immediately
    if (currentText.length === 0) {
      typeOut(0);
    } else if (currentText === targetText) {
      // Already matching
      setDisplayText(targetText);
    } else {
      // Start backspacing after optional brief delay
      timeoutRef.current = setTimeout(() => {
        backspace(currentText.length);
      }, currentText.length > targetText.length ? 100 : 50);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [targetText, speed, deleteSpeed]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{displayText}</span>
      {showCursor && (
        <span
          className={`inline-block animate-pulse font-mono ml-[1px] text-[#1F3B36] dark:text-[#1F3B36] font-bold ${cursorClassName}`}
        >
          {cursorChar}
        </span>
      )}
    </span>
  );
};
