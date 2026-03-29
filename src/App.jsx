import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ChevronRight, Terminal, BookOpen, Sparkles, Monitor, Zap } from 'lucide-react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { sections } from './data';

// --- High Precision Custom Cursor ---
const Cursor = () => {
  const dotX = useSpring(0, { damping: 15, stiffness: 400 });
  const dotY = useSpring(0, { damping: 15, stiffness: 400 });
  const followX = useSpring(0, { damping: 25, stiffness: 250 });
  const followY = useSpring(0, { damping: 25, stiffness: 250 });
  const [active, setActive] = React.useState(false);
  
  React.useEffect(() => {
    const onMove = (e) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      followX.set(e.clientX);
      followY.set(e.clientY);
      
      const target = e.target;
      setActive(
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.closest('button, a, .sec-header, .q-head')
      );
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className={active ? 'c-active' : ''}>
      <motion.div id="c-follow" style={{ left: followX, top: followY }} />
      <motion.div id="c-dot" style={{ left: dotX, top: dotY }} />
    </div>
  );
};

// --- Optimized Text Rendering ---
const Markdown = ({ content, highlight = '' }) => {
  if (!content) return null;
  
  // Split by double newlines to handle paragraphs/lists
  const blocks = content.split(/\n/);
  
  return blocks.map((block, bIdx) => {
    if (!block.trim()) return <div key={bIdx} style={{ height: '0.8rem' }} />;

    // Handle Headers
    if (block.startsWith('###')) {
      return (
        <span key={bIdx} className="ex-title">
          <HighlightedText text={block.replace(/^###\s*/, '').trim()} highlight={highlight} />
        </span>
      );
    }

    // Handle Bullet/Numbered Lists
    const isBullet = block.trim().startsWith('- ');
    const isNumbered = /^\d+\.\s/.test(block.trim());
    
    // Process inline styles (**bold**, `code`)
    const processInline = (text) => {
      const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);
      return parts.map((part, i) => {
        if (!part) return null;
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <span key={i} className="highlight">
              <HighlightedText text={part.slice(2, -2)} highlight={highlight} />
            </span>
          );
        }
        if (part.startsWith('`') && part.endsWith('`')) {
          return (
            <code key={i} className="code-pill">
              <HighlightedText text={part.slice(1, -1)} highlight={highlight} />
            </code>
          );
        }
        return <HighlightedText key={i} text={part} highlight={highlight} />;
      });
    };

    if (isBullet || isNumbered) {
      return (
        <div key={bIdx} className="list-item" style={{ paddingLeft: '1.2rem', margin: '0.4rem 0' }}>
          <span className="list-marker">{isBullet ? '•' : block.match(/^\d+\./)[0]}</span>
          <span style={{ marginLeft: '0.8rem' }}>{processInline(block.replace(/^[- \d.]+\s*/, ''))}</span>
        </div>
      );
    }

    return <p key={bIdx} className="p-block">{processInline(block)}</p>;
  });
};

const HighlightedText = ({ text, highlight }) => {
  if (!highlight.trim()) return <span>{text}</span>;
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return (
    <span>
      {parts.map((part, i) => 
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={i} style={{ background: 'rgba(251, 191, 36, 0.3)', color: '#fbbf24', borderRadius: '4px', padding: '0 2px' }}>{part}</span>
        ) : part
      )}
    </span>
  );
};

const CopyButton = ({ text }) => {
  const [copied, setCopied] = React.useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy}>
      {copied ? <Sparkles size={14} /> : <BookOpen size={14} />}
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
};

