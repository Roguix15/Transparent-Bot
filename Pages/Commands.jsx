import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import CommandCard from '@/components/commands/CommandCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, Palette, RefreshCw, Sparkles, 
  Film, Type, Wrench, Info 
} from 'lucide-react';

const categories = [
  { id: 'all', name: 'All', icon: Sparkles },
  { id: 'color_adjustments', name: 'Color & Adjustments', icon: Palette },
  { id: 'transformations', name: 'Transformations', icon: RefreshCw },
  { id: 'visual_effects', name: 'Visual Effects', icon: Sparkles },
  { id: 'animations', name: 'Animations', icon: Film },
  { id: 'text_overlay', name: 'Text & Overlay', icon: Type },
  { id: 'utilities', name: 'Utilities', icon: Wrench },
  { id: 'information', name: 'Information', icon: Info },
];

export default function Commands() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const { data: commands = [], isLoading } = useQuery({
    queryKey: ['commands'],
    queryFn: () => base44.entities.Command.list(),
  });

  const filteredCommands = commands.filter(cmd => {
    const matchesCategory = activeCategory === 'all' || cmd.category === activeCategory;
    const matchesSearch = cmd.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cmd.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-indigo-400 font-medium text-sm uppercase tracking-wider">
            Documentation
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Bot Commands
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore all available commands and learn how to use them
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          {/* Search */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <Input
              type="text"
              placeholder="Search commands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl"
            />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full ${
                  activeCategory === category.id
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'border-white/20 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Commands Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {isLoading ? (
            // Skeleton loaders
            Array(6).fill(0).map((_, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 animate-pulse">
                <div className="h-4 bg-white/10 rounded w-1/3 mb-3" />
                <div className="h-3 bg-white/10 rounded w-full mb-2" />
                <div className="h-3 bg-white/10 rounded w-2/3" />
              </div>
            ))
          ) : filteredCommands.length > 0 ? (
            filteredCommands.map((command, index) => (
              <CommandCard key={command.id} command={command} index={index} />
            ))
          ) : (
            <div className="col-span-2 text-center py-16">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No commands found</h3>
              <p className="text-gray-500">
                {searchQuery 
                  ? `No results for "${searchQuery}"` 
                  : 'No commands in this category'}
              </p>
            </div>
          )}
        </div>

        {/* Stats */}
        {!isLoading && commands.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center text-gray-500"
          >
            Showing {filteredCommands.length} of {commands.length} commands
          </motion.div>
        )}
      </div>
    </div>
  );
}
