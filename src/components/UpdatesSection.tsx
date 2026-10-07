import React, { useState } from 'react';
import { ARTICLES_DATA, DEVELOPER_INFO } from '../data/mockData';
import { ArticleUpdate } from '../types';
import { X, Clock, ArrowRight } from 'lucide-react';

export const UpdatesSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleUpdate | null>(null);

  return (
    <section id="updates" className="py-[80px] md:py-[120px] px-margin max-w-[1728px] mx-auto bg-[#FFFFE3] dark:bg-[#0B0F17] border-t border-[#D9D7D0]/30 dark:border-neutral-800 transition-colors duration-300">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="font-display text-2xl md:text-3xl lg:text-h2 font-semibold text-[#1B1B1B] dark:text-[#FAF9F5]">Latest Updates</h2>
        </div>
        <button 
          onClick={() => setSelectedArticle(ARTICLES_DATA[0])}
          className="font-label text-sm font-bold border-b border-[#181818] dark:border-white text-[#1B1B1B] dark:text-[#FAF9F5] pb-1 hover:text-[#8C8880] dark:hover:text-neutral-300 transition-colors cursor-pointer"
        >
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ARTICLES_DATA.map((article) => (
          <div 
            key={article.id}
            onClick={() => setSelectedArticle(article)}
            className="group cursor-pointer bg-[#F0EFEB] dark:bg-neutral-900/90 rounded-[28px] p-6 sm:p-8 border border-[#D9D7D0]/60 dark:border-neutral-800 shadow-sm hover:border-[#181818]/60 dark:hover:border-neutral-600 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-label text-xs bg-[#181818] dark:bg-neutral-800 text-[#FAF9F5] dark:text-[#FAF9F5] border border-transparent dark:border-neutral-700 px-3 py-1 rounded-full font-medium">
                  {article.category}
                </span>
                <span className="font-mono text-xs text-[#8C8880] dark:text-neutral-400">{article.readTime}</span>
              </div>
              
              <p className="font-label text-xs text-[#8C8880] dark:text-neutral-400 mb-2">{article.date}</p>
              <h4 className="font-h3 text-lg sm:text-xl font-semibold text-[#1B1B1B] dark:text-[#FAF9F5] group-hover:text-[#8C8880] dark:group-hover:text-neutral-300 transition-colors leading-snug mb-3">
                {article.title}
              </h4>
              <p className="font-body-md text-xs sm:text-sm text-[#8C8880] dark:text-neutral-300 line-clamp-3 leading-relaxed mb-6">
                {article.excerpt}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#D9D7D0]/60 dark:border-neutral-800">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#181818] dark:bg-neutral-800 text-[#FAF9F5] font-bold text-[10px] flex items-center justify-center shrink-0 border border-transparent dark:border-neutral-700">
                  {DEVELOPER_INFO.initials}
                </div>
                <span className="font-label text-xs font-bold text-[#1B1B1B] dark:text-[#FAF9F5]">{article.author.name}</span>
              </div>
              <span className="font-label text-xs font-bold text-[#181818] dark:text-[#FAF9F5] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read <ArrowRight size={14} />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#FAF9F5] dark:bg-[#151C28] rounded-3xl max-w-2xl w-full p-6 md:p-8 relative border border-[#D9D7D0] dark:border-neutral-700 shadow-2xl animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#E9E8E4] dark:bg-neutral-800 hover:bg-[#D9D7D0] dark:hover:bg-neutral-700 text-[#1B1B1B] dark:text-white transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="font-label text-xs bg-[#181818] dark:bg-neutral-800 text-[#FAF9F5] px-3 py-1 rounded-full border border-transparent dark:border-neutral-700">{selectedArticle.category}</span>
              <span className="font-label text-xs text-[#8C8880] dark:text-neutral-400">{selectedArticle.date} • {selectedArticle.readTime}</span>
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#1B1B1B] dark:text-[#FAF9F5] mb-6 leading-snug">
              {selectedArticle.title}
            </h3>

            <div className="font-body-md text-sm text-[#1B1B1B] dark:text-neutral-200 whitespace-pre-wrap leading-relaxed space-y-4 mb-8">
              {selectedArticle.content}
            </div>

            {/* Author */}
            <div className="flex items-center justify-between border-t border-[#D9D7D0] dark:border-neutral-800 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#181818] dark:bg-neutral-800 text-[#FAF9F5] font-bold text-xs flex items-center justify-center shrink-0 border border-transparent dark:border-neutral-700">
                  {DEVELOPER_INFO.initials}
                </div>
                <div>
                  <p className="font-label text-xs font-bold text-[#1B1B1B] dark:text-[#FAF9F5]">{selectedArticle.author.name}</p>
                  <p className="font-label text-[10px] text-[#8C8880] dark:text-neutral-400">{selectedArticle.author.role}</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2 rounded-full bg-[#181818] text-[#FAF9F5] dark:bg-[#FAF9F5] dark:text-[#181818] font-label text-xs hover:bg-black dark:hover:bg-white transition-colors cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
