import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Files, Bot, Play, Pause, ExternalLink, Award, FileBadge, HeartHandshake, Volume2, VolumeX, Maximize2, Minimize2 } from "lucide-react";

const placeholders = [
  "/1760373846057.jpg"
];

const ExperienceData = [
  {
    role: "Cyber Security Engineer",
    company: "SIRP",
    date: "April 2025 - Present",
    desc: [
      "Conducted CIS benchmarking and Nessus policy compliance assessments to identify OS-level vulnerabilities, implementing hardening controls that improved security compliance by 74% and reduced exploitable attack surface.",
      "Deployed and supported endpoint and perimeter security controls, delivering global security POCs to evaluate EDR, firewall, and Microsoft solutions, ensuring SOC alignment and incident readiness.",
      "Developed Python automation scripts using REST APIs to enforce security controls and streamline operational tasks, improving SOC efficiency, consistency in response actions, and reduction of manual errors."
    ]
  },
  {
    role: "Information Security Intern",
    company: "ThreatCure",
    date: "Aug 2024 - Sep 2024",
    desc: [
      "Supported incident detection and response using IBM SOAR and Socradar, analyzing suspicious logs, managing cases, and executing playbooks to enable timely triage, investigation, and escalation.",
      "Implemented and tuned IBM Qradar SIEM, ingesting Sysmon, firewall, and network logs to improve threat visibility, correlation, and alert fidelity across monitored environments."
    ]
  },
  {
    role: "Information Security Intern",
    company: "Trillium Information Security Systems",
    date: "Jun 2024 - July 2024",
    desc: [
      "Contributed to cross-functional teams to analyze emerging threats and develop proactive security measures.",
      "Trained in networking, cybersecurity, digital forensics, and GRC through hands-on projects and bi-weekly assessments."
    ]
  }
];

const VolunteeringData = [
  {
    role: "Cybersecurity/ Data Privacy Reviewer",
    company: "Youth Ideas At Work",
    date: "Feb 2026 - Mar 2026",
    desc: [
      "Reviewed Business Requirements Document (BRD) sections to ensure secure student data handling.",
      "Identified privacy and platform safety risks, flagging youth safety concerns in system design.",
      "Advised on account protection, consent workflows, and recommended practical data protection safeguards."
    ]
  }
];

const ProjectsData = [
  {
    id: "cape_sandbox",
    title: "Automated Malware Analysis Sandbox",
    videoSrc: "/demo.mp4",
    techStack: ["Python", "Linux", "KVM", "CAPEv2", "Bash"],
    link: "https://github.com/auroradreamer",
    desc: [
      "Architected and deployed a highly isolated automated malware analysis environment on a Linux host with a nested Windows KVM.",
      "This setup securely detonates suspicious payloads, captures behavioral telemetry, and generates actionable intelligence without risking the production environment."
    ]
  }
];

interface Certification {
  name: string;
  issuer: string;
  url: string;
  subLinks: { name: string; url: string; }[];
  desc?: string;
}

