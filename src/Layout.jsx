import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Menu, X, Home, Terminal, FileText, 
  Shield, MessageCircle, Github, Bot, Info
} from 'lucide-react';

const navLinks = [
  { name: 'Home', page: 'Home', icon: Home },
  { name: 'Commands', page: 'Commands', icon: Terminal },
  { name: 'About', page: 'About', icon: Info },
  { name: 'TOS', page: 'TermsOfService', icon: FileText },
  { name: 'Privacy', page: 'PrivacyPolicy', icon: Shield },
];

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <style>{`
        :root {
          --background: 0 0% 4%;
          --foreground: 0 0% 98%;
          --card: 0 0% 6%;
          --card-foreground: 0 0% 98%;
          --popover: 0 0% 6%;
          --popover-foreground: 0 0% 98%;
          --primary: 239 84% 67%;
          --primary-foreground: 0 0% 98%;
          --secondary: 0 0% 14%;
          --secondary-foreground: 0 0% 98%;
          --muted: 0 0% 14%;
          --muted-foreground: 0 0% 64%;
          --accent: 0 0% 14%;
          --accent-foreground: 0 0% 98%;
          --destructive: 0 84% 60%;
          --destructive-foreground: 0 0% 98%;
          --border: 0 0% 14%;
          --input: 0 0% 14%;
          --ring: 239 84% 67%;
        }
        
        body {
          background-color: #0a0a0f;
        }

        .nav-link {
          position: relative;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(to right, #6366f1, #8b5cf6);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center group-hover:scale-105 transition-transform p-2">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6951da8ab478e7cea71ce0e7/39d9f00b1_image_recolored.png" 
                  alt="Transparent"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-xl hidden sm:block">Transparent</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className={`nav-link text-sm font-medium transition-colors ${
                    currentPageName === link.page 
                      ? 'text-white active' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
                <Bot className="w-4 h-4 mr-2" />
                Add Bot
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0a0a0f]/95 border-b border-white/5"
            >
              <div className="px-6 py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      currentPageName === link.page
                        ? 'bg-indigo-600/20 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <link.icon className="w-5 h-5" />
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
                    <Bot className="w-4 h-4 mr-2" />
                    Add Bot
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-2">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6951da8ab478e7cea71ce0e7/39d9f00b1_image_recolored.png" 
                    alt="Transparent"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-bold text-xl">Transparent</span>
              </div>
              <p className="text-gray-500 max-w-md">
                The most complete Discord bot for image editing. 
                Transform, enhance, and perfect your images effortlessly.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Links</h4>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    className="block text-gray-500 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold text-white mb-4">Community</h4>
              <div className="space-y-2">
                <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  Discord
                </a>
                <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Transparent Bot. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link to={createPageUrl('TermsOfService')} className="text-gray-500 hover:text-white transition-colors">
                Terms
              </Link>
              <Link to={createPageUrl('PrivacyPolicy')} className="text-gray-500 hover:text-white transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
