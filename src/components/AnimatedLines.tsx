import React, { useEffect, useState, useRef } from 'react';
import '../css/AnimatedLines.css';

interface AnimatedDotsProps {
  count?: number;
  normalSpeed?: number; // seconds per loop
  fastSpeed?: number; // seconds per loop when scrolling
  dotSize?: number;
  color?: string;
}

const AnimatedLines: React.FC<AnimatedDotsProps> = ({
  count = 30,
  normalSpeed = 6,
  fastSpeed = 2,
  dotSize = 9,
  color = '#4facfe',
}) => {
  const [animationSpeed, setAnimationSpeed] = useState(normalSpeed);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Handle scroll to increase speed
  useEffect(() => {
    const handleScroll = () => {
      setAnimationSpeed(fastSpeed);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setAnimationSpeed(normalSpeed);
      }, 150); // slow down after 150ms no scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [normalSpeed, fastSpeed]);

  return (
    <div className="dots-container">
      {[...Array(count)].map((_, i) => {
        const top = Math.random() * 102; // random vertical position %
        const delay = Math.random() * animationSpeed; // stagger animation delay
        return (
          <div
            key={i}
            className="dot"
            style={{
              top: `${top}%`,
              width: dotSize,
              height: dotSize,
              backgroundColor: color,
              animationDuration: `${animationSpeed}s`,
              animationDelay: `-${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default AnimatedLines;
