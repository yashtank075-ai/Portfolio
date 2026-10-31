import React from 'react';

/**
 * FlowBackground Component
 * 
 * Inspired by Google Flow (https://flow.google.com/about#models)
 * Layering Architecture:
 * - Position: fixed, inset-0, z-0 (positive stacking order above body & root canvas)
 * - Pointer events: none (completely click-through, never blocks interactions)
 * - Animated drifting orbs: Blue (#8AB4FF), Lavender (#B9A7FF), Violet (#A78BFA), Pink (#F0B6DE)
 */
export default function FlowBackground() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Base ambient gradient wash across the viewport */}
      <div className="flow-ambient-base absolute inset-0 w-full h-full" />

      {/* Floating Orb 1: Google Flow Blue (#8AB4FF) */}
      <div className="flow-orb flow-orb-1 absolute rounded-full" />

      {/* Floating Orb 2: Google Flow Lavender (#B9A7FF) */}
      <div className="flow-orb flow-orb-2 absolute rounded-full" />

      {/* Floating Orb 3: Google Flow Violet (#A78BFA) */}
      <div className="flow-orb flow-orb-3 absolute rounded-full" />

      {/* Floating Orb 4: Google Flow Soft Pink (#F0B6DE) */}
      <div className="flow-orb flow-orb-4 absolute rounded-full" />
    </div>
  );
}
