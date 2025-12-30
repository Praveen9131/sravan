import React from 'react'
import { motion } from 'framer-motion'
import { useLocation, Link } from 'react-router-dom'
import {
  FaInbox,
  FaFileAlt,
  FaClipboardCheck,
  FaCarrot,
  FaFileContract,
  FaHeadset,
  FaUsers,
  FaGraduationCap,
  FaBuilding,
  FaShieldAlt,
  FaCamera,
  FaWrench,
  FaDollarSign,
  FaFolder,
  FaLightbulb,
  FaBriefcase,
  FaSearch,
  FaGavel,
  FaTruck,
  FaClock,
} from 'react-icons/fa'

const About: React.FC = () => {
  const location = useLocation()

  // Animation variants
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

  // All 20 agents with their icons and descriptions
  const allAgents = [
    // First set (1/2)
    {
      title: 'Omnichannel Intake & Triage Agent',
      description: 'Captures context, verifies ID, prioritizes, schedules, opens the right case',
      icon: FaInbox,
    },
    {
      title: 'Clinical/Operations Doc Parsing Agent',
      description: 'Structures PDFs/HL7/FHIR/imaging notes/SOPs and syncs to LIMS/ERP/CRM',
      icon: FaFileAlt,
    },
    {
      title: 'Audit & CAPA Agent',
      description: 'Flags deviations, drafts CAPA, assigns owners, tracks effectiveness, compiles evidence packs',
      icon: FaClipboardCheck,
    },
    {
      title: 'Inventory Orchestrator Agent',
      description: 'Forecasts demand, enforces FEFO raises POs, reconciles GRNs, suggests substitutes',
      icon: FaCarrot,
    },
    {
      title: 'Vendor & Contract Agent',
      description: 'Tracks SLA/OLA, generates scorecards, flags expiries, drafts amendments via CLM',
      icon: FaFileContract,
    },
    {
      title: 'Customer Service L1/L2 Agent',
      description: 'Handles FAQs, retrieves status, executes safe actions, escalates with perfect summaries.',
      icon: FaHeadset,
    },
    {
      title: 'HR & Onboarding Agent',
      description: 'Writes role profiles, screens CVs, schedules, provisions accounts, drives 30-60-90 plans',
      icon: FaUsers,
    },
    {
      title: 'Training & Certification Coach',
      description: 'Builds learning paths, generates quizzes from SOPs, tracks expiries, updates LMS/HRIS',
      icon: FaGraduationCap,
    },
    {
      title: 'Proposal/RFP Copilot',
      description: 'Builds compliance matrices, drafts sections, checks pricing guardrails, packages submissions',
      icon: FaBuilding,
    },
    {
      title: 'AML/Fraud/Risk Agent',
      description: 'Correlates multi-signal patterns, scores risk, recommends actions, drafts reports',
      icon: FaShieldAlt,
    },
    // Second set (2/2)
    {
      title: 'Industrial Vision QA Agent',
      description: 'Detects defects/PPE issues, correlates with SCADA/MES, opens NCRs, maintenance',
      icon: FaCamera,
    },
    {
      title: 'Field-Service Dispatch Agent',
      description: 'Optimizes routes/skills, pre-orders spares, guides checklists, closes jobs in FSM',
      icon: FaWrench,
    },
    {
      title: 'Revenue-Cycle Agent',
      description: 'Suggests coding, predicts denials, drafts appeals, reconciles payments, flags leakage',
      icon: FaDollarSign,
    },
    {
      title: 'Data Steward & Lineage Guardian',
      description: 'Detects schema drift/PII leaks, maintains lineage, enforces retention/masking',
      icon: FaFolder,
    },
    {
      title: 'SOC Co-pilot (Cyber)',
      description: 'Triages SIEM/EDR alerts, recommends steps, executes safe actions, drafts incident reports',
      icon: FaLightbulb,
    },
    {
      title: 'Sales/Account Growth Copilot',
      description: 'Researches accounts, crafts call plans, writes follow-ups, surfaces risk/opportunity',
      icon: FaBriefcase,
    },
    {
      title: 'Research & Competitive Intelligence Agent',
      description: 'Monitors sources, synthesizes briefs, scores threats/opportunities, alerts stakeholders',
      icon: FaSearch,
    },
    {
      title: 'Legal Intake & Redlining Agent',
      description: 'Extracts clauses, classifies risk, drafts redlines, ensures approvals with audit trails',
      icon: FaGavel,
    },
    {
      title: 'Logistics Network Optimizer',
      description: 'Plans last-mile, rebalances inventory, manages returns, simulates scenarios',
      icon: FaTruck,
    },
    {
      title: 'Model Ops & Governance Agent',
      description: 'Runs evals/red-team tests, monitors drift/cost/latency, gates releases, dashboards',
      icon: FaClock,
    },
  ]

  // Industry verticals mapping
  const industryVerticals = [
    {
      name: 'Health & Life Sciences',
      agents: [
        'Omnichannel Intake & Triage Agent',
        'Clinical/Operations Doc Parsing Agent',
        'Audit & CAPA Agent',
        'Inventory Orchestrator Agent',
        'Revenue-Cycle Agent',
        'Logistics Network Optimizer',
        'Field-Service Dispatch Agent',
      ],
    },
    {
      name: 'Banking & Finance',
      agents: [
        'AML/Fraud/Risk Agent',
        'Omnichannel Intake & Triage Agent',
        'Customer Service L1/L2 Agent',
        'Vendor & Contract Agent',
        'Sales/Account Growth Copilot',
        'Research & Competitive Intelligence Agent',
        'Model Ops & Governance Agent',
      ],
    },
    {
      name: 'Industrial & Manufacturing',
      agents: [
        'Industrial Vision QA Agent',
        'Inventory Orchestrator Agent',
        'Field-Service Dispatch Agent',
        'Logistics Network Optimizer',
        'Vendor & Contract Agent',
        'Audit & CAPA Agent',
        'Data Steward & Lineage Guardian',
      ],
    },
    {
      name: 'Public Sector & Smart Cities',
      agents: [
        'Omnichannel Intake & Triage Agent',
        'Field-Service Dispatch Agent',
        'Logistics Network Optimizer',
        'Research & Competitive Intelligence Agent',
        'Vendor & Contract Agent',
        'Audit & CAPA Agent',
        'Data Steward & Lineage Guardian',
      ],
    },
    {
      name: 'Legal',
      agents: [
        'Legal Intake & Redlining Agent',
        'Clinical/Operations Doc Parsing Agent',
        'Vendor & Contract Agent',
        'Audit & CAPA Agent',
        'Proposal/RFP Copilot',
        'Data Steward & Lineage Guardian',
        'SOC Co-pilot (Cyber)',
      ],
    },
    {
      name: 'Retail & E-commerce',
      agents: [
        'Customer Service L1/L2 Agent',
        'Sales/Account Growth Copilot',
        'Inventory Orchestrator Agent',
        'Logistics Network Optimizer',
        'Field-Service Dispatch Agent',
        'Vendor & Contract Agent',
        'Omnichannel Intake & Triage Agent',
      ],
    },
    {
      name: 'Energy & Utilities',
      agents: [
        'Field-Service Dispatch Agent',
        'Logistics Network Optimizer',
        'Industrial Vision QA Agent',
        'Omnichannel Intake & Triage Agent',
        'Audit & CAPA Agent',
        'Vendor & Contract Agent',
        'Data Steward & Lineage Guardian',
      ],
    },
    {
      name: 'Logistics / 3PL',
      agents: [
        'Logistics Network Optimizer',
        'Inventory Orchestrator Agent',
        'Field-Service Dispatch Agent',
        'Omnichannel Intake & Triage Agent',
        'Customer Service L1/L2 Agent',
        'Vendor & Contract Agent',
        'Audit & CAPA Agent',
      ],
    },
  ]

  // Horizontal agents
  const horizontalAgents = [
    'Customer Service L1/L2 Agent',
    'HR & Onboarding Agent',
    'Training & Certification Coach',
    'Sales/Account Growth Copilot',
    'Proposal/RFP Copilot',
    'Data Steward & Lineage Guardian',
    'SOC Co-pilot (Cyber)',
    'Model Ops & Governance Agent',
    'Research & Competitive Intelligence Agent',
    'Vendor & Contract Agent',
  ]

  const cardVariants = {
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

  // Render agents section
  if (location.pathname === '/ai-ml-solutions/agents') {
    return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Agent Examples
            </h1>
            <p className="text-xl text-gray-600 dark:text-white max-w-3xl mx-auto mb-8">
              These agents can be applied to multiple industries. Each agent is goal-driven, tool-using, stateful, and self-correcting—with human-in-the-loop checkpoints.
            </p>
          </motion.div>

          {/* All Agents Grid - Part 1/2 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Agent Examples (1/2)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allAgents.slice(0, 10).map((agent) => {
                const IconComponent = agent.icon
                return (
                  <motion.div
                    key={agent.title}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="bg-white dark:bg-black rounded-xl shadow-lg border border-gray-200 dark:border-black p-6 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-gray-900 to-[#780606] flex items-center justify-center">
                        <IconComponent className="text-white text-xl" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          {agent.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-white leading-relaxed">
                          {agent.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* All Agents Grid - Part 2/2 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Agent Examples (2/2)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allAgents.slice(10, 20).map((agent) => {
                const IconComponent = agent.icon
                return (
                  <motion.div
                    key={agent.title}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="bg-white dark:bg-black rounded-xl shadow-lg border border-gray-200 dark:border-black p-6 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-gray-900 to-[#780606] flex items-center justify-center">
                        <IconComponent className="text-white text-xl" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          {agent.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-white leading-relaxed">
                          {agent.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Industry Verticals Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Industry Verticals
            </h2>
            <p className="text-center text-gray-600 dark:text-white mb-12 max-w-3xl mx-auto">
              These agents have use cases across industry verticals (and the horizontals that scale)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industryVerticals.map((industry) => (
                <motion.div
                  key={industry.name}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  className="bg-white dark:bg-black rounded-xl shadow-lg border border-gray-200 dark:border-black p-6"
                >
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    {industry.name}
                  </h3>
                  <ul className="space-y-2">
                    {industry.agents.map((agentName) => (
                      <li
                        key={agentName}
                        className="text-sm text-gray-600 dark:text-white flex items-start gap-2"
                      >
                        <span className="text-[#780606] mt-1.5">•</span>
                        <span>{agentName}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Horizontals Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-white dark:bg-black rounded-xl shadow-lg border border-gray-200 dark:border-black p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Horizontals
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {horizontalAgents.map((agentName, index) => (
                <React.Fragment key={agentName}>
                  <span className="text-gray-700 dark:text-white font-medium">{agentName}</span>
                  {index < horizontalAgents.length - 1 && (
                    <span className="text-gray-400 dark:text-gray-500">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  // Shared platform data
  const platformsData = [
    {
      name: 'Salesforce',
      slug: 'salesforce',
      description: 'Salesforce expertise: Implementation, integration, data management, custom development, and managed services. Focus on key clouds and industry solutions.',
      capabilities: [
        'Einstein | Data Cloud | Agentforce | Analytics',
        'Sales, Service, Marketing Experience Commerce Cloud',
        'Industry Clouds: Health | Manufacturing | FSC',
        'FSL | SMAX | CPQ',
        'Salesforce AppExchange Solutions',
      ],
      focusAreas: [
        'Integration Services (MuleSoft, Conga, DocuSign)',
        'Data Migration and Master Data Management',
        'Health Check & System Performance Enhancement',
        'Custom Salesforce Development (Apex, Lightning)',
        'Managed Services',
        'Salesforce Implementation & Optimization',
      ],
      roles: [
        'Salesforce Administrator',
        'Salesforce Developer',
        'Salesforce Project Manager',
        'Salesforce Architect',
        'Salesforce Customer Success Manager',
        'Salesforce Consultant',
        'Other Salesforce Roles',
      ],
    },
    {
      name: 'Oracle',
      slug: 'oracle',
      description: 'Oracle expertise: Cloud migration, ERP implementations (Fusion, PeopleSoft), data management, application development, and database optimization. Focus on key Oracle technologies and solutions.',
      capabilities: [
        'Oracle Cloud Infrastructure (OCI)',
        'Oracle APEX Solutions',
        'Oracle Autonomous Database',
        'Oracle E-Business Suite (EBS)',
        'Oracle Enterprise Manager',
        'Oracle Analytics Cloud | Oracle AI/ML Predictive Analytics',
      ],
      focusAreas: [
        'Cloud Migration & Architecture Services',
        'Oracle Fusion ERP, SCM, and HCM Implementation',
        'Data Management and Integration Services',
        'Oracle Application Development & Customization',
        'Oracle Database Performance Tuning & Security',
        'PeopleSoft HCM Implementation',
      ],
      roles: [
        'Oracle Cloud Infrastructure Specialist',
        'Oracle Database Administrator',
        'Oracle Fusion ERP Consultant',
        'Oracle Application Developer',
        'Oracle Analytics Specialist',
        'Oracle Recruiter',
        'Other Oracle Roles',
      ],
    },
    {
      name: 'SAP',
      slug: 'sap',
      description: 'SAP expertise: S/4HANA migration, Fiori UX, cloud platform integration, analytics, and industry solutions. Focus on application management, BPR, data management, and AI/ML.',
      capabilities: [
        'SAP S/4HANA',
        'SAP Fiori & UX/UI Design',
        'SAP Cloud Platform (SCP)',
        'SAP Analytics Cloud (SAC)',
        'SAP SuccessFactors | SAP Ariba & Procurement',
        'IoT & Industry 4.0 | Industry Solutions (IS-Retail, IS-Oil, etc.)',
      ],
      focusAreas: [
        'SAP S/4HANA Migration & Implementation',
        'SAP AMS (Application Management Services)',
        'Business Process Reengineering (BPR) for SAP',
        'SAP Data Management & Analytics (BI/BoBJ)',
        'SAP Integration & Cloud Services (CPI)',
        'SAP RPA and AI/ML Solutions',
      ],
      roles: [
        'SAP Consultant',
        'SAP Developer',
        'SAP Project Manager',
        'SAP Business Analyst',
        'SAP Functional Lead',
        'SAP Integration Specialist',
        'Other SAP Roles',
      ],
    },
    {
      name: 'Power BI',
      slug: 'power-bi',
      description: 'Power BI expertise: Custom report development, data integration, advanced analytics, and embedded analytics solutions. Focus on best practices and real-time data monitoring.',
      capabilities: [
        'Power BI Desktop',
        'Power BI Service',
        'Power BI Embedded',
        'Power BI Report Builder',
        'Power BI Dataflows',
        'Power BI Mobile App',
      ],
      focusAreas: [
        'Custom Report & Dashboard Development',
        'Data Integration & Transformation Services',
        'Advanced Analytics & Predictive Modeling',
        'Power BI Governance & Best Practices',
        'Real-time Data Monitoring & Alerts',
        'Power BI Embedded Analytics & Integration',
      ],
      roles: [
        'Power BI Developer',
        'Power BI Data Analyst',
        'Power BI Embedded Specialist',
        'Power BI Governance Expert',
        'Power BI Report Builder',
        'Power BI Mobile App Developer',
        'Other PowerBI Roles',
      ],
    },
  ]

  // Individual Platform Pages
  const platformSlug = location.pathname.split('/').pop()
  const currentPlatform = platformsData.find((p) => p.slug === platformSlug)
  if (currentPlatform && location.pathname.startsWith('/talent-ecosystem/')) {
    return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-black dark:to-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/talent-ecosystem"
              className="inline-flex items-center gap-2 text-[#780606] dark:text-[#ff6b6b] hover:text-[#5c0404] dark:hover:text-[#ff8888] font-semibold transition-colors"
            >
              <span>←</span> Back to Talent Ecosystem
            </Link>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {currentPlatform.name}
            </h1>
            <p className="text-lg text-gray-700 dark:text-white leading-relaxed max-w-4xl mx-auto">
              {currentPlatform.description}
            </p>
          </motion.div>

          {/* Three Column Layout */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-black rounded-xl shadow-lg border border-gray-200 dark:border-black p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-[#780606] dark:bg-[#ff6b6b] rounded"></span>
                Capabilities
              </h2>
              <ul className="space-y-3">
                {currentPlatform.capabilities.map((cap, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[#780606] mt-1.5 flex-shrink-0">●</span>
                    <span className="text-gray-700 dark:text-white">{cap}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-black rounded-xl shadow-lg border border-gray-200 dark:border-black p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-[#780606] dark:bg-[#ff6b6b] rounded"></span>
                Focus Areas
              </h2>
              <ul className="space-y-3">
                {currentPlatform.focusAreas.map((area, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[#780606] mt-1.5 flex-shrink-0">●</span>
                    <span className="text-gray-700">{area}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-black rounded-xl shadow-lg border border-gray-200 dark:border-black p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-[#780606] dark:bg-[#ff6b6b] rounded"></span>
                Available Roles
              </h2>
              <ul className="space-y-3">
                {currentPlatform.roles.map((role, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[#780606] mt-1.5 flex-shrink-0">●</span>
                    <span className="text-gray-700">{role}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-[#780606] to-[#5c0404] rounded-xl shadow-xl p-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-6 opacity-90">
              Reach us at{' '}
              <a
                href="mailto:info@cogninode.com"
                className="underline hover:opacity-80 transition-opacity"
              >
                info@cogninode.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    )
  }

  // Talent Ecosystem page
  if (location.pathname === '/talent-ecosystem') {
    const talentEcosystemData = {
      overview: {
        title: 'Talent Ecosystem',
        subtitle: 'Harnessing AI across deterministic and non-deterministic frontiers.',
        description: 'We offer comprehensive IT solutions and services, encompassing strategic consulting, implementation, managed services, and resource augmentation, delivered via industry standard methodologies. Our commitment includes prompt response times and efficient onboarding.',
      },
      capabilities: [
        'Strategic Consulting & Advisory',
        'DevOps CI/CD Processes and Tools',
        'Implementation & Integration',
        'Managed IT Services',
        'Resource Augmentation & Expertise Deployment',
        'Business Process Optimization',
        'Change Management, Training & User Adoption',
      ],
      focusAreas: [
        'Agile, Waterfall, Adaptive Execution',
        'PMO, Quality & Governance',
        'Continuous Support and Monitoring',
        'Resource Timelines',
        'Post-Requirement Resumes within 4-5 days',
        'Post-Confirmation Onboarding within 2 weeks',
      ],
      platforms: platformsData,
    }

    return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-black dark:to-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {talentEcosystemData.overview.title}
            </h1>
            <p className="text-xl text-[#780606] dark:text-[#ff6b6b] font-semibold mb-6">
              {talentEcosystemData.overview.subtitle}
            </p>
            <p className="text-lg text-gray-700 dark:text-white leading-relaxed max-w-4xl mx-auto">
              {talentEcosystemData.overview.description}
            </p>
          </motion.div>

          {/* Capabilities & Focus Areas */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white dark:bg-black rounded-xl shadow-lg border border-gray-200 dark:border-black p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Capabilities Snapshot</h2>
              <ul className="space-y-3">
                {talentEcosystemData.capabilities.map((capability, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#780606] dark:text-[#ff6b6b] mt-1.5">●</span>
                    <span className="text-gray-700 dark:text-white">{capability}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white dark:bg-black rounded-xl shadow-lg border border-gray-200 dark:border-black p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Focus Areas Snapshot</h2>
              <ul className="space-y-3">
                {talentEcosystemData.focusAreas.map((area, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#780606] dark:text-[#ff6b6b] mt-1.5">●</span>
                    <span className="text-gray-700 dark:text-white">{area}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Key Platforms - Clickable Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Key Platforms</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {talentEcosystemData.platforms.map((platform) => {
                const platformSlug = platform.name.toLowerCase().replace(/\s+/g, '-').replace('power-bi', 'power-bi')
                return (
                  <Link
                    key={platform.name}
                    to={`/talent-ecosystem/${platformSlug}`}
                  >
                    <motion.div
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white dark:bg-black rounded-xl shadow-lg border border-gray-200 dark:border-black p-6 h-full cursor-pointer hover:shadow-2xl hover:border-[#780606] dark:hover:border-[#ff6b6b] transition-all duration-300 group"
                    >
                      <div className="flex flex-col h-full">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#780606] dark:group-hover:text-[#ff6b6b] transition-colors">
                          {platform.name}
                        </h3>
                        <p className="text-gray-600 dark:text-white text-sm mb-4 flex-grow line-clamp-4">
                          {platform.description}
                        </p>
                        <div className="mt-auto pt-4 border-t border-gray-100">
                          <span className="text-[#780606] font-semibold text-sm group-hover:underline">
                            Learn More →
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                )
              })}
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-[#780606] to-[#5c0404] rounded-xl shadow-xl p-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-6 opacity-90">
              Reach us at{' '}
              <a
                href="mailto:info@cogninode.com"
                className="underline hover:opacity-80 transition-opacity"
              >
                info@cogninode.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    )
  }

  // Default About page
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Our Story Section */}
      <section className="pt-24 md:pt-32 pb-20 md:pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-black transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.2] mb-10">
              Our Story
            </h2>
            <div className="space-y-6">
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 leading-[1.8] font-normal">
                We specialize in <strong className="text-gray-900 dark:text-white font-semibold">AI-driven cybersecurity solutions</strong> that help organizations safeguard their networks, applications, and data. By combining advanced analytics with robust security engineering, we deliver accurate threat detection and efficient response capabilities.
              </p>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 leading-[1.8] font-normal">
                Our technology is built to operate at scale, meeting the security and compliance requirements of enterprise and high-assurance environments. We work closely with our clients to build robust security postures that adapt to evolving threats and regulatory requirements.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet our Founders Section */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-black transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.2] mb-6">
              Our Leadership
            </h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 max-w-2xl mx-auto font-normal leading-[1.75]">
              Our leadership team brings decades of combined experience in cybersecurity, technology leadership, and business transformation.
            </p>
          </motion.div>

          {/* Founders Images and Descriptions */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
              {/* Founder - Maruthi Sravan Reddy */}
              <div className="text-center">
                <div className="mb-8">
                  <img
                    src="/founder.jpg"
                    alt="Maruthi Sravan Reddy"
                    className="w-full max-w-xs mx-auto rounded-xl shadow-lg object-cover aspect-[3/4]"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  Maruthi Sravan Reddy
                </h3>
                <p className="text-sm md:text-base text-[#780606] dark:text-[#ff6b6b] font-semibold mb-5 uppercase tracking-wide">
                  Founder
                </p>
                <p className="text-base text-gray-700 dark:text-gray-200 leading-[1.75] font-normal max-w-sm mx-auto">
                  Maruthi Sravan Reddy brings extensive experience in cybersecurity, technology leadership, and business transformation. With a deep understanding of enterprise security challenges and AI-driven solutions, he is committed to protecting your digital future.
                </p>
              </div>

              {/* Co-founder - Sanjay Kumar */}
              <div className="text-center">
                <div className="mb-8">
                  <img
                    src="/sanjay.jpg"
                    alt="Sanjay Kumar"
                    className="w-full max-w-xs mx-auto rounded-xl shadow-lg object-cover aspect-[3/4]"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  Sanjay Kumar
                </h3>
                <p className="text-sm md:text-base text-[#780606] dark:text-[#ff6b6b] font-semibold mb-5 uppercase tracking-wide">
                  Co-founder
                </p>
                <p className="text-base text-gray-700 dark:text-gray-200 leading-[1.75] font-normal max-w-sm mx-auto">
                  Sanjay Kumar brings over a decade of leadership in cybersecurity, IT services, and business process transformation. His strong foundation in security operations and strategic planning enables him to drive innovative cybersecurity solutions.
                </p>
              </div>
            </div>
          </motion.div>


          {/* Our Ecosystem Section */}
          <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-black transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.2] mb-10">
                  Our Security Expertise
                </h2>
                <div className="space-y-6">
                  <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 leading-[1.8] font-normal">
                    At the core of cogninode technologies is our <strong className="text-gray-900 dark:text-white font-semibold">comprehensive cybersecurity expertise</strong>. We work with leading security platforms and tools including SIEM solutions, vulnerability scanners, penetration testing frameworks, and compliance management systems.
                  </p>
                  <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 leading-[1.8] font-normal">
                    Our security services cover threat detection and response, vulnerability assessments, security audits, compliance management (GDPR, HIPAA, SOC 2), network security, cloud security, and security awareness training. We leverage industry-leading security tools and frameworks to deliver robust protection for your digital assets.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-black transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.2] mb-10">
              Our Approach
            </h2>
            <div className="space-y-6">
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 leading-[1.8] font-normal">
                We are dedicated to a <strong className="text-gray-900 dark:text-white font-semibold">customer-first approach</strong>. Our philosophy is simple: we grow when our clients succeed. With a deep understanding of diverse industries, from healthcare to finance and manufacturing, we provide tailor-made solutions that align with each client's unique challenges and objectives.
              </p>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 leading-[1.8] font-normal">
                We don't believe in a one-size-fits-all strategy. Instead, we focus on listening, collaborating, and ensuring that every project we undertake adds value. Whether it's staffing, consulting, or digital engineering, we are committed to helping clients thrive in an ever-changing technological landscape.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
