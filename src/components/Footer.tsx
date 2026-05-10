import { Link } from "react-router-dom";
import { FileText, BookOpen } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.35 6.5-1.56 6.5-7.14a5.5 5.5 0 0 0-1.5-3.82C18.8 3.5 18 2 18 2s-1.5-.5-4.5 1.5a16.8 16.8 0 0 0-9 0C1.5 1.5 0 2 0 2s.8 1.5 1.5 4.02C0 7.2 0 8.5 0 9.84c0 5.58 3.32 6.79 6.5 7.14a4.8 4.8 0 0 0-1 2.82v4.18Z" /></svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-cream/10 bg-cream/5 backdrop-blur-xl w-full z-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <h3 className="text-xl font-bold text-cream tracking-tight cursor-pointer" onClick={scrollToTop}>
              Ali's <span className="text-amber">Portfolio</span>
            </h3>
            <p className="text-cream/40 text-xs mt-1">
              © {new Date().getFullYear()} Ali Asghar. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            <a href="/#experience" className="text-cream/60 hover:text-amber transition-colors text-sm font-medium">Experience</a>
            <a href="/#volunteering" className="text-cream/60 hover:text-amber transition-colors text-sm font-medium">Volunteering</a>
            <a href="/#projects" className="text-cream/60 hover:text-amber transition-colors text-sm font-medium">Projects</a>
            <a href="/#certifications" className="text-cream/60 hover:text-amber transition-colors text-sm font-medium">Certifications</a>
            <Link to="/blogs" className="text-cream/60 hover:text-amber transition-colors text-sm font-medium">Blogs</Link>
          </nav>

          {/* Socials & Actions */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/auroradreamer"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-cream/5 border border-cream/10 hover:bg-cream/10 hover:border-cream/20 flex items-center justify-center transition-all duration-300 text-cream hover:text-amber"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/aliasghar-cybersec/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-cream/5 border border-cream/10 hover:bg-cream/10 hover:border-cream/20 flex items-center justify-center transition-all duration-300 text-cream hover:text-amber"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="/Ali Asghar Security Analyst.pdf"
              download
              className="w-9 h-9 rounded-full bg-amber/10 border border-amber/20 hover:bg-amber/20 hover:border-amber/40 flex items-center justify-center transition-all duration-300 text-amber"
              title="Download Resume"
            >
              <FileText className="w-4 h-4" />
            </a>
            <Link
              to="/blogs"
              className="w-9 h-9 rounded-full bg-cream/5 border border-cream/10 hover:bg-cream/10 hover:border-cream/20 flex items-center justify-center transition-all duration-300 text-cream hover:text-amber"
              title="Read Blogs"
            >
              <BookOpen className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
