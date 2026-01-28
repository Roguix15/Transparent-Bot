import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '@/Components/ui/GlassCard';
import { 
  Palette, RefreshCw, Sparkles, Film, 
  Type, Wrench, Zap, Heart 
} from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: "Color & Adjustments",
    description: "Modify hues, saturation, brightness, contrast and more. Fine-tune every aspect of your images.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: RefreshCw,
    title: "Transformations",
    description: "Rotate, flip, scale, crop and resize images with precision. Perfect dimensions every time.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Sparkles,
    title: "Visual Effects",
    description: "Apply stunning filters and creative effects. From vintage to modern, express your style.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Film,
    title: "Animations",
    description: "Create dynamic GIFs and animated content. Bring your images to life with motion.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Type,
    title: "Text & Overlay",
    description: "Add text, watermarks, and layers to your images. Professional branding made easy.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Wrench,
    title: "Utilities & Tools",
    description: "Quick shortcuts and powerful tools for common tasks. Streamline your workflow.",
    color: "from-indigo-500 to-violet-500"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-medium text-sm uppercase tracking-wider">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Everything You Need
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A complete image editing suite with all the tools to transform and enhance your visuals
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <GlassCard key={index} delay={index * 0.1}>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </GlassCard>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 text-gray-500">
            <Heart className="w-4 h-4 text-red-500" />
            <span>Built with love for the creative community</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
