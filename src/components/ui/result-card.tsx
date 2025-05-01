import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle2, AlertTriangle, Info } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

// Define proper type for result data
interface ResultData {
  probability?: number;
  key_factors?: string[];
  analysis?: string;
  raw?: any;
  [key: string]: any; // For any additional fields
}

interface ResultCardProps {
  loading: boolean;
  result: ResultData | null;
  error: string;
  title?: string;
}

export function ResultCard({
  loading,
  result,
  error,
  title = "Result",
}: ResultCardProps) {
  // Function to determine severity color based on probability
  const getSeverityColor = (probability: number): string => {
    if (probability < 0.3) return "text-green-600";
    if (probability < 0.7) return "text-amber-500";
    return "text-red-600";
  };

  // Function to determine progress color based on probability
  const getProgressColor = (probability: number): string => {
    if (probability < 0.3) return "bg-green-600";
    if (probability < 0.7) return "bg-amber-500";
    return "bg-red-600";
  };

  return (
    <Card className="bg-transparent border-none transition-all hover:shadow-lg">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          {result && !loading && !error && (
            <CheckCircle2 className="h-5 w-5 text-green-500" />
          )}
          {error && <AlertCircle className="h-5 w-5 text-red-600" />}
          {!result && !error && !loading && (
            <Info className="h-5 w-5 text-blue-500" />
          )}
          {title}
        </CardTitle>
        {!loading && result?.probability !== undefined && (
          <CardDescription>
            Risk assessment based on provided information
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <Skeleton className="h-8 w-1/2 mb-2" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-5/6 mb-1" />
              <Skeleton className="h-4 w-2/3" />
            </motion.div>
          ) : result ? (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {result.probability !== undefined && (
                <div className="space-y-2">
                  <div className="font-semibold text-lg flex items-center gap-2">
                    <span className="text-primary">Probability:</span>
                    <span
                      className={`text-2xl font-bold ${getSeverityColor(
                        result.probability
                      )}`}
                    >
                      {typeof result.probability === "number"
                        ? `${(result.probability * 100).toFixed(1)}%`
                        : result.probability}
                    </span>
                  </div>

                  <div className="w-full space-y-1">
                    <div className="relative w-full h-2 overflow-hidden rounded-full bg-muted">
                      <div
                        className={cn(
                          "h-full transition-all",
                          getProgressColor(Number(result.probability))
                        )}
                        style={{
                          width: `${
                            typeof result.probability === "number"
                              ? result.probability * 100
                              : 0
                          }%`,
                        }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Low Risk</span>
                      <span>Medium Risk</span>
                      <span>High Risk</span>
                    </div>
                  </div>
                </div>
              )}

              {Array.isArray(result.key_factors) &&
                result.key_factors.length > 0 && (
                  <div className="rounded-md border bg-muted/50 p-4">
                    <div className="flex items-center gap-2 font-semibold mb-2">
                      <AlertTriangle className="h-4 w-4 text-amber-500" />
                      <span>Key Risk Factors</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1.5 ml-1">
                      {result.key_factors.map((factor: string, i: number) => (
                        <li key={i} className="text-muted-foreground">
                          {factor}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {result.analysis && (
                <div className="rounded-md bg-muted p-4 text-muted-foreground border whitespace-pre-line">
                  <div className="font-medium mb-1">Analysis:</div>
                  {result.analysis !== "Analysis not available" ? (
                    result.analysis
                  ) : (
                    <span className="italic text-muted-foreground">
                      No detailed analysis available. See key risk factors and
                      recommendations for guidance.
                    </span>
                  )}
                </div>
              )}

              {/* Display raw result if it's the only data available */}
              {!result.probability &&
                !result.key_factors &&
                !result.analysis && (
                  <div className="rounded-md bg-muted p-4 text-muted-foreground border whitespace-pre-line">
                    {typeof result === "object"
                      ? JSON.stringify(result, null, 2)
                      : String(result)}
                  </div>
                )}
            </motion.div>
          ) : error ? (
            <motion.div
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-start gap-3 p-3 rounded-md bg-red-50 text-red-700 border border-red-200"
            >
              <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium">Error processing request</div>
                <div className="text-sm">{error}</div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-3 p-4 text-muted-foreground bg-muted/30 rounded-md"
            >
              <Info className="h-5 w-5 text-blue-500" />
              <span>Fill out the form and submit to see your result.</span>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}
