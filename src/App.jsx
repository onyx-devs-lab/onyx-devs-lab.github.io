import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Cpu, Database, Lock, ExternalLink, ChevronRight } from 'lucide-react';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Floating Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-400">Quantum Edge</div>
          <div className="space-x-8">
            <a href="#solutions" className="hover:text-blue-400 transition-colors">Solutions</a>
            <a href="#work" className="hover:text-blue-400 transition-colors">Our Work</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Animation */}
      <header className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="container mx-auto relative">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              We Build
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {' '}Software That Scales{' '}
              </span>
              With Your Ambition
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Elite engineering team specialized in building complex software systems
              for fast-growing companies. We turn your boldest tech initiatives into reality.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg flex items-center gap-2 transition-colors">
                Schedule Consultation
                <ArrowRight size={20} />
              </button>
              <button className="border border-gray-600 hover:border-blue-400 px-8 py-3 rounded-lg transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Client Logos */}
      <div className="border-y border-gray-800 py-12 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-400 mb-8">Trusted by innovative companies</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            {['Series A Startup', 'Growth Stage Scale-up', 'Enterprise Corp', 'Tech Unicorn'].map((client) => (
              <div key={client} className="text-lg font-mono text-gray-400">{client}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="solutions" className="py-24 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="work" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16">Selected Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Something Great?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always excited to partner with ambitious teams pushing the boundaries
            of what's possible in technology.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg inline-flex items-center gap-2 transition-colors">
            Start a Conversation
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-xl font-bold mb-4">Quantum Edge</h3>
              <p className="text-gray-400 max-w-md">
                Engineering excellence delivered through careful attention to detail,
                robust architecture, and a deep understanding of your business needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400">
                hello@quantumedge.dev<br />
                San Francisco & New York
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-blue-400 flex items-center gap-2 transition-colors">
                  LinkedIn <ExternalLink size={16} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 flex items-center gap-2 transition-colors">
                  GitHub <ExternalLink size={16} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 flex items-center gap-2 transition-colors">
                  Twitter <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Service Card Component with hover effects
const ServiceCard = ({ icon: Icon, title, description, features }) => {
  return (
    <div className="bg-slate-800/50 p-8 rounded-lg hover:bg-slate-700/50 transition-colors group">
      <div className="text-blue-400 mb-4">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-400">
            <ChevronRight size={16} className="text-blue-400" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Case Study Card with hover effect
const CaseStudyCard = ({ title, description, tags, impact }) => {
  return (
    <div className="bg-slate-800/30 rounded-lg p-8 hover:bg-slate-700/30 transition-colors cursor-pointer group">
      <div className="mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm mr-2">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <div className="text-gray-400">
        <strong className="text-white">Impact: </strong>
        {impact}
      </div>
    </div>
  );
};

// Sample data
const services = [
  {
    icon: Database,
    title: "Cloud Architecture & DevOps",
    description: "Build and optimize scalable cloud infrastructure that grows with your business.",
    features: [
      "Kubernetes & Container Orchestration",
      "CI/CD Pipeline Development",
      "Cloud Cost Optimization",
      "High-Availability Systems"
    ]
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "End-to-end development of robust, scalable applications.",
    features: [
      "Modern Frontend Frameworks",
      "API Development",
      "Database Design",
      "Real-time Systems"
    ]
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Integrate cutting-edge AI solutions into your products.",
    features: [
      "Custom ML Models",
      "Natural Language Processing",
      "Computer Vision",
      "MLOps & Model Deployment"
    ]
  }
];

const caseStudies = [
  {
    title: "AI-Powered Financial Analytics Platform",
    description: "Developed a real-time financial analytics platform processing millions of transactions daily.",
    tags: ["Python", "React", "AWS", "Machine Learning"],
    impact: "Reduced analysis time by 90% and increased accuracy by 35%"
  },
  {
    title: "Scalable E-commerce Infrastructure",
    description: "Rebuilt the entire infrastructure of a growing e-commerce platform to handle 100x growth.",
    tags: ["Kubernetes", "Node.js", "MongoDB", "Redis"],
    impact: "Supported 10M+ daily users with 99.99% uptime"
  }
];

export default LandingPage;