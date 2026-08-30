'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '@/components/ThemeToggle';
import { 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Mail, 
  Check, 
  Copy,
  ExternalLink,
  Terminal,
  Code2,
  Database,
  Cpu,
  Twitter,
  Facebook,
  Instagram,
  Sparkles,
  Layers,
  Briefcase
} from 'lucide-react';

/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 */
/* Genre: Modern-Minimal / Technical Editorial */

export default function Portfolio() {
  const [copied, setCopied] = React.useState(false);
  const email = 'akbarfarooq2006@gmail.com';
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Contact%20from%20Website&body=Hi%20Akbar,%0A%0A`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  };

  const stagger = {
    animate: { transition: { staggerChildren: 0.08 } }
  };

  return (
    <div className="min-h-screen selection:bg-accent selection:text-text-inverse bg-canvas text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-canvas/85 backdrop-blur-md border-b border-border-subtle transition-colors">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a 
            href="#" 
            className="font-display font-semibold text-lg text-text-primary tracking-tight hover:opacity-80 transition-opacity"
          >
            Akbar Farooq<span className="text-accent">.</span>
          </a>
          <nav className="flex items-center gap-6">
            <a href="#about" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors hidden sm:block">About</a>
            <a href="#skills" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors hidden sm:block">Skills</a>
            <a href="#work" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors hidden sm:block">Work</a>
            <a href="#journey" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors hidden sm:block">Journey</a>
            <a href="#contact" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors hidden sm:block">Contact</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-16 sm:pt-24 pb-24 space-y-28 sm:space-y-36">
        {/* Hero Section */}
        <section className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-canvas-subtle border border-border-subtle text-xs font-mono font-medium text-text-secondary"
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
              className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-text-primary leading-[1.08]"
              style={{ overflowWrap: 'anywhere', minWidth: 0 }}
            >
              Akbar Farooq
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl sm:text-2xl text-text-secondary max-w-2xl font-normal leading-relaxed"
            >
              Full Stack Web &amp; Agentic AI Developer. <br className="hidden sm:block" />
              Building autonomous agent systems, robust distributed architectures, and tactile human-AI interfaces.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a 
              href="#work"
              className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md bg-text-primary text-text-inverse font-medium text-sm transition-all active:scale-[0.98] hover:opacity-90 shadow-tactile-sm"
            >
              <span>View Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a 
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md bg-canvas-elevated border border-border-strong text-text-primary font-medium text-sm transition-all hover:bg-canvas-subtle active:scale-[0.98] shadow-tactile-sm group"
              aria-label="Contact via Gmail"
            >
              <Mail className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
              <span>Contact Me</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
        </section>

        {/* About & Philosophy */}
        <section id="about" className="grid md:grid-cols-[1fr_2.2fr] gap-8 md:gap-12 pt-8 border-t border-border-subtle">
          <div>
            <span className="text-xs font-mono font-medium text-accent uppercase tracking-wider block mb-2">01 / Overview</span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-text-primary">Engineering Philosophy</h2>
          </div>
          <div className="space-y-6 text-text-secondary leading-relaxed text-base sm:text-lg">
            <p>
              I bridge the gap between traditional full-stack web engineering and emerging autonomous AI architectures. My work focuses on building reliable, deterministic systems that leverage non-deterministic intelligence safely.
            </p>
            <p>
              Based in Pakistan, I specialize in the Next.js ecosystem for modern frontend delivery and robust distributed backends for orchestrating multi-agent workflows using the OpenAI Agents SDK and LangChain paradigms.
            </p>
            <p>
              Whether it&apos;s a high-concurrency cloud architecture or a self-healing agentic workflow, I prioritize performance, strictly typed boundaries, and tactile user experiences.
            </p>
          </div>
        </section>

        {/* Skills Matrix */}
        <section id="skills" className="grid md:grid-cols-[1fr_2.2fr] gap-8 md:gap-12 pt-8 border-t border-border-subtle">
          <div>
            <span className="text-xs font-mono font-medium text-accent uppercase tracking-wider block mb-2">02 / Capabilities</span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-text-primary">Technical Arsenal</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-canvas-elevated border border-border-subtle space-y-4 shadow-tactile-sm">
              <div className="flex items-center gap-2.5 text-text-primary font-semibold">
                <div className="p-2 rounded-lg bg-canvas-subtle border border-border-subtle">
                  <Cpu className="w-5 h-5 text-accent" />
                </div>
                <h3>Agentic AI &amp; LLMs</h3>
              </div>
              <ul className="space-y-2 text-sm text-text-secondary font-mono">
                <li>• OpenAI Agents SDK</li>
                <li>• LangGraph &amp; Multi-Agent</li>
                <li>• Vector DBs &amp; Hybrid RAG</li>
                <li>• Tool Calling &amp; Schema Validation</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-canvas-elevated border border-border-subtle space-y-4 shadow-tactile-sm">
              <div className="flex items-center gap-2.5 text-text-primary font-semibold">
                <div className="p-2 rounded-lg bg-canvas-subtle border border-border-subtle">
                  <Code2 className="w-5 h-5 text-accent" />
                </div>
                <h3>Frontend Architecture</h3>
              </div>
              <ul className="space-y-2 text-sm text-text-secondary font-mono">
                <li>• Next.js 15 (App Router)</li>
                <li>• React 19 &amp; TypeScript</li>
                <li>• Tailwind CSS &amp; Framer Motion</li>
                <li>• State Systems &amp; SSR/SSG</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-canvas-elevated border border-border-subtle space-y-4 shadow-tactile-sm">
              <div className="flex items-center gap-2.5 text-text-primary font-semibold">
                <div className="p-2 rounded-lg bg-canvas-subtle border border-border-subtle">
                  <Database className="w-5 h-5 text-accent" />
                </div>
                <h3>Backend &amp; Distributed</h3>
              </div>
              <ul className="space-y-2 text-sm text-text-secondary font-mono">
                <li>• Node.js &amp; Express / Fastify</li>
                <li>• Python &amp; FastAPI</li>
                <li>• PostgreSQL, Prisma &amp; Drizzle</li>
                <li>• Redis, Queues &amp; WebSockets</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-canvas-elevated border border-border-subtle space-y-4 shadow-tactile-sm">
              <div className="flex items-center gap-2.5 text-text-primary font-semibold">
                <div className="p-2 rounded-lg bg-canvas-subtle border border-border-subtle">
                  <Terminal className="w-5 h-5 text-accent" />
                </div>
                <h3>Systems &amp; Tooling</h3>
              </div>
              <ul className="space-y-2 text-sm text-text-secondary font-mono">
                <li>• Git &amp; GitHub Actions CI/CD</li>
                <li>• Docker &amp; Containerization</li>
                <li>• Vercel &amp; Cloudflare</li>
                <li>• Linux Administration &amp; Security</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section id="work" className="space-y-8 pt-8 border-t border-border-subtle">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-medium text-accent uppercase tracking-wider block mb-2">03 / Portfolio</span>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-text-primary mb-1">Selected Work</h2>
              <p className="text-text-secondary">Curated projects spanning autonomous agent systems and full-stack platforms.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-canvas-elevated border border-border-subtle hover:border-border-strong transition-all shadow-tactile-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display font-semibold text-lg text-text-primary group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-text-muted hover:text-text-primary transition-colors p-1"
                      aria-label={`View ${project.title}`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span 
                      key={j} 
                      className="px-2.5 py-1 rounded-md bg-canvas-subtle text-xs font-mono text-text-secondary border border-border-subtle"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Journey / Experience Timeline */}
        <section id="journey" className="grid md:grid-cols-[1fr_2.2fr] gap-8 md:gap-12 pt-8 border-t border-border-subtle">
          <div>
            <span className="text-xs font-mono font-medium text-accent uppercase tracking-wider block mb-2">04 / Trajectory</span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-text-primary">Engineering Journey</h2>
          </div>
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-px before:bg-border-subtle">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="relative pl-10 space-y-2">
                <span className="absolute left-2.5 top-1.5 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-canvas"></span>
                <span className="text-xs font-mono text-accent font-medium">{item.period}</span>
                <h3 className="font-display font-semibold text-lg text-text-primary">{item.role}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="p-8 sm:p-12 rounded-2xl bg-canvas-elevated border border-border-subtle text-center space-y-6 shadow-tactile-sm">
          <div className="inline-flex p-3 rounded-full bg-canvas-subtle border border-border-subtle text-accent">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="max-w-xl mx-auto space-y-3">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary">Let&apos;s Build Something Resilient</h2>
            <p className="text-text-secondary text-base">
              Available for full-stack engineering contracts, autonomous AI agent systems, and technical consulting.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <a 
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-md bg-text-primary text-text-inverse font-medium text-sm transition-all active:scale-[0.98] hover:opacity-90 shadow-tactile-sm group"
            >
              <Mail className="w-4 h-4 text-accent" />
              <span>Send via Gmail</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
            <button 
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 h-11 px-6 rounded-md bg-canvas-subtle border border-border-strong text-text-primary font-medium text-sm transition-all hover:bg-canvas active:scale-[0.98]"
            >
              <Copy className="w-4 h-4 text-text-secondary" />
              <span>{copied ? 'Copied akbarfarooq2006@gmail.com' : 'Copy Email Address'}</span>
            </button>
          </div>

          {/* Social Profiles Grid */}
          <div className="pt-6 border-t border-border-subtle flex flex-wrap justify-center gap-3">
            {SOCIAL_LINKS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-canvas-subtle border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-strong transition-all text-xs font-mono group"
                  aria-label={item.label}
                >
                  <Icon className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 pb-8 border-t border-border-subtle flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 text-text-muted text-sm">
            <span className="font-display font-medium text-text-primary">Akbar Farooq</span>
            <span>•</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-canvas-subtle border border-transparent hover:border-border-subtle transition-all"
                  aria-label={item.label}
                  title={item.label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-canvas-subtle border border-transparent hover:border-border-subtle transition-all"
              aria-label="Email via Gmail"
              title="Compose email to Akbar Farooq in Gmail"
            >
              <Mail className="w-4 h-4" />
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
    link: 'https://github.com/akbarfarooq'
  },
  {
    title: 'Synthetix Flow',
    description: 'Visual Workflow Builder for AI Agent Orchestration. A tactile canvas interface connecting deterministic APIs with non-deterministic LLM tool routing via Python FastAPI.',
    tags: ['React Flow', 'FastAPI', 'Python', 'PostgreSQL'],
    link: 'https://github.com/akbarfarooq'
  },
  {
    title: 'AuraPulse Intelligence',
    description: 'Real-Time Enterprise Semantic Search Platform. Ingests corporate documentation and surfaces insights via Hybrid RAG using Qdrant vector databases.',
    tags: ['Next.js 15', 'pgvector', 'RAG', 'Tailwind'],
    link: 'https://github.com/akbarfarooq'
  },
  {
    title: 'CognitiveMesh CLI',
    description: 'Self-healing code generation agent. Analyzes ASTs locally, proposes structural fixes via LLMs, and fully automates the Git commit/push cycle.',
    tags: ['TypeScript CLI', 'AST', 'LLM Tool Calling'],
    link: 'https://github.com/akbarfarooq'
  }
];

const TIMELINE = [
  {
    period: '2024 — Present',
    role: 'Autonomous AI & Agentic Systems Engineer',
    description: 'Architecting multi-agent execution workflows, deterministic tool calling harnesses with the OpenAI Agents SDK, and enterprise RAG retrieval pipelines.'
  },
  {
    period: '2023 — 2024',
    role: 'Full-Stack Web Engineer',
    description: 'Developing high-performance, edge-rendered Next.js platforms with TypeScript, Tailwind CSS, PostgreSQL, and scalable microservice APIs.'
  },
  {
    period: '2022 — 2023',
    role: 'Frontend & UI Systems Developer',
    description: 'Crafting responsive user interfaces, accessible design systems, and fluid micro-interactions with React, modern CSS, and motion libraries.'
  }
];

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/akbarfarooq/',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    url: 'https://github.com/akbarfarooq',
    icon: Github,
  },
  {
    label: 'X (Twitter)',
    url: 'https://x.com/akbarfarooq_ai',
    icon: Twitter,
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/akbarfarooqai',
    icon: Facebook,
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/akbarfarooq.ai/',
    icon: Instagram,
  },
];