const CertificationsData: Certification[] = [
  {
    name: "Google Cybersecurity Certification",
    issuer: "Google / Coursera",
    url: "https://www.credly.com/earner/earned/badge/c5f296a8-fbaa-46dc-9f4b-4d4f3f9a1553",
    subLinks: []
  },
  {
    name: "Network Defense Essentials (NDE)",
    issuer: "EC-Council",
    url: "https://www.credly.com/earner/earned/badge/979ab3f8-b559-4727-a2d4-19bcdfc4eb85",
    subLinks: []
  },
  {
    name: "Mastercard Virtual Experience",
    issuer: "The Forage",
    url: "https://www.theforage.com/completion-certificates/mastercard/vcKAB5yYAgvemepGQ_Mastercard_wCs52pJRr7W3nK9xH_1689142084667_completion_certificate.pdf",
    subLinks: []
  },
  {
    name: "Clifford Chance Cyber Security",
    issuer: "The Forage",
    url: "https://www.theforage.com/completion-certificates/Clifford%20Chance/33CKX5eTKH3dXer7X_Clifford%20Chance_wCs52pJRr7W3nK9xH_1688997878779_completion_certificate.pdf",
    subLinks: []
  },
  {
    name: "Blue Team Junior Analyst",
    issuer: "Security Blue Team",
    url: "https://elearning.securityblue.team/home/certificate/351952017",
    subLinks: [
      { name: "Module 1", url: "https://elearning.securityblue.team/home/certificate/955071112" },
      { name: "Module 2", url: "https://elearning.securityblue.team/home/certificate/597923823" },
      { name: "Module 3", url: "https://elearning.securityblue.team/home/certificate/819808421" },
      { name: "Module 4", url: "https://elearning.securityblue.team/home/certificate/252095688" },
      { name: "Module 5", url: "https://elearning.securityblue.team/home/certificate/691479567" },
      { name: "Module 6", url: "https://elearning.securityblue.team/home/certificate/383024546" }
    ]
  },
  {
    name: "IBM Security QRadar Functions",
    issuer: "Pluralsight",
    url: "https://app.pluralsight.com/achievements/share/96ee8d0b-4a7b-4311-b71d-799a010581e7",
    subLinks: []
  },
  {
    name: "Security Compliance Governance",
    issuer: "Pluralsight",
    url: "https://app.pluralsight.com/achievements/share/96ee8d0b-4a7b-4311-b71d-799a010581e7",
    subLinks: []
  }
];

