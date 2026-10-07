import { BrandFile, ArticleUpdate } from '../types';

export const DEVELOPER_INFO = {
  name: 'Muhammad Naveed',
  initials: 'MN',
  title: 'AI Engineer • Agentic AI Engineer',
  role: 'AI Engineer Focused on Agentic AI',
  email: ['muhammadnaveedalijatt786@gmail.com','naved.jatt.42@gmail.com'],
  githubUrl: 'https://github.com/muhammad-naveed-saleem',
  linkedinUrl: 'https://www.linkedin.com/in/m-naveed-saleem/',
  availability: 'Available for Projects & Advisory',
  location: 'Global Remote / On-Site AI Engineering, Karachi Pakistan'
};

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Multi-Agent Systems' | 'RAG & Memory' | 'Guardrails & Tooling';
  status: string;
  tags: string[];
  description: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  architectureOverview: string;
  githubUrl: string;
  sampleTopology: string[];
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'omniagent-orchestrator',
    title: 'OmniAgent Orchestrator Framework',
    subtitle: 'Stateful Supervisor & Worker Multi-Agent System',
    category: 'Multi-Agent Systems',
    status: 'Production Architecture',
    tags: ['LangGraph', 'Gemini 2.5 Flash', 'Python', 'FastAPI', 'VectorDB'],
    description: 'A production-grade multi-agent execution framework built with LangGraph and Gemini. A supervisor node decomposes complex user objectives into isolated sub-goals and dispatches them to domain-specialized agents (Researcher, Code Auditor, Report Writer) with automatic state recovery.',
    highlights: [
      'Hierarchical supervisor-worker graph with parallel node execution',
      'Human-in-the-loop inspection checkpoint before sensitive tool calls',
      'Self-healing execution loops that automatically handle tool timeouts and exceptions',
      'Persistent SQLite/Redis state checkpointer for pause-and-resume workflows'
    ],
    metrics: [
      { label: 'Task Completion Rate', value: '99.2%' },
      { label: 'Sub-Goal Latency', value: '380ms' },
      { label: 'Parallel Nodes', value: 'Up to 12' }
    ],
    architectureOverview: 'Built on a directed acyclic graph (DAG) topology where the Orchestrator evaluates user prompts, dynamically initializes domain worker agents, passes short-term memory state objects, and collects aggregated results through a synthesis node.',
    githubUrl: DEVELOPER_INFO.githubUrl,
    sampleTopology: [
      'User Goal Input → Router Supervisor',
      'Supervisor → Sub-Task Splitter → Parallel Execution Nodes',
      'Research Agent (RAG) + Code Auditor Agent (Sandbox)',
      'Synthesis Node → Deterministic Guardrail Check → Final Output'
    ]
  },
  {
    id: 'sentinel-guardrail-engine',
    title: 'Sentinel Safety & Schema Guardrails',
    subtitle: 'Deterministic Function Calling & Safety Middleware',
    category: 'Guardrails & Tooling',
    status: 'Enterprise Deployed',
    tags: ['Pydantic / Zod', 'Gemini Structured Outputs', 'TypeScript', 'Redis', 'Python'],
    description: 'An enterprise-grade guardrail middleware layer designed to prevent prompt injections, enforce strict type schemas on LLM tool function arguments, and intercept hallucinated outputs before execution.',
    highlights: [
      'Pre-execution Pydantic and Zod validation on all LLM JSON function payloads',
      'Real-time prompt sanitization intercepting adversarial jailbreaks',
      'Semantic post-check verification comparing output claims against vector memory',
      'Zero-breakdown fallback handlers with graceful degradation'
    ],
    metrics: [
      { label: 'Schema Compliance', value: '100%' },
      { label: 'Validation Overhead', value: '<18ms' },
      { label: 'Prompt Injection Defense', value: '99.8%' }
    ],
    architectureOverview: 'Mounted as an asynchronous proxy middleware between the user application and LLM inference endpoints. Validates both inbound system prompts and outbound function call parameters.',
    githubUrl: DEVELOPER_INFO.githubUrl,
    sampleTopology: [
      'Inbound Prompt → Sanitization Filter',
      'LLM Function Output → Zod/Pydantic Schema Validator',
      'Validation Success → Execution Sandbox',
      'Validation Failure → Retry Handler / Fallback Output'
    ]
  },
  {
    id: 'cognitive-mesh-rag',
    title: 'Cognitive Mesh Hybrid RAG System',
    subtitle: 'Sub-Second Context Grounding & Episodic Memory Store',
    category: 'RAG & Memory',
    status: 'Open Source Engine',
    tags: ['LlamaIndex', 'Pinecone', 'Cross-Encoder Reranking', 'Express', 'TypeScript'],
    description: 'An advanced retrieval-augmented generation engine engineered to solve context hallucination in large-document reasoning. Features hybrid dense vector search, sparse BM25 keyword matching, and cross-encoder reranking.',
    highlights: [
      'Hybrid dense & sparse retrieval combining vector embeddings with BM25 keyword index',
      'Cross-encoder reranking model prioritizing highest relevance document chunks',
      'Episodic memory summarization preserving long-term conversational context',
      'Dynamic chunk sizing with parent-child document linkage'
    ],
    metrics: [
      { label: 'Context Relevance Score', value: '+42%' },
      { label: 'Retrieval Latency', value: '85ms' },
      { label: 'Doc Ingestion Rate', value: '1,200 p/min' }
    ],
    architectureOverview: 'Ingests unstructured PDFs, Markdown, and API docs into parent-child chunks. Stores vector representations in Pinecone while maintaining sparse inverted indexes for exact keyword matching.',
    githubUrl: DEVELOPER_INFO.githubUrl,
    sampleTopology: [
      'Document Ingestion → Parent-Child Chunking → Vector + Sparse Index',
      'Query → Dual Retrieval (Dense + BM25)',
      'Cross-Encoder Reranker → Top-K Context Window Injection',
      'Agent Reasoning → Response with Source Citation'
    ]
  },
  {
    id: 'autonomous-sql-data-agent',
    title: 'Autonomous SQL & Analytics Agent',
    subtitle: 'Natural Language to SQL Synthesis & Dynamic Visuals',
    category: 'Multi-Agent Systems',
    status: 'Production Tool',
    tags: ['PostgreSQL', 'ReAct Agent', 'Recharts', 'Node.js', 'D3.js'],
    description: 'An agentic database engine that translates complex natural language business questions into safe, highly optimized SQL queries, executes pre-flight safety checks, reflects on syntax errors, and synthesizes interactive visualizations.',
    highlights: [
      'Safe read-only database transaction wrapper preventing destructive queries',
      'Schema reflection and self-correction loop when database queries fail',
      'Automated selection of chart types (Bar, Line, Area, Pie) based on data shape',
      'Natural language query explanation breakdown for non-technical stakeholders'
    ],
    metrics: [
      { label: 'SQL Synthesis Accuracy', value: '96.4%' },
      { label: 'Self-Correction Rate', value: '92.0%' },
      { label: 'Query Execution Safety', value: '100%' }
    ],
    architectureOverview: 'Uses a ReAct (Reason + Act) loop to inspect PostgreSQL schema metadata, construct syntactically valid SQL queries, dry-run in an isolated transaction, and pass JSON results to a dynamic charting renderer.',
    githubUrl: DEVELOPER_INFO.githubUrl,
    sampleTopology: [
      'Natural Language Question → Schema Inspector Agent',
      'SQL Synthesis Agent → Syntax Dry-Run Check',
      'Database Execution → Aggregated JSON Result',
      'Chart Generator Agent → Interactive Visual Dashboard'
    ]
  }
];

