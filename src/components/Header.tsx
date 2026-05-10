import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { FileText, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.5-1.56 6.5-7.14a5.5 5.5 0 0 0-1.5-3.82C18.8 3.5 18 2 18 2s-1.5-.5-4.5 1.5a16.8 16.8 0 0 0-9 0C1.5 1.5 0 2 0 2s.8 1.5 1.5 4.02C0 7.2 0 8.5 0 9.84c0 5.58 3.32 6.79 6.5 7.14a4.8 4.8 0 0 0-1 2.82v4.18Z" /></svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center"
    >
      <div className="absolute inset-0 bg-forest/60 backdrop-blur-xl border-b border-cream/10 shadow-lg pointer-events-none" />

      {/* Left Axis: Logo / Name */}
      <motion.div variants={itemVariants} className="relative z-10 flex items-center cursor-pointer max-w-[55%] md:max-w-none">
        <Link to="/" className="hover:text-amber transition-colors duration-500 flex flex-col justify-center">
          <span className={`transition-all duration-500 origin-left font-bold ${isScrolled ? 'text-xl md:text-2xl text-amber' : 'text-lg md:text-xl text-cream'}`}>
            Ali Asghar
          </span>
          <div className={`grid transition-all duration-500 ${isScrolled ? 'grid-rows-[0fr] opacity-0' : 'grid-rows-[1fr] opacity-100'}`}>
            <span className="overflow-hidden text-xs md:text-sm text-cream/70 mt-0.5 hidden sm:block">
              Threats don't wait. Neither should your defenses.
            </span>
            <span className="overflow-hidden text-[11px] leading-tight text-cream/70 mt-0.5 sm:hidden pr-2">
              Cyber Security Engineer
            </span>
          </div>
        </Link>
      </motion.div>

      {/* Right Axis: Buttons */}
      <nav className="relative z-10 flex items-center gap-2 sm:gap-4">
        {/* GitHub Button */}
        <motion.a
          variants={itemVariants}
          href="https://github.com/auroradreamer"
          target="_blank"
          rel="noreferrer"
          className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-cream/5 border border-cream/10 hover:bg-cream/10 hover:border-cream/20 transition-all duration-300 backdrop-blur-md overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="GitHub Profile"
        >
          <GithubIcon className="w-5 h-5 text-cream group-hover:text-amber transition-colors" />
        </motion.a>

        {/* Blog Button */}
        <motion.div variants={itemVariants}>
          <Link
            to="/blogs"
            className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-cream/5 border border-cream/10 hover:bg-cream/10 hover:border-cream/20 transition-all duration-300 backdrop-blur-md overflow-hidden"
            aria-label="Blog Page"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <BookOpen className="w-5 h-5 text-cream group-hover:text-amber transition-colors" />
            </motion.div>
          </Link>
        </motion.div>

        {/* LinkedIn Button */}
        <motion.a
          variants={itemVariants}
          href="https://www.linkedin.com/in/aliasghar-cybersec/"
          target="_blank"
          rel="noreferrer"
          className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-cream/5 border border-cream/10 hover:bg-cream/10 hover:border-cream/20 transition-all duration-300 backdrop-blur-md overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="LinkedIn Profile"
        >
          <LinkedinIcon className="w-5 h-5 text-cream group-hover:text-amber transition-colors" />
        </motion.a>

        {/* Resume Button */}
        <motion.a
          variants={itemVariants}
          href="/Ali Asghar Security Analyst.pdf"
          download
          className="group relative flex items-center gap-2 px-4 h-10 rounded-full bg-amber/90 hover:bg-amber border border-amber/20 hover:border-amber/40 transition-all duration-300 shadow-[0_0_15px_rgba(251,191,36,0.3)] hover:shadow-[0_0_25px_rgba(251,191,36,0.5)] overflow-hidden text-forest font-semibold text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FileText className="w-4 h-4" />
          <span className="hidden sm:inline">Resume</span>
        </motion.a>
      </nav>
    </motion.header>
  );
}
