"use client";

import React from "react";
import { motion } from "framer-motion";

type ActivityData = {
  day: string;
  value: number;
  label: string;
};

type HealthActivityChartProps = {
  title: string;
  data: ActivityData[];
  color: string;
};

export const HealthActivityChart: React.FC<HealthActivityChartProps> = ({
  title,
  data,
  color,
}) => {
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 rounded-lg border border-border/40 bg-card/60 backdrop-blur-sm shadow-sm"
    >
      <h3 className="text-sm font-medium mb-4">{title}</h3>
      <div className="flex items-end justify-between h-32 gap-1">
        {data.map((item, index) => {
          const height = (item.value / maxValue) * 100;
          return (
            <motion.div
              key={item.day}
              className="flex flex-col items-center"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <div className="relative group w-full">
                <motion.div
                  className={`w-6 rounded-t-sm ${color} group-hover:opacity-80 transition-opacity cursor-pointer relative`}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {item.label}: {item.value}
                  </div>
                </motion.div>
              </div>
              <span className="text-xs text-muted-foreground mt-1">
                {item.day}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

// Example usage with default data
export const DefaultHealthActivityChart: React.FC = () => {
  const defaultData: ActivityData[] = [
    { day: "Mon", value: 5400, label: "Steps" },
    { day: "Tue", value: 7800, label: "Steps" },
    { day: "Wed", value: 9200, label: "Steps" },
    { day: "Thu", value: 6500, label: "Steps" },
    { day: "Fri", value: 8100, label: "Steps" },
    { day: "Sat", value: 10200, label: "Steps" },
    { day: "Sun", value: 4800, label: "Steps" },
  ];

  return (
    <HealthActivityChart
      title="Weekly Activity"
      data={defaultData}
      color="bg-primary/70"
    />
  );
};

export default DefaultHealthActivityChart;