export const INITIAL_BRAND_FILES: BrandFile[] = [
  {
    id: 'f1',
    name: 'Agentic_Architecture_Blueprint',
    type: 'folder',
    size: '18 items',
    updatedAt: '2 hours ago',
    category: 'Architecture',
    description: 'Multi-agent orchestration graphs, state persistence schemas, and sub-task distribution specs.',
    tags: ['AgenticAI', 'LangGraph', 'MultiAgent'],
    content: `# Agentic System Architecture Blueprint

## Executive Overview
Designed and engineered by ${DEVELOPER_INFO.name}. A production-grade multi-agent execution framework combining hierarchical orchestration with deterministic tool isolation.

### Core Modules
1. **Router & Supervisor Agent**: Evaluates incoming queries, decomposes goals into sub-tasks, and dispatches to domain-specialized agents.
2. **Contextual Memory Mesh**: Vector embeddings & hybrid RAG grounding store for short-term conversation state and long-term knowledge.
3. **Execution & Tool Sandbox**: Secure, asynchronous function execution layer with strict parameter validation and retry loops.`
  },
  {
    id: 'f2',
    name: 'Guardrail_Policy_Rules.v2',
    type: 'document',
    size: '3.8 MB',
    updatedAt: 'Yesterday',
    category: 'Safety & Eval',
    description: 'Master safety policy, hallucination checks, schema validators, and output compliance specs.',
    tags: ['Guardrails', 'Safety', 'Eval'],
    content: `# Enterprise Agent Safety & Guardrail Spec

## Verification Pipeline
- **Input Sanitization**: Rejects prompt injection attempts, toxic payload patterns, and jailbreaks.
- **Output Validation**: Structured Pydantic/Zod schema enforcement on LLM tool outputs.
- **Hallucination Checking**: Cross-references claims against context vector memory before response emission.`
  },
  {
    id: 'f3',
    name: 'Multi_Agent_Execution_Graph',
    type: 'image',
    size: '94 MB',
    updatedAt: '3 days ago',
    category: 'Architecture',
    description: 'Autonomous multi-agent execution topologies, state passing graphs, and node fallback specs.',
    tags: ['Graph', 'Orchestration', 'Visuals']
  },
  {
    id: 'f4',
    name: 'System_Eval_Metrics',
    type: 'analytics',
    size: '2.1 MB',
    updatedAt: '4 days ago',
    category: 'Analytics',
    description: 'Benchmark evaluations for agent latency, tool selection accuracy, and task completion success.',
    tags: ['Eval', 'KPIs', 'Performance'],
    content: `# Agentic AI Performance Metrics

- **Task Completion Success Rate**: 98.6% across multi-step execution flows
- **Tool Selection Accuracy**: 99.1% zero-shot tool function selection
- **Avg. Sub-Task Latency**: 420ms response time per agent node`
  },
  {
    id: 'f5',
    name: 'Agent_State_Config.json',
    type: 'code',
    size: '18 KB',
    updatedAt: 'Just now',
    category: 'Engineering',
    description: 'JSON state schema for multi-agent graph nodes, memory buffers, and API tool declarations.',
    tags: ['JSON', 'Config', 'TypeScript'],
    content: `{
  "agentSystem": "${DEVELOPER_INFO.name} Agentic Core",
  "orchestrator": {
    "model": "gemini-2.5-flash",
    "temperature": 0.1,
    "maxSubAgents": 8
  },
  "guardrails": {
    "strictSchemaEnforcement": true,
    "maxRetryAttempts": 3
  }
}`
  }
];

