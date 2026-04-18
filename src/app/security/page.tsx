"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SecurityPage() {
  return (
    <div className="min-h-screen pb-32 overflow-hidden">
      
      {/* Global Navbar */}
      <nav className="fixed w-full z-50 bg-[#111827]/40 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.4)]">
              <svg className="w-5 h-5 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-white">GolfTalk<span className="text-green-500">.io</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/features" className="hover:text-white transition">Features</Link>
            <Link href="/roi-calculator" className="hover:text-white transition">ROI Impact</Link>
            <Link href="/faq" className="hover:text-white transition">Help Center</Link>
            <Link href="/security" className="text-white font-semibold transition">Security</Link>
          </div>
          <Link href="/book-demo" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-green-500 hover:text-gray-900 hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300">
            Get Started
          </Link>
        </div>
      </nav>

      <main className="pt-48 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-start relative">
        
        <motion.div 
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="md:w-1/2 sticky top-48"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 font-medium text-sm mb-8 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
            Enterprise-Grade Protection
          </div>
          <h1 className="text-6xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter leading-[1]">Security & <br/>Privacy.</h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
            Because voice data can contain sensitive customer identifiers, GolfTalk treats your voice logs as highly secure data. We build security in from day one.
          </p>

          <div className="relative group">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-green-500/10 rounded-full blur-[80px] -z-10 group-hover:bg-green-500/20 transition duration-1000"></div>
             <Image 
               src="/images/golf/security_lock.png" 
               alt="Security Lock Graphic" 
               width={600} 
               height={600} 
               className="rounded-[3rem] object-cover mix-blend-screen transform group-hover:scale-105 transition duration-1000"
             />
          </div>
        </motion.div>

        <div className="md:w-1/2 space-y-8 pt-10">
          {[
            { title: "End-to-End Encryption", desc: "All audio recordings, call transcripts, and metadata are strictly encrypted both in transit (TLS 1.3) and at rest (AES-256). Your data remains completely secure from unauthorized interception." },
            { title: "Strict Access Controls (RBAC)", desc: "We utilize robust Role-Based Access Control. Only authorized, designated personnel at your facility (owners, managers) have the cryptographic privileges required to access full transcripts." },
            { title: "Compliance & Privacy Guidelines", desc: "Our systems are architected to align with major data privacy frameworks, including GDPR and CCPA, ensuring that auto-data-retention purging policies meet global standards." },
            { title: "Continuous Infrastructure Monitoring", desc: "We treat our voice models like critical production infrastructure. Our perimeter employs real-time anomaly detection, rate-limiting, and hardened logging." }
          ].map((item, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ delay: i * 0.1, duration: 0.6 }}
               className="bg-white/[0.03] p-10 rounded-[2rem] border border-white/10 backdrop-blur-xl hover:bg-white/[0.05] transition-colors duration-300"
            >
              <h2 className="text-2xl font-display font-medium text-white mb-4">{item.title}</h2>
              <p className="text-lg text-gray-400 font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
