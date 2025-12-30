import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaPaperPlane, FaBell, FaLightbulb, FaArrowRight } from 'react-icons/fa'
import {
  SiReact,
  SiNestjs,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiFlask,
  SiFlutter,
  SiDocker,
  SiAmazonaws,
  SiSalesforce,
} from 'react-icons/si'
import { HiCog6Tooth, HiCube, HiBriefcase, HiSpeakerWave } from 'react-icons/hi2'
import Marquee from '../../components/Marquee/Marquee'
import FAQCTASection from '../../components/ui/faq-cta-section'
import AnimatedNetworkBackground from '../../components/AnimatedNetworkBackground/AnimatedNetworkBackground'

// Horizontal Slideshow Component
const HorizontalTechSlideshow: React.FC = () => {
  const lobeIcons = [
    { name: 'openai', slug: 'openai' },
    { name: 'anthropic', slug: 'anthropic' },
    { name: 'claude', slug: 'claude' },
    { name: 'google', slug: 'google' },
    { name: 'gemini', slug: 'gemini' },
    { name: 'github', slug: 'github' },
    { name: 'python', slug: 'python' },
    { name: 'react', slug: 'react' },
    { name: 'aws', slug: 'aws' },
    { name: 'azure', slug: 'azure' },
    { name: 'docker', slug: 'docker' },
    { name: 'kubernetes', slug: 'kubernetes' },
    { name: 'git', slug: 'git' },
    { name: 'typescript', slug: 'typescript' },
    { name: 'nodejs', slug: 'nodejs' },
    { name: 'nextjs', slug: 'nextjs' },
    { name: 'mongodb', slug: 'mongodb' },
    { name: 'postgresql', slug: 'postgresql' },
    { name: 'redis', slug: 'redis' },
    { name: 'nginx', slug: 'nginx' },
    { name: 'tensorflow', slug: 'tensorflow' },
    { name: 'pytorch', slug: 'pytorch' },
    { name: 'huggingface', slug: 'huggingface' },
    { name: 'langchain', slug: 'langchain' },
    { name: 'vercel', slug: 'vercel' },
    { name: 'netlify', slug: 'netlify' },
    { name: 'firebase', slug: 'firebase' },
    { name: 'gcp', slug: 'gcp' },
    { name: 'terraform', slug: 'terraform' },
    { name: 'jenkins', slug: 'jenkins' },
    { name: 'graphql', slug: 'graphql' },
    { name: 'rust', slug: 'rust' },
    { name: 'java', slug: 'java' },
    { name: 'go', slug: 'go' },
    { name: 'swift', slug: 'swift' },
    { name: 'kotlin', slug: 'kotlin' },
    { name: 'vue', slug: 'vue' },
    { name: 'angular', slug: 'angular' },
    { name: 'svelte', slug: 'svelte' },
    { name: 'flutter', slug: 'flutter' },
    { name: 'electron', slug: 'electron' },
    { name: 'jest', slug: 'jest' },
    { name: 'cypress', slug: 'cypress' },
    { name: 'webpack', slug: 'webpack' },
    { name: 'vite', slug: 'vite' },
    { name: 'eslint', slug: 'eslint' },
    { name: 'prettier', slug: 'prettier' },
    { name: 'tailwind', slug: 'tailwind' },
    { name: 'sass', slug: 'sass' },
    { name: 'less', slug: 'less' },
  ];

  // Duplicate icons for seamless loop
  const duplicatedIcons = [...lobeIcons, ...lobeIcons];

  const x = useMotionValue(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    const speed = 0.5; // Pixels per frame

    const animate = () => {
      const current = x.get();
      const iconWidth = 120; // Width for icon + text
      const gap = 32; // gap-8 = 32px
      const totalWidth = (iconWidth + gap) * lobeIcons.length;
      
      // Reset when scrolled past the first set
      if (Math.abs(current) >= totalWidth) {
        x.set(0);
      } else {
        x.set(current - speed);
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [x]);

  return (
    <div className="relative py-16 overflow-hidden">
      {/* Technologies Badge */}
      <div className="flex justify-center mb-8">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-red-500 text-white font-semibold text-sm shadow-2xl"
        >
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="whitespace-nowrap">Technologies</span>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Container */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-8 items-center"
          style={{ x }}
        >
          {duplicatedIcons.map((icon, index) => {
            const originalIndex = index % lobeIcons.length;
            
            return (
              <motion.div
                key={`${icon.name}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.1 + (originalIndex * 0.02),
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -4,
                  zIndex: 30,
                  transition: { duration: 0.2 }
                }}
                className="flex-shrink-0 flex flex-col items-center justify-center gap-2 cursor-pointer group"
              >
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-white/5 dark:bg-white/10 backdrop-blur-sm border border-white/10 dark:border-white/20 group-hover:bg-white/10 dark:group-hover:bg-white/20 transition-colors">
                  <img
                    src={`https://unpkg.com/@lobehub/icons-static-svg@latest/icons/${icon.slug}.svg`}
                    alt={icon.name}
                    className="w-10 h-10 object-contain transition-transform group-hover:scale-110"
                    onError={(e) => {
                      const skillIconMap: { [key: string]: string } = {
                        'openai': 'openai', 'anthropic': 'anthropic', 'claude': 'anthropic',
                        'google': 'google', 'gemini': 'google', 'github': 'github',
                        'python': 'python', 'react': 'react', 'aws': 'aws', 'azure': 'azure',
                        'docker': 'docker', 'kubernetes': 'kubernetes', 'git': 'git',
                        'typescript': 'ts', 'nodejs': 'nodejs', 'nextjs': 'nextjs',
                        'mongodb': 'mongodb', 'postgresql': 'postgres', 'redis': 'redis',
                        'nginx': 'nginx', 'tensorflow': 'tensorflow', 'pytorch': 'pytorch',
                        'huggingface': 'huggingface', 'langchain': 'langchain',
                        'vercel': 'vercel', 'netlify': 'netlify', 'firebase': 'firebase',
                        'gcp': 'gcp', 'terraform': 'terraform', 'jenkins': 'jenkins',
                        'graphql': 'graphql', 'rust': 'rust', 'java': 'java', 'go': 'go',
                        'swift': 'swift', 'kotlin': 'kotlin', 'vue': 'vue', 'angular': 'angular',
                        'svelte': 'svelte', 'flutter': 'flutter', 'electron': 'electron',
                        'jest': 'jest', 'cypress': 'cypress', 'webpack': 'webpack',
                        'vite': 'vite', 'eslint': 'eslint', 'prettier': 'prettier',
                        'tailwind': 'tailwind', 'sass': 'sass', 'less': 'less',
                      };
                      const fallback = skillIconMap[icon.slug] || icon.slug;
                      e.currentTarget.src = `https://skillicons.dev/icons?i=${fallback}`;
                      e.currentTarget.className = `w-10 h-10 object-contain group-hover:scale-110 transition-transform`;
                    }}
                  />
                </div>
                {/* Text Label */}
                <span className="text-xs md:text-sm font-medium text-white/80 dark:text-white/80 group-hover:text-white dark:group-hover:text-white transition-colors whitespace-nowrap">
                  {icon.name.charAt(0).toUpperCase() + icon.name.slice(1)}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Gradient Fade Edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
    </div>
  );
};

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const marqueeBrands = [
    { name: 'Threat Detection', icon: null },
    { name: 'Phishing Protection', icon: null },
    { name: 'Ransomware Prevention', icon: null },
    { name: 'Network Security', icon: null },
    { name: 'Endpoint Protection', icon: null },
    { name: 'Cloud Security', icon: null },
    { name: 'SOC Monitoring', icon: null },
    { name: 'Incident Response', icon: null },
    { name: 'Threat Intelligence', icon: null },
    { name: 'Data Protection', icon: null },
    { name: 'Vulnerability Assessment', icon: null },
    { name: 'Compliance Audit', icon: null },
    { name: 'Security Operations', icon: null },
    { name: 'Malware Detection', icon: null },
    { name: 'Identity & Access Management', icon: null },
    { name: 'Security Analytics', icon: null },
    { name: 'Penetration Testing', icon: null },
    { name: 'cogninode technologies', icon: '/cogninode.jpg' },
  ]

  // Logo images for circular gallery - using skillicons.dev for reliable loading
  const galleryItems = [
    { image: 'https://skillicons.dev/icons?i=linux', text: 'Linux' },
    { image: 'https://skillicons.dev/icons?i=bash', text: 'Bash' },
    { image: 'https://skillicons.dev/icons?i=python', text: 'Python' },
    { image: 'https://skillicons.dev/icons?i=aws', text: 'AWS Security' },
    { image: 'https://skillicons.dev/icons?i=docker', text: 'Docker' },
    { image: 'https://skillicons.dev/icons?i=kubernetes', text: 'Kubernetes' },
    { image: 'https://skillicons.dev/icons?i=github', text: 'GitHub' },
    { image: 'https://skillicons.dev/icons?i=azure', text: 'Azure' },
    { image: 'https://skillicons.dev/icons?i=git', text: 'Git' },
    { image: 'https://skillicons.dev/icons?i=postgresql', text: 'PostgreSQL' },
    { image: 'https://skillicons.dev/icons?i=redis', text: 'Redis' },
    { image: 'https://skillicons.dev/icons?i=nginx', text: 'Nginx' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-8 lg:pt-16 lg:pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black transition-colors duration-300">
        {/* Animated Network Background */}
        <AnimatedNetworkBackground />
        
        {/* Bottom gradient overlay */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-gray-50/80 to-gray-100 dark:via-gray-950/80 dark:to-black" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto text-center relative z-10"
        >
          <div className="relative px-6 pt-2 sm:px-16 sm:pt-3 pb-4 sm:pb-6">
            <div className="relative z-10">
              <motion.span
                variants={itemVariants}
                className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-gray-700 dark:text-white mb-6"
              >
                CYBERSECURITY EXCELLENCE
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white leading-[1.1] tracking-tight"
              >
                Protecting Your <span className="text-red-500 dark:text-red-500">Digital Future</span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-700 dark:text-white mb-12 max-w-3xl mx-auto leading-relaxed font-normal"
              >
                We specialize in AI-driven cybersecurity solutions that help organizations safeguard their networks, applications, and data. By combining advanced analytics with robust security engineering, we deliver accurate threat detection and efficient response capabilities.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <Link to="/get-started">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 rounded-lg font-medium text-white text-base bg-red-500 hover:bg-red-600 dark:bg-red-500 dark:hover:bg-red-600 transition-all duration-200 shadow-md"
                  >
                    Get Security Assessment
                  </motion.button>
                </Link>
                <Link to="/case-study">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 rounded-lg font-medium text-gray-900 dark:text-white text-base bg-transparent hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-all duration-200 border border-gray-900 dark:border-white"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </motion.div>
              
              {/* Scroll Indicator */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-10 h-10 rounded-full border-2 border-gray-900 dark:border-white flex items-center justify-center"
                >
                  <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </motion.div>
              </motion.div>
              <Marquee pauseOnHover speed={35} className="mx-auto max-w-4xl mt-8">
                {marqueeBrands.map((brand) => (
                  <div
                    key={`hero-${brand.name}`}
                    className="flex items-center gap-3 px-5 py-2 text-xs tracking-[0.5em] uppercase text-gray-600 dark:text-white/60"
                  >
                    {brand.Icon ? (
                      <brand.Icon className="w-5 h-5 text-gray-600 dark:text-white/60 flex-shrink-0" />
                    ) : brand.icon ? (
                      <img
                        src={brand.icon}
                        alt={brand.name}
                        className="w-5 h-5 object-contain flex-shrink-0"
                        onError={(e) => {
                          // Fallback to dot if image fails to load
                          const parent = e.currentTarget.parentElement;
                          if (parent) {
                            const dot = document.createElement('span');
                            dot.className = 'inline-block h-1.5 w-1.5 rounded-full bg-[#780606]/40';
                            parent.replaceChild(dot, e.currentTarget);
                          }
                        }}
                      />
                    ) : (
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#780606]/40 flex-shrink-0" />
                    )}
                    <span>{brand.name}</span>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </motion.div>
      </section>



      {/* About Us Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-16 pb-20 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-black text-gray-900 dark:text-white transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-red-600 dark:text-red-500 tracking-tight leading-[1.1] mb-8">
              About Us
            </h2>
          </motion.div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <motion.p
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed font-normal text-center"
            >
              We specialize in <span className="text-red-600 dark:text-red-500 font-semibold">AI-driven cybersecurity solutions</span> that help organizations safeguard their networks, applications, and data.
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed font-normal text-center"
            >
              By combining advanced analytics with robust security engineering, we deliver accurate threat detection and efficient response capabilities.
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed font-normal text-center"
            >
              Our technology is built to operate at scale, meeting the security and compliance requirements of enterprise and high-assurance environments.
            </motion.p>
          </div>
        </div>
      </section>


      {/* Technologies Section with Lobe Icons - Rainbow Design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black dark:bg-black transition-colors duration-300 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-[1.1] tracking-tight">
              Packed with<br />
              <span className="text-red-500">Innovation.</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-normal mt-6">
              cogninode technologies is powered by cutting-edge technologies designed to elevate your business with AI-driven solutions.
            </p>
          </motion.div>

          {/* Horizontal Tech Slideshow */}
          <HorizontalTechSlideshow />

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 2.0 }}
            className="mt-16"
          >
            <Link to="/get-started">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white text-base bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 transition-all duration-200 shadow-lg"
              >
                Get Started
                <FaArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Gallery Section - Header Only */}
      <section id="services" className="pt-12 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-black dark:to-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center space-y-2 mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Our Security Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-white max-w-3xl mx-auto mt-2">
              AI-driven cybersecurity solutions built to operate at scale for enterprise environments
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'AI-Based Phishing Protection',
                description: 'Advanced AI-powered phishing detection and prevention solutions that identify and block malicious emails, links, and social engineering attacks before they reach your users.',
                image: '/phishing-protection.jpg',
              },
              {
                title: 'Ransomware Detection & Prevention',
                description: 'Proactive ransomware protection with real-time detection, behavioral analysis, and automated response to prevent encryption attacks and data loss.',
                image: '/ransomware.jpg',
              },
              {
                title: 'Malware Detection & Analysis',
                description: 'Comprehensive malware detection and analysis services using advanced AI to identify, analyze, and neutralize malicious software threats across your infrastructure.',
                image: '/malware.jpg',
              },
              {
                title: 'Network Security & Monitoring',
                description: 'Comprehensive network security solutions with 24/7 monitoring to protect your infrastructure from unauthorized access and attacks.',
                image: '/network.jpg',
              },
              {
                title: 'Threat Intelligence & Risk Scoring',
                description: 'Proactive threat intelligence services that provide risk scoring and threat hunting to stay ahead of emerging cyber threats.',
                image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&q=80',
              },
              {
                title: 'Incident Detection & Response',
                description: 'Rapid incident response services with digital forensics capabilities to minimize damage and recover from security breaches.',
                image: '/incident.jpg',
              },
              {
                title: 'Security Operations Dashboard (SOC)',
                description: '24/7 security monitoring and management through our advanced Security Operations Center with real-time threat analysis and centralized dashboard.',
                image: '/soc.jpg',
              },
              {
                title: 'Data Protection & Access Security',
                description: 'Comprehensive data protection solutions including encryption, access control, and identity management to safeguard sensitive information.',
                image: '/data.jpg',
              },
              {
                title: 'Compliance & Security Reporting',
                description: 'Ensure regulatory compliance with GDPR, HIPAA, SOC 2, ISO 27001, and other industry standards with comprehensive reporting.',
                image: '/audit.jpg',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-shadow duration-300 min-h-[520px]"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-white dark:bg-[#0a0a0a]" />

                {/* Dot Pattern Overlay */}
                <div
                  className="absolute inset-0 opacity-10 dark:opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #808080 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                  }}
                />

                {/* Red Glowing Line at Top */}
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#780606] to-transparent" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[3px] bg-[#780606] blur-[2px] opacity-60" />

                {/* Card Content */}
                <div className="relative z-10 p-8 pt-12 flex flex-col h-full">
                  {/* Top Section: Logo with Glow */}
                  <div className="text-center mb-8">
                    {/* Red Glow behind circle */}
                    <div className="relative inline-block">
                      <div className="absolute inset-0 w-12 h-12 bg-[#780606]/40 blur-xl rounded-full" />
                      {/* Red Circular Logo with Lightning Bolt */}
                      <div className="relative w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-[#780606] to-[#a00] flex items-center justify-center shadow-xl shadow-[#780606]/40">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Title - Large and Bold */}
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center mb-6 leading-tight group-hover:text-[#780606] dark:group-hover:text-[#dc2626] transition-colors duration-300 whitespace-pre-line">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 dark:text-gray-500 text-center text-base md:text-lg leading-relaxed mb-8">
                    {item.description}
                  </p>

                  {/* Animation Container at Bottom */}
                  <div className="mt-auto">
                    <div className="relative w-[90%] mx-auto aspect-video rounded-2xl overflow-hidden bg-gray-100/50 dark:bg-[#1a1a2e] border border-gray-200/50 dark:border-[#780606]/20">
                      {item.image ? (
                        item.image.endsWith('.mov') || item.image.endsWith('.mp4') ? (
                          <video
                            src={item.image}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                          />
                        )
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900">
                          <svg className="w-16 h-16 text-gray-400 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                      )}
                      {/* Subtle overlay on hover */}
                      <div className="absolute inset-0 bg-[#780606]/0 group-hover:bg-[#780606]/5 transition-colors duration-300" />
                    </div>
                  </div>
                </div>

                {/* Border */}
                <div className="absolute inset-0 rounded-3xl border border-gray-200 dark:border-gray-800/50 group-hover:border-[#780606]/30 transition-colors duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI-Powered Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-black dark:to-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <motion.button
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#780606] text-white text-sm font-medium mb-4"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Services
            </motion.button>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              AI-Powered Services for Future-Driven Businesses
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-white max-w-3xl mx-auto">
              Our cutting-edge AI solutions are designed to transform businesses, enhance efficiency, and drive innovation.
            </p>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-8 py-4 rounded-full bg-[#780606] hover:bg-[#5c0404] text-white font-semibold text-lg transition-all duration-300 shadow-lg"
              >
                Let's Talk
              </motion.button>
            </Link>
          </motion.div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {[
              {
                icon: FaBell,
                title: 'AI Chatbots',
                subtitle: 'Conversational AI',
                description: 'Custom ChatGPT integrations and AI-powered chatbots for customer support, sales, and automation.',
                image: '/chatbot.jpg',
              },
              {
                icon: FaLightbulb,
                title: 'GenAI Applications',
                subtitle: 'Generative AI Solutions',
                description: 'Build custom generative AI applications for content creation, code generation, and creative workflows.',
                image: '/genai.jpg',
              },
              {
                icon: HiCube,
                title: 'Agentic AI Applications',
                subtitle: 'Autonomous AI Agents',
                description: 'Intelligent AI agents that can perform complex tasks, make decisions, and automate business processes.',
                image: '/agent.jpg',
              },
              {
                icon: HiBriefcase,
                title: 'No-Code AI Tools',
                subtitle: 'Visual AI Builders',
                description: 'No-code platforms and tools to build AI applications without programming knowledge.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80',
              },
              {
                icon: HiSpeakerWave,
                title: 'AI Automation',
                subtitle: 'Intelligent Automation',
                description: 'Automate repetitive tasks, workflows, and processes with AI-powered automation solutions.',
                image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&q=80',
              },
              {
                icon: HiCog6Tooth,
                title: 'AI Integration Services',
                subtitle: 'Seamless Integration',
                description: 'Integrate AI capabilities into your existing systems and workflows for enhanced productivity.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-black dark:to-black border-2 border-gray-200 dark:border-black hover:border-[#780606] dark:hover:border-[#dc2626] transition-all duration-300 hover:shadow-xl shadow-lg"
              >
                <div className="relative h-full p-6">
                  {/* Arrow icon */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaArrowRight className="w-5 h-5 text-[#780606]" />
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#780606] flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>

                  {/* Subtitle */}
                  <p className="text-[#780606] dark:text-[#dc2626] font-semibold mb-3">{service.subtitle}</p>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-white text-sm mb-4 leading-relaxed">{service.description}</p>

                  {/* Image */}
                  <div className="relative w-full h-48 rounded-lg overflow-hidden mt-4 bg-gray-100 dark:bg-black">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>





      {/* FAQ & CTA Section */}
      <FAQCTASection />

    </div>
  )
}

export default Home
