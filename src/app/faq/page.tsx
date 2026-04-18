"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FAQPage() {
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
            <Link href="/roi-calculator" className="hover:text-white transition">ROI Impact</Link>
            <Link href="/faq" className="text-white font-semibold transition">Help Center</Link>
            <Link href="/security" className="hover:text-white transition">Security</Link>
          </div>
          <Link href="/book-demo" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-green-500 hover:text-gray-900 hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300">
            Get Started
          </Link>
        </div>
      </nav>

      <main className="pt-48 px-6 max-w-4xl mx-auto relative">
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-display font-bold text-white mb-6 tracking-tighter"
          >
            Help Center
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light text-gray-400 leading-relaxed"
          >
            Everything you need to know about integrating AI Voice into your Golf Facility.
          </motion.p>
        </div>

        {/* The Hospitality Bottleneck Graphic */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16 relative group rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl p-2 bg-white/5 backdrop-blur-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent z-10 pointer-events-none"></div>
          <Image 
             src="/images/golf/page3_highres.png" 
             alt="The Hospitality Bottleneck" 
             width={1000} 
             height={600} 
             className="w-full object-cover rounded-3xl"
          />
        </motion.div>

        <div className="space-y-6">
          {[
            {
              q: "Will GolfTalk replace my pro shop or front desk staff?",
              a: "No—it empowers your staff. The AI handles repetitive tasks like phone bookings, sharing facility hours, and answering FAQs. This allows your human team to focus entirely on in-person service, player experience, coaching, and managing the actual venue."
            },
            {
              q: "Can the AI answer specific questions about my facility?",
              a: "Yes. GolfTalk is explicitly trained on your specific course or facility details—including hourly bay rates, dress codes (like \"soft-soled shoes only\"), hours of operation, and your specific simulator technology (e.g. Trackman vs Foresight). You train the system once, and it remembers those responses indefinitely."
            },
            {
              q: "What happens if my venue is completely booked?",
              a: "GolfTalk optimizes your availability intelligently. It will automatically scan and suggest alternative open times to the caller, or it can add them to an automated waitlist to immediately ping them and fill any last-minute cancellations, maximizing your hourly occupancy yield."
            },
            {
              q: "Does GolfTalk send booking reminders?",
              a: "Yes, the system acts as a full-service dispatcher. It can automatically send reminders and confirmations via voice, text/SMS, or email to reduce no-shows and combat last-minute cancellations."
            }
          ].map((item, i) => (
            <motion.details 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="group bg-white/[0.02] border border-white/5 rounded-[2rem] open:shadow-2xl transition-all duration-500 backdrop-blur-xl overflow-hidden hover:bg-white/[0.04]"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 p-8 text-white font-display font-medium text-2xl hover:text-green-400 transition-colors">
                {item.q}
                <span className="transition duration-500 group-open:-rotate-180 text-gray-500 group-hover:text-green-400 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </summary>
              <div className="px-8 pb-8 text-gray-400 font-light text-xl leading-relaxed border-t border-white/5 pt-6 bg-white/[0.01]">
                <p>{item.a}</p>
              </div>
            </motion.details>
          ))}
        </div>
      </main>
    </div>
  );
}
