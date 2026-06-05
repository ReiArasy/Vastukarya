/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for positions
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring animations for trailing follower
  const springConfig = { damping: 30, stiffness: 300, mass: 0.6 };
  const followerX = useSpring(cursorX, springConfig);
  const followerY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device supports hover/touch
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!visible) return null;

  return (
    <>
      {/* Inner precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-brand-gold rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? '#FFFFFF' : '#C8A96E',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      />

      {/* Outer spring follower */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 border border-brand-gold/40"
        style={{
          x: followerX,
          y: followerY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
        }}
        animate={{
          borderColor: isHovered ? 'rgba(255, 255, 255, 0.8)' : 'rgba(200, 169, 110, 0.4)',
          backgroundColor: isHovered ? 'rgba(200, 169, 110, 0.08)' : 'rgba(0, 0, 0, 0)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    </>
  );
}
