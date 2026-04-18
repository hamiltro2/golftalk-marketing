"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ROIPage() {
  return (
    <div className="min-h-screen pb-32 overflow-hidden">
      
      {/* Global Navbar */}
      <nav className="fixed w-full z-50 bg-[#111827]/40 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1 -ml-2">
            <Image src="/images/golf/logo_hero_glow.png" alt="GolfTalk Logo" width={60} height={60} className="drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]" />
            <span className="text-2xl font-display font-semibold tracking-tight text-white">GolfTalk<span className="text-gray-400 font-light">.io</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/features" className="hover:text-white transition">Features</Link>
            <Link href="/roi-calculator" className="text-white font-semibold transition">ROI Impact</Link>
            <Link href="/faq" className="hover:text-white transition">Help Center</Link>
            <Link href="/security" className="hover:text-white transition">Security</Link>
          </div>
          <Link href="/book-demo" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-green-500 hover:text-gray-900 hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300">
            Get Started
          </Link>
        </div>
      </nav>

      <main className="pt-48 px-6 max-w-7xl mx-auto relative">
        <div className="text-center mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-display font-bold text-white mb-8 tracking-tighter leading-[0.9]"
          >
            The Cost of a <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Ringing Phone.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed"
          >
            Automating repetitive tasks recovers the hidden thousands of dollars lost to voicemail every single month.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-16 items-center mb-32 bg-white/[0.03] p-10 md:p-16 rounded-[3rem] border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden relative"
        >
          {/* Subtle internal gradient */}
          <div className="absolute -inset-1/2 bg-gradient-to-br from-green-500/5 via-transparent to-transparent z-0 pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">Recover Lost Revenue</h2>
            <p className="text-lg md:text-xl text-gray-400 font-light mb-10 leading-relaxed">
              With industry data showing an average revenue of $140 per group and 43% additional ancillary revenue per player, capturing the bookings from missed calls can result in immense revenue recovery.
            </p>
            
            <ul className="space-y-6 text-gray-300 mb-12">
              {['Focus on Hospitality, Let AI Handle the Rest', 'Cost Containment & Efficiency', 'Empower Your Staff to Serve Present Guests'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg font-light">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20">
                     <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-red-500/10 border border-red-500/20 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-[30px] -translate-y-1/2 translate-x-1/2"></div>
              <span className="block text-red-500 font-bold mb-2 tracking-wide uppercase text-sm">Industry Average Loss</span>
              <span className="text-5xl md:text-6xl font-display font-extrabold text-white tracking-tighter">$344,925<span className="text-2xl text-gray-400 font-light ml-2 tracking-normal">/ year</span></span>
            </motion.div>
          </div>
          
          <div className="relative z-10 group">
             <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
             <Image 
                src="/images/golf/roi_glow.png" 
                alt="ROI Dashboard Glow" 
                width={800} 
                height={800} 
                className="rounded-3xl shadow-2xl w-full object-cover border border-white/10 group-hover:border-white/20 transition duration-500"
              />
          </div>
        </motion.div>

        {/* Enter Golftalk.io Slide */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 relative group rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl p-2 bg-white/5 backdrop-blur-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent z-10 pointer-events-none"></div>
          <Image 
             src="/images/golf/page5_highres.png" 
             alt="Enter Golftalk.io Dashboard via Pro Shop" 
             width={1200} 
             height={800} 
             className="w-full object-cover rounded-3xl"
          />
        </motion.div>

        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="text-center py-16"
        >
            <h3 className="text-3xl font-display font-bold text-white mb-8 tracking-tight">Want to see the exact numbers for your facility?</h3>
            <Link href="/book-demo" className="inline-flex bg-green-500 text-[#111827] px-10 py-4 rounded-full text-xl font-bold hover:bg-green-400 hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] transition-all duration-300">
              Schedule your custom ROI Analysis
            </Link>
        </motion.div>
      </main>
    </div>
  );
}
