"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Users, Globe, Building, Rocket, Database } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    value: 8,
    suffix: "+",
    label: "Years Experience",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Building,
    value: 400,
    suffix: "K+",
    label: "Stores Scaled",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    value: 3,
    suffix: "+",
    label: "International Markets",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Rocket,
    value: 10,
    suffix: "+",
    label: "Enterprise AI Systems",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    value: 5,
    suffix: "+",
    label: "Global Clients",
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: Database,
    value: "PB+",
    suffix: "",
    label: "Data Processed",
    color: "from-red-500 to-rose-500",
  },
];

function AnimatedCounter({
  target,
  suffix,
  duration = 2,
}: {
  target: number | string;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState<number | string>(0);

  useEffect(() => {
    if (typeof target === "string") {
      setCount(target);
      return;
    }

    let start = 0;
    const end = target;
    const incrementTime = (duration * 1000) / 60;
    const timer = setInterval(() => {
      start += 1;
      const progress = start / 60;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));
      if (start >= 60) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}{suffix}</span>;
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent-purple/10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Track Record
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Impact & <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all text-center hover:bg-white/10">
                <div
                  className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center`}
                >
                  <achievement.icon size={24} className="text-white" />
                </div>

                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  <AnimatedCounter
                    target={achievement.value}
                    suffix={achievement.suffix}
                  />
                </div>

                <p className="text-sm text-gray-500">{achievement.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}