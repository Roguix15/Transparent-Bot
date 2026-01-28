import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import { 
  Zap, Code, Shield, Heart, Users, Github,
  ExternalLink, MessageCircle, Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 mb-6 p-4">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6951da8ab478e7cea71ce0e7/39d9f00b1_image_recolored.png" 
              alt="Transparent"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Transparent
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A powerful Discord bot for image editing, created with passion for the creative community
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-6 mb-12"
        >
          <GlassCard>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-indigo-400" />
              What is Transparent?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Transparent is a Discord bot designed to bring professional image editing capabilities 
              directly to your Discord server. No need for external tools or complicated software – 
              edit images with simple commands right in your chat.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Whether you want to change colors, apply effects, create animations, or add text to 
              your images, Transparent makes it easy and fast.
            </p>
          </GlassCard>

          <GlassCard>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6 text-red-400" />
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We believe that creative tools should be accessible to everyone. Our mission is to 
              provide powerful image editing features that anyone can use, regardless of their 
              technical expertise. We're constantly improving and adding new features based on 
              community feedback.
            </p>
          </GlassCard>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Transparent?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Process images in seconds with our optimized engine"
              },
              {
                icon: Code,
                title: "Simple Commands",
                description: "Intuitive slash commands that anyone can learn quickly"
              },
              {
                icon: Shield,
                title: "Privacy Focused",
                description: "Your images are never shared and you control what's stored"
              },
              {
                icon: Users,
                title: "Active Community",
                description: "Join thousands of users creating amazing content daily"
              }
            ].map((feature, index) => (
              <GlassCard key={index} hover={false}>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <GlassCard>
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">5K+</div>
                <div className="text-gray-500 text-sm">Active Servers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-500 text-sm">Commands</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">100K+</div>
                <div className="text-gray-500 text-sm">Images Edited</div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Join Our Community</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-6 rounded-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Support Server
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-6 py-6 rounded-xl"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="mt-8 text-gray-500 text-sm">
            Have questions or feedback? We'd love to hear from you!
          </div>
        </motion.div>
      </div>
    </div>
  );
}
