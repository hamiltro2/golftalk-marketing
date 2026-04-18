"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FeaturesPage() {
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
            <Link href="/features" className="text-white font-semibold transition">Features</Link>
            <Link href="/roi-calculator" className="hover:text-white transition">ROI Impact</Link>
            <Link href="/faq" className="hover:text-white transition">Help Center</Link>
            <Link href="/security" className="hover:text-white transition">Security</Link>
          </div>
          <Link href="/book-demo" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-green-500 hover:text-gray-900 hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300">
            Get Started
          </Link>
        </div>
      </nav>

      <main className="pt-48 px-6 max-w-6xl mx-auto relative">
        <div className="text-center mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-green-500/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
          <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="text-6xl md:text-8xl font-display font-bold text-white mb-8 tracking-tighter leading-[0.9]"
          >
            How GolfTalk <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Works</span>
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed"
          >
            The AI reception framework built exclusively to interface with indoor simulator technology and modern tee sheets.
          </motion.p>
        </div>

        {/* Expectation vs Reality Block from PDF */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 relative group rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl p-2 bg-white/5 backdrop-blur-2xl"
        >
          <Image 
             src="/images/golf/page2_highres.png" 
             alt="Exceptation vs Operational Reality" 
             width={1200} 
             height={800} 
             className="w-full object-cover rounded-3xl"
             priority
          />
        </motion.div>

        <div className="space-y-16">
          {[
            {
              title: "24/7 Call Answering & Booking",
              desc: "GolfTalk answers your facility's phone instantly, 24 hours a day, 365 days a year. It converses completely naturally with guests to book tee times, handle walk-on availability, and process reservations directly into your existing tee sheet without ever placing anyone on hold.",
              color: "green",
              imagePath: "/images/golf/feature_booking_clean.png"
            },
            {
              title: "Customizable Greetings & Multi-Lingual",
              desc: "Capture the unique identity of your property with a personalized voice and greeting profile. GolfTalk also natively supports multiple languages, making your venue highly accessible to a diverse, modern audience.",
              color: "blue",
              imagePath: "/images/golf/feature_voice.png"
            },
            {
              title: "Smart Waitlist Management",
              desc: "Turn fully booked times into pure revenue opportunities. When your bays are full, GolfTalk automatically adds players to a waitlist system. When a spot opens up, it instantly notifies them via SMS or email to fill the cancellation automatically.",
              color: "orange",
              imagePath: "/images/golf/feature_waitlist.png"
            },
            {
              title: "Intelligent Call Analytics & Transcription",
              desc: "Stop guessing what your customers want. Every call is logged and completely transcribed, providing operators with a powerful dashboard of insights into call volume trends, common guest questions, and revenue recovery potential.",
              color: "purple",
              imagePath: "/images/golf/feature_analytics.png"
            }
          ].map((feat, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6 }}
               className={`group bg-white/[0.02] p-10 md:p-14 rounded-[3rem] border border-white/5 shadow-2xl flex flex-col md:flex-row gap-16 items-center hover:bg-white/[0.04] transition-all duration-700 backdrop-blur-2xl relative overflow-hidden `}
            >
              {/* Dynamic hover gradient behind card */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${feat.color}-500/0 to-${feat.color}-500/0 group-hover:to-[rgba(255,255,255,0.02)] transition-colors duration-1000 z-0`}></div>
              
              <div className="relative w-48 h-48 rounded-[2.5rem] flex items-center justify-center shrink-0 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-black/40 border border-white/10 group-hover:scale-105 transition-all duration-700 z-10 overflow-hidden">
                <Image 
                  src={feat.imagePath} 
                  alt={feat.title} 
                  fill
                  className="object-cover mix-blend-screen opacity-90 group-hover:opacity-100 transition-opacity duration-700 scale-110" 
                />
              </div>
              
              <div className="z-10 flex-1">
                <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6 tracking-tight">{feat.title}</h2>
                <p className="text-xl text-gray-400 font-light leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </main>
    </div>
  );
}
