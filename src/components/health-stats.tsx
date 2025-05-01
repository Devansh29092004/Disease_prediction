"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

type HealthMetric = {
  name: string;
  value: number;
  unit: string;
  status: "normal" | "warning" | "critical";
  change?: number;
};

type HealthStatsProps = {
  metrics: HealthMetric[];
};

const statusColors = {
  normal: {
    bg: "bg-green-100 dark:bg-green-950/40",
    text: "text-green-600 dark:text-green-400",
    border: "border-green-200 dark:border-green-800/40",
  },
  warning: {
    bg: "bg-amber-100 dark:bg-amber-950/40",
    text: "text-amber-600 dark:text-amber-400",
    border: "border-amber-200 dark:border-amber-800/40",
  },
  critical: {
    bg: "bg-red-100 dark:bg-red-950/40",
    text: "text-red-600 dark:text-red-400",
    border: "border-red-200 dark:border-red-800/40",
  },
};

export const HealthStats: React.FC<HealthStatsProps> = ({ metrics }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6"
    >
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.name}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          className={`${statusColors[metric.status].bg} rounded-lg p-4 border ${statusColors[metric.status].border} shadow-sm`}
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-sm font-medium">{metric.name}</h3>
            <Badge 
              variant="outline" 
              className={`${statusColors[metric.status].bg} ${statusColors[metric.status].text} border-none text-xs px-2 py-0.5`}
            >
              {metric.status}
            </Badge>
          </div>
          
          <div className="flex items-baseline">
            <span className={`text-2xl font-bold ${statusColors[metric.status].text}`}>
              {metric.value}
            </span>
            <span className="text-xs ml-1 text-muted-foreground">{metric.unit}</span>
          </div>
          
          {metric.change !== undefined && (
            <div className="mt-2 flex items-center">
              {metric.change > 0 ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              )}
              <span className={`text-xs ml-1 ${metric.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {Math.abs(metric.change)}% from last check
              </span>
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

// Example usage with default metrics
export const DefaultHealthStats: React.FC = () => {
  const defaultMetrics: HealthMetric[] = [
    { name: "Blood Pressure", value: 120, unit: "mmHg", status: "normal", change: -2 },
    { name: "Heart Rate", value: 72, unit: "bpm", status: "normal", change: 1 },
    { name: "Blood Glucose", value: 95, unit: "mg/dL", status: "normal", change: -5 },
    { name: "Cholesterol", value: 180, unit: "mg/dL", status: "warning", change: 3 },
  ];
  
  return <HealthStats metrics={defaultMetrics} />;
};

export default DefaultHealthStats;