const App = () => {
  const [lang, setLang] = React.useState('bn');
  const [openedSec, setOpenedSec] = React.useState(null);
  const [activeQ, setActiveQ] = React.useState(null);
  const [search, setSearch] = React.useState('');
  const [showScroll, setShowScroll] = React.useState(false);

  React.useEffect(() => {
    const checkScroll = () => setShowScroll(window.scrollY > 500);
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const toggleSec = (id) => setOpenedSec(openedSec === id ? null : id);
  const toggleQ = (id) => setActiveQ(activeQ === id ? null : id);

  // Filter sections and questions based on search
  const filteredSections = sections.map((sec, sIdx) => {
    const s = search.toLowerCase();
    const titleMatch = sec.title.toLowerCase().includes(s);
    const basicsMatch = (sec.basics.en.toLowerCase().includes(s) || sec.basics.bn.toLowerCase().includes(s));
    
    const matchedQs = sec.questions.filter(q => 
      q.question.toLowerCase().includes(s) ||
      q.solve.toLowerCase().includes(s) ||
      q.explanation_en.toLowerCase().includes(s) ||
      q.explanation_bn.toLowerCase().includes(s)
    );

    return {
      ...sec,
      originalSIdx: sIdx, // Track original numbering
      displayQuestions: (titleMatch || basicsMatch) ? sec.questions : matchedQs
    };
  }).filter(sec => sec.displayQuestions.length > 0);

  const activeSection = sections.find(s => s.id === openedSec);
  const dynamicTitle = activeSection 
    ? `${activeSection.title} | ${lang === 'bn' ? 'বাংলা' : 'English'} | OOP-2 Masterclass` 
    : "OOP-2 Masterclass · Interactive C# Study Portal";
  
  const dynamicDesc = activeSection 
    ? `Learn about ${activeSection.title} in C#. Comprehensive study guide with code examples and interactive terminal output.`
    : "The ultimate interactive playground for Object-Oriented mastery in C# with bilingual documentation.";

  return (
    <div className="app-root">
      <Helmet>
        <title>{dynamicTitle}</title>
        <meta name="description" content={dynamicDesc} />
        <html lang={lang === 'bn' ? 'bn' : 'en'} />
      </Helmet>
      <Cursor />
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <div className="container">
        <header>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
            <motion.div 
              className="badge"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Zap size={14} fill="currentColor" /> System v2.0 Live
            </motion.div>
            <motion.div 
              className="badge"
              style={{ background: 'rgba(99, 102, 241, 0.1)', borderColor: 'rgba(99, 102, 241, 0.2)', color: 'white' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Sparkles size={14} style={{ color: '#fbbf24' }} /> Developed by Nishan
            </motion.div>
          </div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            OOP-2 Masterclass
          </motion.h1>
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            The ultimate interactive playground for Object-Oriented mastery in C# with bilingual documentation.
          </motion.p>
        </header>

        <motion.div 
          className="nav-pills"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="search-wrap">
            <svg 
              className="search-icon" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              style={{ width: '18px', height: '18px' }}
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input 
              type="text" 
              placeholder="Search concepts or questions..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', gap: '0.8rem' }}>
            <button className={`pill ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>English</button>
            <button className={`pill ${lang === 'bn' ? 'active' : ''}`} onClick={() => setLang('bn')}>বাংলা</button>
          </div>
        </motion.div>

        <main>
          {filteredSections.map((sec) => {
            const isOpen = openedSec === sec.id || search.length > 0;
            const sIdx = sec.originalSIdx;

            return (
              <motion.section 
                key={sec.id}
                className="sec-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
              >
                <div className="sec-header" onClick={() => toggleSec(sec.id)}>
                  <div className="sec-title">
                    <p>MODULE {sIdx + 1}</p>
                    <h2>{sec.title}</h2>
                  </div>
                  <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
                    <ChevronRight size={24} color={isOpen ? 'var(--p)' : 'white'} />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="basics">
                        <div className="basics-inner">
                          <BookOpen size={20} style={{ marginBottom: '1rem', display: 'block' }} />
                          <Markdown content={sec.basics[lang]} highlight={search} />
                        </div>
                      </div>

                      <div className="q-list">
                        {sec.displayQuestions.map((q) => {
                          const isMatch = search && (
                            q.question.toLowerCase().includes(search.toLowerCase()) ||
                            q.solve.toLowerCase().includes(search.toLowerCase())
                          );
                          const isActive = activeQ === q.id || isMatch;
                          // Find original question index for correct numbering
                          const qIdx = sections[sIdx].questions.findIndex(oq => oq.id === q.id);
                          const qNum = `${sIdx + 1}.${qIdx + 1}`;

                          return (
                            <motion.div 
                              key={q.id}
                              className={`q-box ${isActive ? 'active' : ''}`}
                              layout
                            >
                              <div className="q-head" onClick={() => toggleQ(q.id)}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                  <div className="q-num">{qNum}</div>
                                  <span className="q-title">
                                    <HighlightedText 
                                      text={q.question.replace(/^[\d.]+\s*/, '')} 
                                      highlight={search} 
                                    />
                                  </span>
                                </div>
                                <Sparkles size={18} className={isActive ? 'active' : ''} style={{ color: isActive ? '#fbbf24' : '#1e293b' }} />
                              </div>

                              <AnimatePresence>
                                {isActive && (
                                  <motion.div 
                                    className="q-body"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                  >
                                    <div className="window">
                                      <div className="win-head">
                                        <div className="win-dot" style={{ background: '#ff5f56' }} />
                                        <div className="win-dot" style={{ background: '#ffbd2e' }} />
                                        <div className="win-dot" style={{ background: '#27c93f' }} />
                                        <Monitor size={14} style={{ marginLeft: '1rem', color: '#64748b' }} />
                                        <span className="win-title">Source.cs</span>
                                        <CopyButton text={q.solve} />
                                      </div>
                                      <SyntaxHighlighter 
                                        language="csharp" 
                                        style={vscDarkPlus}
                                        customStyle={{ 
                                          margin: 0, 
                                          padding: '2.5rem', 
                                          fontSize: '1rem',
                                          background: 'transparent'
                                        }}
                                      >
                                        {q.solve}
                                      </SyntaxHighlighter>
                                    </div>

                                    <div className="window">
                                      <div className="win-head">
                                        <Terminal size={14} color="var(--succ)" />
                                        <span className="win-title">Terminal Console</span>
                                      </div>
                                      <div className="output">
                                        <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '0.2rem' }}>
                                          <span className="prompt">$</span>
                                          <span style={{ color: '#60a5fa', fontWeight: 'bold' }}>dotnet run</span>
                                        </div>
                                        <div style={{ color: '#fff' }}>
                                          {q.output.split('\n').map((line, idx) => (
                                            <div key={idx} style={{ marginBottom: '0.1rem' }}>{line}</div>
                                          ))}
                                          <motion.span 
                                            animate={{ opacity: [1, 0] }} 
                                            transition={{ repeat: Infinity, duration: 0.8 }}
                                            style={{ display: 'inline-block', width: '8px', height: '16px', background: '#3b82f6', marginLeft: '2px', verticalAlign: 'middle' }}
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    <div className="explain">
                                      <Markdown content={lang === 'bn' ? q.explanation_bn : q.explanation_en} highlight={search} />
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.section>
            );
          })}
        </main>
      </div>
      
      <footer style={{ 
        padding: '6rem 0 12rem', 
        textAlign: 'center', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '2rem',
        opacity: 0.5 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', letterSpacing: '0.2em', fontSize: '0.65rem', fontWeight: '700', color: 'var(--text-scod)' }}>
          <span>SYSTEM v2.5.0</span>
          <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--p)', boxShadow: '0 0 8px var(--p)' }}></div>
          <span>BILINGUAL CORE</span>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ 
            fontSize: '0.8rem', 
            letterSpacing: '0.3em', 
            fontWeight: '600',
            color: '#94a3b8'
          }}
        >
          &copy; {new Date().getFullYear()} CORE MASTERCLASS &middot; ALL RIGHTS RESERVED
        </motion.div>

        <motion.div 
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ 
            padding: '0.8rem 2.5rem', 
            background: 'rgba(255,255,255,0.02)', 
            border: '1px solid var(--border)', 
            borderRadius: '4rem',
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444', animation: 'pulse 2s infinite' }}></div>
          HANDCRAFTED WITH PASSION BY <span style={{ color: 'var(--p)', fontWeight: '900', textShadow: '0 0 20px var(--pg)' }}>NISHAN</span>
        </motion.div>
      </footer>

      <AnimatePresence>
        {showScroll && (
          <motion.button 
            className="scroll-top"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ChevronRight size={24} style={{ transform: 'rotate(-90deg)' }} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
