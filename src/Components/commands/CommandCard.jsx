import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Terminal, List, Play } from 'lucide-react';

const categoryColors = {
  color_adjustments: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  transformations: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  visual_effects: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  animations: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  text_overlay: "bg-green-500/20 text-green-400 border-green-500/30",
  utilities: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  information: "bg-gray-500/20 text-gray-400 border-gray-500/30"
};

export default function CommandCard({ command, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300"
    >
      <div className="flex flex-col gap-3">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="w-4 h-4 text-indigo-400" />
              <code className="text-white font-mono font-semibold text-base">/{command.name}</code>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{command.description}</p>
          </div>
          {command.video_url && (
            <Button
              size="sm"
              variant="outline"
              className="border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10 flex-shrink-0"
              onClick={() => window.open(command.video_url, '_blank')}
            >
              <Play className="w-3 h-3 mr-1" />
              Video
            </Button>
          )}
        </div>

        {/* Usage */}
        {command.usage && (
          <div className="bg-black/30 rounded-lg p-3 border border-white/5">
            <p className="text-gray-500 text-xs mb-1">Usage:</p>
            <code className="text-xs text-gray-300 font-mono">{command.usage}</code>
          </div>
        )}

        {/* Arguments */}
        {command.arguments && (
          <div className="bg-black/20 rounded-lg p-3 border border-white/5">
            <div className="flex items-center gap-2 mb-1">
              <List className="w-3 h-3 text-gray-500" />
              <p className="text-gray-500 text-xs">Arguments:</p>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">{command.arguments}</p>
          </div>
        )}

        {/* Category Badge */}
        <div className="flex items-center gap-2 flex-wrap pt-2">
          <Badge className={`${categoryColors[command.category]} border text-xs`}>
            {command.category?.replace(/_/g, ' ')}
          </Badge>
        </div>
      </div>
    </motion.div>
  );
}