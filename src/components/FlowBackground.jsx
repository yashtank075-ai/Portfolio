import React from 'react';

/**
 * FlowBackground Component
 * 
 * Clean, subtle ambient background system.
 * Position: fixed, inset-0, z-0 (non-blocking, pointer-events-none).
 * Provides a quiet, light off-white tone without distracting pastel orbs.
 */
export default function FlowBackground() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#FAFAF8]"
      aria-hidden="true"
    />
  );
}
