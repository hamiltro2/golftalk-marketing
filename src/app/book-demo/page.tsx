"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSoundwave from '@/components/AnimatedSoundwave';

export default function BookDemoPage() {
  return (
    <div className="min-h-screen pb-32 overflow-hidden relative">
      
      {/* Cinematic Blur Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-green-500/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

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
            <Link href="/roi-calculator" className="hover:text-white transition">ROI Impact</Link>
            <Link href="/faq" className="hover:text-white transition">Help Center</Link>
            <Link href="/security" className="hover:text-white transition">Security</Link>
          </div>
          <Link href="/book-demo" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-green-500 hover:text-gray-900 hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300">
            Get Started
          </Link>
        </div>
      </nav>

      <main className="pt-48 px-6 max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 font-medium text-sm mb-8 border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.15)]"
          >
            Automating Your Fairway
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl font-display font-bold text-white mb-6 tracking-tighter"
          >
            Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">GolfTalk</span> in Action.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Watch the demonstration of how our AI-Voice Receptionist seamlessly manages high-volume call traffic, reservations, and complex guest inquiries.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="bg-white/[0.02] p-4 md:p-6 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden group backdrop-blur-3xl"
        >
          {/* Custom blurred glow behind the video container */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-[80px] -z-10 group-hover:from-green-500/20 group-hover:to-emerald-500/20 transition duration-1000 pointer-events-none"></div>
          
          <video 
            src="/videos/AI_for_the_Fairway.mp4" 
            controls 
            autoPlay 
            muted
            loop
            className="w-full aspect-video rounded-[2rem] bg-black/50 object-cover border border-white/5"
            poster="/images/golf/page1_clean.png"
          >
            Your browser does not support the video tag.
          </video>
          <AnimatedSoundwave />
        </motion.div>

        {/* Calendar / Form Placeholder Section */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="mt-32 bg-white/[0.02] border border-white/5 rounded-[3rem] p-12 text-center max-w-4xl mx-auto shadow-2xl backdrop-blur-xl"
        >
           <h3 className="text-4xl font-display font-medium text-white mb-6">Ready to end the missed call era?</h3>
           <p className="text-xl font-light text-gray-400 mb-12">
             Select a time that works for you, and we'll walk you through a live integration of GolfTalk customized for your specific indoor simulator setup or driving range.
           </p>
           
           <div className="p-12 border border-white/10 border-dashed rounded-[2rem] bg-black/20 flex flex-col items-center justify-center min-h-[400px] group hover:border-green-500/50 hover:bg-black/40 transition-all duration-500">
              <svg className="w-16 h-16 text-gray-600 mb-6 group-hover:text-green-500 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <h4 className="text-2xl font-display font-medium text-white">Booking Calendar Widget Placeholder</h4>
              <p className="text-lg font-light text-gray-500 mt-3">(e.g. Calendly, HubSpot scheduling, etc.)</p>
           </div>
        </motion.div>

      </main>
    </div>
  );
}
