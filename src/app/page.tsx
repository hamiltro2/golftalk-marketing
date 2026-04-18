"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
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
            <Link href="/" className="text-white transition">Home</Link>
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

      {/* Hero Section */}
      <header className="pt-40 pb-20 px-6 max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-8 w-full">
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="relative flex items-center justify-center md:justify-end shrink-0 md:pr-4 md:-translate-y-4 md:translate-x-8"
          >
            {/* Intense multi-layered neon glow behind logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/20 rounded-full blur-[50px] z-0 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-400/40 rounded-full blur-[30px] z-0 pointer-events-none"></div>
            
            <Image 
               src="/images/golf/logo_hero_glow.png" 
               alt="GolfTalk Hero Logo" 
               width={220} 
               height={220} 
               className="relative z-10 drop-shadow-[0_0_20px_rgba(34,197,94,0.8)] opacity-95"
               priority
            />
          </motion.div>
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-5xl md:text-[4.5rem] lg:text-[5.5rem] font-display font-bold mb-4 text-white tracking-tighter leading-[0.95]"
            >
              The End of the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Missed Call.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed"
            >
              The Premier AI-Voice Receptionist for Golf Courses and Modern Golf Venues.
            </motion.p>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="flex justify-center mb-16 relative w-full"
        >
           <div className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] p-2 bg-white/5 border border-white/10 backdrop-blur-3xl max-w-5xl mx-auto w-full">
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent z-10 pointer-events-none"></div>
              <Image 
                src="/images/golf/simulator_hero_clean.png" 
                alt="Luxury Indoor Golf Simulator" 
                width={1200} 
                height={675} 
                className="rounded-2xl object-cover w-full"
                priority
              />
              
              {/* Native React/Tailwind Frosted Glass UI Overlay */}
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 1 }}
                 className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 
                            bg-[#111827]/60 backdrop-blur-3xl border border-white/10 
                            rounded-3xl p-6 md:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.9)] 
                            flex flex-col items-center text-center w-[90%] max-w-[500px]"
              >
                 <div className="flex items-center gap-4 mb-4">
                   <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                      <div className="w-4 h-4 bg-green-500 rounded-full animate-ping absolute"></div>
                      <svg className="w-6 h-6 text-green-400 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                   </div>
                   <div className="text-left">
                     <h4 className="text-2xl font-display font-medium text-white leading-tight">
                        Incoming Call...
                     </h4>
                     <p className="text-lg text-gray-400 font-light">
                        Answered by <span className="font-semibold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">golftalk.io</span>
                     </p>
                   </div>
                 </div>
                 
                 <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-5"></div>
                 
                 <p className="text-[0.9rem] font-semibold tracking-widest uppercase text-green-400/90 flex items-center justify-center gap-2 w-full">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    Capturing Bookings 24/7 · 365 Days a Year
                 </p>
              </motion.div>
           </div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
        >
          Whether you operate a 24/7 indoor simulator or a bustling club, your guests deserve round-the-clock service. We integrate directly into your tee sheet so you never miss another booking.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 1 }}
        >
          <Link href="/book-demo" className="inline-block bg-green-500 text-[#111827] px-12 py-5 rounded-full text-xl font-bold hover:bg-green-400 hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] transition-all duration-300">
            Book a Live Demo
          </Link>
        </motion.div>
      </header>

      {/* The Problem & Solution Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-white/[0.02] border-y border-white/5 skew-y-3 -z-10 transform origin-left"></div>
        <div className="max-w-7xl mx-auto">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold mb-24 text-center text-white tracking-tighter"
          >
            Never Miss a Call. <br/><span className="text-gray-600">Never Miss a Booking.</span>
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 font-semibold mb-8 border border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.15)]">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                The Revenue Leak
              </div>
              <h4 className="text-4xl md:text-5xl font-display font-bold mb-8 text-white leading-[1.1] tracking-tight">Up to 15% of calls to golf facilities typically go unanswered.</h4>
              <p className="text-xl text-gray-400 leading-relaxed mb-6 font-light">
                Modern Golfers expect the seamless, 24/7 accessibility of an app. However, facilities are stuck relying on human-only phone management.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed font-light">
                This creates a bottleneck that caps your revenue the exact moment your staff goes home or gets busy checking in guests.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl p-2 bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-sm shadow-2xl"
            >
              <Image 
                src="/images/golf/page4_highres.png" 
                alt="Cost of a ringing phone" 
                width={800} 
                height={600} 
                className="rounded-2xl w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The 4 Core Value Props */}
      <section className="py-40 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h3 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-5xl md:text-6xl font-display font-bold mb-8 text-white tracking-tighter"
          >
            Focus on Hospitality. <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">We'll handle the rest.</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "24/7 Call Answering", desc: "Answers your phone instantly, 365 days a year without ever putting anyone on hold.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
            { title: "Instant Booking", desc: "Converses naturally with guests to handle walk-ons and process reservations.", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
            { title: "Smart Waitlists", desc: "Turns fully booked times into revenue by auto-notifying players when spots open.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
            { title: "Call Analytics", desc: "Every call is transcribed, providing you an elite dashboard of operational insights.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" }
          ].map((feature, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="group bg-white/[0.03] p-8 rounded-[2rem] border border-white/10 hover:bg-white/[0.08] hover:border-green-500/50 transition-all duration-500 backdrop-blur-xl shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 via-green-500/0 to-green-500/0 group-hover:to-green-500/10 transition-colors duration-500 blur-xl"></div>
              
              <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} /></svg>
              </div>
              <h4 className="text-2xl font-display font-medium text-white mb-4 relative z-10">{feature.title}</h4>
              <p className="text-gray-400 font-light leading-relaxed relative z-10">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-center mb-6"
        >
           <Link href="/features" className="group inline-flex items-center gap-3 text-white font-medium hover:text-green-400 transition-colors text-xl bg-white/5 border border-white/10 px-8 py-4 rounded-full backdrop-blur-md hover:bg-white/10">
             Explore all Features 
             <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
           </Link>
        </motion.div>
      </section>

      {/* Intelligent Human Handoff Banner */}
      <section className="relative px-6 pb-6 max-w-[1400px] mx-auto w-full">
        <motion.div 
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="relative rounded-[3rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.6)] border border-white/10 group aspect-video md:aspect-[21/9]"
        >
          {/* Background Image */}
          <Image 
            src="/images/golf/human_handoff_banner.png" 
            alt="Pristine Championship Golf Course Fairway" 
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/60 to-transparent w-[80%] z-10 pointer-events-none"></div>

          {/* Floating UI Overlay */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-20 max-w-3xl">
            
            <h3 className="text-4xl md:text-5xl font-display font-medium text-white mb-6 tracking-tight leading-[1.1] drop-shadow-xl">
              Seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Human Handoff.</span>
            </h3>
            
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed drop-shadow-lg mb-10 max-w-2xl">
              Free your staff from fielding routine questions so they can focus on delivering premium hospitality. When VIP guests need specialized attention, the AI instantly connects them to your designated Pro Shop manager.
            </p>
            
            <div className="flex bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-2 max-w-sm">
               <div className="flex-1 px-4 py-2 flex items-center gap-3">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                 <span className="text-white text-sm font-medium tracking-wide">AI Managing Traffic</span>
               </div>
               <div className="w-[1px] bg-white/20"></div>
               <div className="flex-1 px-4 py-2 flex items-center gap-3">
                 <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                 <span className="text-white text-sm font-medium tracking-wide">Staff on Standby</span>
               </div>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
