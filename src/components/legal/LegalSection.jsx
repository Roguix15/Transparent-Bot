import React from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

export default function LegalSection({ title, lastUpdated, content }) {
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-gray-500">
            Última actualización: {lastUpdated}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <div className="prose prose-invert prose-lg max-w-none">
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold text-white mt-8 mb-4 pb-2 border-b border-white/10">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold text-white mt-6 mb-3">{children}</h3>
                ),
                p: ({ children }) => (
                  <p className="text-gray-300 leading-relaxed mb-4">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">{children}</ul>
                ),
                li: ({ children }) => (
                  <li className="text-gray-300">{children}</li>
                ),
                strong: ({ children }) => (
                  <strong className="text-white font-semibold">{children}</strong>
                ),
                a: ({ children, href }) => (
                  <a href={href} className="text-indigo-400 hover:text-indigo-300 underline">
                    {children}
                  </a>
                )
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