export const ARTICLES_DATA: ArticleUpdate[] = [
  {
    id: 'art-1',
    title: 'Architecting Resilient Multi-Agent Systems with LangGraph & Gemini',
    category: 'Research & Insights',
    date: 'Jul 28, 2026',
    readTime: '5 min read',
    image: '',
    excerpt: 'A deep dive into stateful multi-agent communication, parallel execution graphs, and self-correcting error recovery loops.',
    content: `Building autonomous AI agents requires moving beyond single prompt-response patterns into stateful, graph-based orchestration. In this article, I share architectural patterns for coordinating autonomous agents that reliably solve complex enterprise workflows.

Key insights include:
- **Hierarchical Supervisor Models**: Routing tasks to specialized worker nodes with strict boundary scopes.
- **State Persistence & Checkpointing**: Enabling pause, inspect, and resume capabilities in production workflows.
- **Self-Healing Execution Loops**: Automatically catching tool failures and re-planning agent steps in real time.`,
    author: {
      name: DEVELOPER_INFO.name,
      role: DEVELOPER_INFO.role,
      avatar: ''
    }
  },
  {
    id: 'art-2',
    title: 'Deterministic Guardrails & Schema Enforcement for Enterprise LLMs',
    category: 'Technical Guide',
    date: 'Jul 14, 2026',
    readTime: '6 min read',
    image: '',
    excerpt: 'How to eliminate hallucinated JSON outputs and secure autonomous agent tool calling in mission-critical environments.',
    content: `When AI agents execute real-world actions like database queries or financial transfers, non-deterministic model outputs are unacceptable.

In this guide, I outline the multi-layer guardrail architecture I implement for enterprise clients:
1. **Constrained Decoding & Structured Schemas**: Forcing strict JSON output parsing.
2. **Pre-Execution Validation**: Intercepting invalid arguments before tools run.
3. **Semantic Post-Checks**: Evaluating generated responses against vector context embeddings.`,
    author: {
      name: DEVELOPER_INFO.name,
      role: DEVELOPER_INFO.role,
      avatar: ''
    }
  },
  {
    id: 'art-3',
    title: 'Optimizing Contextual RAG Memory for Autonomous AI Agents',
    category: 'Engineering',
    date: 'Jun 30, 2026',
    readTime: '4 min read',
    image: '',
    excerpt: 'Combining hybrid semantic search, short-term conversational buffers, and persistent episodic memory for AI agents.',
    content: `Agents are only as effective as the context they possess. By implementing hybrid vector retrieval combined with episodic memory compression, we allow AI agents to maintain coherent long-term reasoning across thousands of interaction steps.`,
    author: {
      name: DEVELOPER_INFO.name,
      role: DEVELOPER_INFO.role,
      avatar: ''
    }
  }
];

export const PRESET_PROMPTS = [
  {
    category: 'copywriting',
    label: 'Multi-Agent Decomposition',
    text: "Design a 3-agent graph (Supervisor, Researcher, Writer) to analyze an enterprise PDF document and produce a structured executive summary.",
  },
  {
    category: 'copywriting',
    label: 'Tool-Calling Spec',
    text: "Write a complete function declaration schema for a SQL database agent with strict parameter validation and safety guardrails.",
  },
  {
    category: 'imagery',
    label: 'Agent Architecture Diagram',
    text: "Describe an architectural visual topology for a multi-agent system with memory store, tool sandbox, and safety guardrail nodes.",
  },
  {
    category: 'layouts',
    label: 'System Eval Rubric',
    text: "Define a 4-point evaluation matrix to score autonomous agent decision accuracy, latency, and context grounding.",
  }
];


