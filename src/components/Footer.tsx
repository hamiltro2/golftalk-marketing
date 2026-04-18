"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mt-32 w-full border-t border-white/5 bg-[#0a0f18] relative z-20">
      {/* Subtle interior glow line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-1 mb-6">
              <Image src="/images/golf/logo_hero_glow.png" alt="GolfTalk Logo" width={56} height={56} className="drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]" />
              <span className="text-3xl font-display font-semibold tracking-tight text-white">GolfTalk<span className="text-gray-400 font-light">.io</span></span>
            </Link>
            <p className="text-gray-500 font-light text-lg leading-relaxed max-w-md">
              The premier AI-Voice Receptionist built exclusively for indoor golf simulators and driving ranges. End the missed call era and focus entirely on hospitality.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-display font-medium text-lg mb-6 tracking-tight">Platform</h3>
            <ul className="space-y-4">
              <li><Link href="/features" className="text-gray-400 hover:text-green-400 transition-colors font-light">Features</Link></li>
              <li><Link href="/roi-calculator" className="text-gray-400 hover:text-green-400 transition-colors font-light">ROI Calculator</Link></li>
              <li><Link href="/book-demo" className="text-gray-400 hover:text-green-400 transition-colors font-light">Book a Demo</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-display font-medium text-lg mb-6 tracking-tight">Support</h3>
            <ul className="space-y-4">
              <li><Link href="/faq" className="text-gray-400 hover:text-green-400 transition-colors font-light">Help Center & FAQ</Link></li>
              <li><Link href="/security" className="text-gray-400 hover:text-green-400 transition-colors font-light">Security & Privacy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-green-400 transition-colors font-light">Contact Us</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 font-light text-sm">
            &copy; {new Date().getFullYear()} GolfTalk.io. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-600 font-light">
            <Link href="/security" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/security" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