function ProjectCard({ project }: { project: typeof ProjectsData[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isTheaterMode, setIsTheaterMode] = useState(false);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentVideo = videoRef.current;
    if (currentVideo) {
      observer.observe(currentVideo);
    }

    return () => {
      if (currentVideo) {
        observer.unobserve(currentVideo);
      }
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative">
      {isTheaterMode && (
        <div
          className="fixed inset-0 z-[90] bg-black/90 backdrop-blur-sm cursor-pointer transition-opacity duration-500"
          onClick={() => setIsTheaterMode(false)}
        />
      )}
      {/* Left: VS Code Video Wrapper (7 cols) */}
      <div className="lg:col-span-7 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={isTheaterMode
            ? "fixed inset-2 sm:inset-4 md:inset-12 z-[100] rounded-xl md:rounded-2xl overflow-hidden bg-[#15201B]/95 backdrop-blur-3xl border border-cream/20 shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col transition-all duration-500"
            : "relative rounded-xl overflow-hidden bg-[#15201B]/80 backdrop-blur-xl border border-cream/20 shadow-[0_0_40px_rgba(251,191,36,0.15)] flex flex-col transition-all duration-500"}
        >
          {/* macOS Title Bar */}
          <div className="h-10 bg-[#1e1e1e] flex items-center px-4 border-b border-white/5 shrink-0">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div
                className="w-3 h-3 rounded-full bg-[#27C93F] cursor-pointer hover:scale-110 transition-transform"
                onClick={() => setIsTheaterMode(!isTheaterMode)}
                title="Toggle Theater Mode"
              ></div>
            </div>
            <div className="ml-6 flex items-end h-full">
              <div className="px-4 py-2 bg-[#15201B]/80 text-[13px] text-cream/70 font-mono border-t-2 border-t-amber flex items-center gap-2">
                <span className="text-amber">▶</span> {project.videoSrc.split('/').pop()}
              </div>
            </div>
          </div>

          {/* Editor Body */}
          <div className="flex flex-1 relative min-h-[300px] sm:min-h-[400px]">
            {/* Sidebar */}
            <div className="w-12 bg-[#1e1e1e] border-r border-white/5 flex flex-col items-center py-4 gap-6 shrink-0 z-10">
              <button className="text-cream/40 hover:text-cream transition-colors" aria-label="Explorer">
                <Files className="w-6 h-6" />
              </button>
              <button className="text-cream/40 hover:text-cream transition-colors" aria-label="AI Chat">
                <Bot className="w-6 h-6" />
              </button>
            </div>

            {/* Video Area */}
            <div className="relative flex-1 bg-[#0d1410] overflow-hidden group p-2 sm:p-4 md:p-6 flex items-center justify-center">
              <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/5 bg-black/50 shadow-2xl flex items-center justify-center">
                <video
                  ref={videoRef}
                  className="w-full h-full object-contain"
                  preload="metadata"
                  muted={isMuted}
                  loop
                  playsInline
                >
                  <source src={project.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Controls Container */}
              <div className="absolute bottom-4 right-4 z-20 flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 focus-within:opacity-100 transition-all duration-300">
                <button
                  onClick={toggleMute}
                  className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-cream hover:bg-black/70 hover:text-amber transition-all duration-300"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); setIsTheaterMode(!isTheaterMode); }}
                  className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-cream hover:bg-black/70 hover:text-amber transition-all duration-300"
                  aria-label="Toggle Theater Mode"
                >
                  {isTheaterMode ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                </button>
              </div>

              {/* Play/Pause Custom Overlay */}
              <div
                className={`absolute inset-0 z-10 transition-all duration-300 flex items-center justify-center cursor-pointer ${isPlaying ? 'bg-black/40 opacity-0 group-hover:opacity-100' : 'bg-black/60 opacity-100'}`}
                onClick={togglePlay}
              >
                <button className={`w-16 h-16 rounded-full bg-cream/10 backdrop-blur-md border border-cream/20 flex items-center justify-center text-cream hover:bg-amber/90 hover:text-forest hover:border-amber transition-all duration-300 shadow-[0_0_20px_rgba(251,191,36,0)] hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] pointer-events-none ${!isPlaying ? 'scale-100' : 'md:scale-90 md:hover:scale-100'}`}>
                  {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right: Description Widget (5 cols) */}
      <div className="lg:col-span-5 w-full">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 rounded-3xl backdrop-blur-md bg-cream/5 border border-cream/10 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-cream mb-4">
            {project.title}
          </h3>

          <div className="space-y-4 text-cream/70 leading-relaxed mb-8">
            {project.desc.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-full bg-amber/10 border border-amber/20 text-amber text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-amber text-forest font-semibold hover:bg-amber/90 transition-colors shadow-[0_0_15px_rgba(251,191,36,0.3)]"
            >
              <ExternalLink className="w-4 h-4" />
              View details
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


export default function Home() {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % placeholders.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen flex flex-col items-center max-w-6xl mx-auto space-y-32">
      {/* 1. Introduction Section */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        {/* Left: Avatar Frame & Location */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-amber/40 to-cream/10 shadow-[0_0_40px_rgba(251,191,36,0.15)] flex items-center justify-center overflow-hidden backdrop-blur-xl">
            {/* The circular crop */}
            <div className="w-full h-full rounded-full overflow-hidden bg-forest relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImg}
                  src={placeholders[currentImg]}
                  alt="Profile slides"
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex flex-col items-center gap-2 px-4 py-2 rounded-full bg-cream/5 border border-cream/10 backdrop-blur-md relative z-10"
          >
            <span className="flex items-center gap-2"><span className="text-xl">📍</span><span className="text-cream/90 font-medium tracking-wide">Karachi / Pakistan</span></span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 flex flex-col items-center text-center p-5 rounded-2xl bg-cream/5 border border-cream/10 backdrop-blur-md w-full max-w-xs shadow-lg relative z-10"
          >
            <h3 className="text-amber font-bold text-lg leading-tight">FAST NUCES, Karachi</h3>
            <p className="text-cream/90 font-medium mt-2 leading-snug">Bachelor of Science in Cyber Security</p>
            <div className="mt-3 px-3 py-1 rounded-full border border-cream/10 bg-forest/50 text-cream/70 text-xs font-semibold">
              Sep 2021 - May 2025
            </div>
          </motion.div>
        </div>

        {/* Right: Bio */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight"
          >
            Hi, I'm <span className="text-amber">Ali Asghar</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-6 rounded-2xl bg-cream/5 border border-cream/10 backdrop-blur-xl shadow-lg border-l-4 border-l-amber"
          >
            <p className="text-cream/80 text-lg md:text-xl leading-relaxed italic">
              "A cybersecurity engineer who thinks like an attacker to build better defenses. One year into the field, going deeper than most people bother with at this stage, because the problems worth solving in this space demand it."
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Experience Section */}
      <section id="experience" className="w-full relative pb-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-cream to-amber pb-2">
            Experience
          </h2>
          <div className="h-1 w-24 bg-amber mx-auto mt-4 rounded-full opacity-70"></div>
        </div>

        <div className="space-y-8">
          {ExperienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative flex flex-col p-8 rounded-3xl backdrop-blur-md bg-cream/5 border border-cream/10 hover:border-amber/50 hover:bg-cream/10 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-cream group-hover:text-amber transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <p className="text-amber/80 text-lg font-medium mt-1">{exp.company}</p>
                </div>
                <div className="px-4 py-1.5 rounded-full border border-cream/20 bg-forest/50 text-cream/70 text-sm font-semibold whitespace-nowrap">
                  {exp.date}
                </div>
              </div>

              <ul className="space-y-3">
                {exp.desc.map((point, i) => (
                  <li key={i} className="flex items-start text-cream/70 leading-relaxed group-hover:text-cream/90 transition-colors">
                    <span className="text-amber mr-3 mt-1.5 opacity-80 text-sm">✦</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2.5 Volunteering Section */}
      <section id="volunteering" className="w-full relative pb-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-cream to-amber pb-2">
            Volunteering & Community
          </h2>
          <div className="h-1 w-24 bg-amber mx-auto mt-4 rounded-full opacity-70"></div>
        </div>

        <div className="space-y-8">
          {VolunteeringData.map((vol, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative flex flex-col p-8 rounded-3xl backdrop-blur-md bg-cream/5 border border-cream/10 hover:border-amber/50 hover:bg-cream/10 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-cream group-hover:text-amber transition-colors duration-300 flex items-center gap-3">
                    <HeartHandshake className="w-7 h-7 text-amber" />
                    {vol.role}
                  </h3>
                  <p className="text-amber/80 text-lg font-medium mt-1">{vol.company}</p>
                </div>
                <div className="px-4 py-1.5 rounded-full border border-cream/20 bg-forest/50 text-cream/70 text-sm font-semibold whitespace-nowrap">
                  {vol.date}
                </div>
              </div>

              <ul className="space-y-3">
                {vol.desc.map((point, i) => (
                  <li key={i} className="flex items-start text-cream/70 leading-relaxed group-hover:text-cream/90 transition-colors">
                    <span className="text-amber mr-3 mt-1.5 opacity-80 text-sm">✦</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Projects Section */}
      <section id="projects" className="w-full relative pb-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-cream to-amber pb-2">
            Projects Catalog
          </h2>
          <div className="h-1 w-24 bg-amber mx-auto mt-4 rounded-full opacity-70"></div>
        </div>

        <div className="space-y-24">
          {ProjectsData.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      {/* 4. Certifications Section */}
      <section id="certifications" className="w-full relative pb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-cream to-amber pb-2">
            Certifications
          </h2>
          <div className="h-1 w-24 bg-amber mx-auto mt-4 rounded-full opacity-70"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CertificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group relative flex flex-col p-6 rounded-3xl backdrop-blur-md bg-cream/5 border border-cream/10 hover:border-amber/40 hover:bg-cream/10 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(251,191,36,0.15)] flex-1 h-full"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center border border-cream/20 group-hover:border-amber/40 transition-colors">
                  <Award className="w-6 h-6 text-amber" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-cream group-hover:text-amber leading-snug transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-cream/60 text-sm mt-1">{cert.issuer}</p>
                </div>
              </div>

              {cert.desc && <p className="text-amber/80 text-sm font-semibold mb-4">{cert.desc}</p>}

              <div className="mt-auto pt-4 border-t border-cream/10">
                {cert.subLinks.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {cert.subLinks.map((sub, i) => (
                      <a
                        key={i}
                        href={sub.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs px-3 py-1 rounded-full bg-cream/10 text-cream/80 hover:bg-amber/20 hover:text-amber transition-colors flex items-center gap-1"
                      >
                        <FileBadge className="w-3 h-3" /> {sub.name}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${cert.url === "#" ? "text-cream/30 cursor-not-allowed" : "text-amber hover:text-amber/70"}`}
                  >
                    {cert.url !== "#" ? <><ExternalLink className="w-4 h-4" /> Verify Credential</> : "Pending Link"}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
