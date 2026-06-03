"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  id: number;
  label: string;
  value: number;
  suffix: string;
}

const stats: StatItem[] = [
  { id: 1, label: "Happy Patients", value: 5000, suffix: "+" },
  { id: 2, label: "Successful Procedures", value: 12000, suffix: "+" },
  { id: 3, label: "Specialist Dentists", value: 15, suffix: "" },
  { id: 4, label: "Years of Service", value: 10, suffix: "+" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    // Calculate speed based on value size
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16); // ~60fps
    let timer: NodeJS.Timeout;

    const updateCounter = () => {
      start += increment;
      if (start >= end) {
        setCount(end);
      } else {
        setCount(Math.floor(start));
        timer = setTimeout(updateCounter, 16);
      }
    };

    updateCounter();
    return () => clearTimeout(timer);
  }, [value, isInView]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ClinicStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {stats.map((stat) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: stat.id * 0.1 }}
          className="bg-white/50 backdrop-blur-sm border border-slate-100/60 p-6 md:p-8 rounded-3xl text-center shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1"
        >
          <h3 className="text-3xl md:text-4xl font-extrabold font-serif bg-gradient-brand bg-clip-text text-transparent mb-2">
            <Counter value={stat.value} suffix={stat.suffix} />
          </h3>
          <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-500">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
