'use client'
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const BreastCancer = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [result, setResult] = useState<null | {
    probability: number;
    analysis: string;
  }>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setResult(null);
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const formData = new FormData();
      formData.append("image", selectedFile);
      const res = await fetch("/api/breast-cancer/analyze-image", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Failed to analyze image");
      const data = await res.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] p-4">
      <Card className="w-full max-w-lg shadow-xl border-0 rounded-2xl">
        <CardHeader>
          <CardTitle>Breast Cancer Risk From Scan</CardTitle>
          <CardDescription>
            Upload a breast scan image (e.g. mammogram) to estimate the risk of
            malignant breast cancer.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
              className="file-input"
            />
            <Button type="submit" disabled={loading || !selectedFile}>
              {loading ? "Analyzing..." : "Analyze Image"}
            </Button>
          </form>
          {error && <div className="text-red-500 mt-2">{error}</div>}
          {result && (
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <div className="font-bold">Probability: {result.probability}</div>
              <div>{result.analysis}</div>
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  );
};

export default BreastCancer;
