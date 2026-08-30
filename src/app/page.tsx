'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/ThemeToggle';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Terminal,
  Code2,
  Database,
  Cpu,
  Twitter
} from 'lucide-react';

/* Hallmark · pre-emit critique: P5 H5 E5 S4 R5 V5 */
/* Genre: Modern-Minimal / Technical */

export default function Portfolio() {
  const [copied, setCopied] = React.useState(false);
  const email = 'akbarfarooq2006@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  const stagger = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen selection:bg-accent selection:text-text-inverse">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border-subtle">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-display font-medium text-text-primary tracking-tight">
            AF.
          </div>
          <nav className="flex items-center gap-6">
            <a href="#work" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors hidden sm:block">Work</a>
            <a href="#about" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors hidden sm:block">About</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-32">
        {/* Hero Section */}
        <section className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-canvas-subtle border border-border-subtle text-xs font-mono font-medium text-text-secondary"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available for select agentic architecture contracts
          </motion.div>

          <motion.div 
            initial="initial"
            animate="animate"
            variants={stagger}
            className="space-y-6"
          >
            <motion.h1 
              variants={fadeInUp}
              className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-text-primary leading-[1.1]"
              style={{ overflowWrap: 'anywhere', minWidth: 0 }}
            >
              Akbar Farooq
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl sm:text-2xl text-text-secondary max-w-2xl font-normal leading-relaxed"
            >
              Full Stack Web & Agentic AI Developer. <br className="hidden sm:block" />
              Building autonomous agent systems, robust distributed architectures, and tactile human-AI interfaces.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a 
              href="#work"
              className="inline-flex items-center justify-center h-11 px-6 rounded-md bg-text-primary text-text-inverse font-medium text-sm transition-transform active:scale-[0.98] hover:bg-text-secondary"
            >
              View Work
            </a>
            <button 
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md bg-canvas-elevated border border-border-strong text-text-primary font-medium text-sm transition-all hover:bg-canvas-subtle active:scale-[0.98]"
            >
              <Mail className="w-4 h-4" />
              {copied ? 'Email Copied!' : 'Contact Me'}
            </button>
          </motion.div>
        </section>

        {/* About & Philosophy */}
        <section id="about" className="grid md:grid-cols-[1fr_2fr] gap-12 pt-8 border-t border-border-subtle">
          <div>
            <h2 className="font-display text-2xl font-medium text-text-primary">Engineering Philosophy</h2>
          </div>
          <div className="space-y-6 text-text-secondary leading-relaxed">
            <p>
              I bridge the gap between traditional full-stack web engineering and emerging autonomous AI architectures. My work focuses on building reliable, deterministic systems that leverage non-deterministic intelligence safely.
            </p>
            <p>
              Based in Pakistan, I specialize in the Next.js ecosystem for the frontend and robust distributed backends for orchestrating multi-agent workflows using the OpenAI Agents SDK and LangChain paradigms.
            </p>
            <p>
              Whether it's a high-concurrency e-commerce engine or a self-healing generative workflow, I prioritize performance, strictly typed boundaries, and tactile user experiences.
            </p>
          </div>
        </section>

        {/* Skills Matrix */}
        <section className="grid md:grid-cols-[1fr_2fr] gap-12 pt-8 border-t border-border-subtle">
          <div>
            <h2 className="font-display text-2xl font-medium text-text-primary">Technical Arsenal</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-text-primary font-medium">
                <Cpu className="w-5 h-5 text-accent" />
                <h3>Agentic AI & LLMs</h3>
              </div>
              <ul className="space-y-2 text-sm text-text-secondary font-mono">
                <li>OpenAI Agents SDK</li>
                <li>LangGraph / Multi-Agent</li>
                <li>Vector Stores / RAG</li>
                <li>Structured Outputs</li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-text-primary font-medium">
                <Code2 className="w-5 h-5 text-accent" />
                <h3>Frontend Architecture</h3>
              </div>
              <ul className="space-y-2 text-sm text-text-secondary font-mono">
                <li>Next.js / React 19</li>
                <li>TypeScript</li>
                <li>Tailwind CSS / Motion</li>
                <li>State Architecture</li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-text-primary font-medium">
                <Database className="w-5 h-5 text-accent" />
                <h3>Backend & Distributed</h3>
              </div>
              <ul className="space-y-2 text-sm text-text-secondary font-mono">
                <li>Node.js / Express</li>
                <li>Python / FastAPI</li>
                <li>PostgreSQL / Prisma</li>
                <li>Redis & WebSockets</li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-text-primary font-medium">
                <Terminal className="w-5 h-5 text-accent" />
                <h3>Systems & Tooling</h3>
              </div>
              <ul className="space-y-2 text-sm text-text-secondary font-mono">
                <li>Git / CI/CD</li>
                <li>Docker Configuration</li>
                <li>Vercel / Supabase</li>
                <li>Linux Administration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section id="work" className="space-y-12 pt-8 border-t border-border-subtle">
          <div>
            <h2 className="font-display text-2xl font-medium text-text-primary mb-2">Selected Work</h2>
            <p className="text-text-secondary">Curated projects spanning multi-agent systems and full-stack platforms.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -4 }}
                className="group relative flex flex-col justify-between p-6 rounded-xl bg-canvas-elevated border border-border-subtle hover:border-border-strong transition-colors shadow-tactile-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="font-display font-medium text-lg text-text-primary">{project.title}</h3>
                    <a href={project.link} className="text-text-muted hover:text-text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="px-2 py-1 rounded bg-canvas-subtle text-xs font-mono text-text-secondary border border-border-subtle">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 pb-8 border-t border-border-subtle flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-text-muted">
            <span className="font-display font-medium text-text-primary">Akbar Farooq</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/akbarfarooq" target="_blank" rel="noreferrer" className="text-text-muted hover:text-text-primary transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-text-muted hover:text-text-primary transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-text-muted hover:text-text-primary transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

const PROJECTS = [
  {
    title: 'NexusAgents',
    description: 'Autonomous Multi-Agent Research & Execution Engine. Orchestrates parallel specialized agents via OpenAI SDK with Redis-backed memory and real-time SSE streaming to the client.',
    tags: ['Next.js', 'OpenAI Agents SDK', 'Redis', 'TypeScript'],
    link: '#'
  },
  {
    title: 'Synthetix Flow',
    description: 'Visual Workflow Builder for AI Agent Orchestration. A tactile canvas interface connecting deterministic APIs with non-deterministic LLM tool routing via Python FastAPI.',
    tags: ['React Flow', 'FastAPI', 'Python', 'PostgreSQL'],
    link: '#'
  },
  {
    title: 'AuraPulse Intelligence',
    description: 'Real-Time Enterprise Semantic Search Platform. Ingests corporate documentation and surfaces insights via Hybrid RAG using Qdrant vector databases.',
    tags: ['Next.js 15', 'pgvector', 'RAG', 'Tailwind'],
    link: '#'
  },
  {
    title: 'CognitiveMesh CLI',
    description: 'Self-healing code generation agent. Analyzes ASTs locally, proposes structural fixes via LLMs, and fully automates the Git commit/push cycle.',
    tags: ['TypeScript CLI', 'AST', 'LLM Tool Calling'],
    link: '#'
  }
];
