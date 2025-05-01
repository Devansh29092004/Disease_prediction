"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { analyzeKidneyDiseaseRisk } from "@/lib/model/prompt/ai";
import { ResultCard } from "@/components/ui/result-card";

const KidneyDiseasePage = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | {
    probability: number;
    key_factors: string[];
    recommendations: string[];
    analysis?: string;
  }>(null);
  const [error, setError] = useState<string>("");
  const [formData, setFormData] = useState({
    age: 45,
    gender: "male",
    bloodPressure: 120,
    specificGravity: 1.02,
    albumin: 0.5,
    sugar: 0,
    redBloodCells: "normal",
    pus: 0,
    bacteriaCount: 0,
    bloodGlucose: 100,
    bloodUrea: 30,
    serumCreatinine: 1.0,
    sodium: 135,
    potassium: 4.0,
    hemoglobin: 14.5,
    packedCellVolume: 45,
    whiteBloodCellCount: 7500,
    hypertension: "no",
    diabetes: "no",
    appetite: "good",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Call the function directly instead of going through an API route
      const data = {
        ...formData,
        age: Number(formData.age),
        bloodPressure: Number(formData.bloodPressure),
        specificGravity: Number(formData.specificGravity),
        albumin: Number(formData.albumin),
        sugar: Number(formData.sugar),
        pus: Number(formData.pus),
        bacteriaCount: Number(formData.bacteriaCount),
        bloodGlucose: Number(formData.bloodGlucose),
        bloodUrea: Number(formData.bloodUrea),
        serumCreatinine: Number(formData.serumCreatinine),
        sodium: Number(formData.sodium),
        potassium: Number(formData.potassium),
        hemoglobin: Number(formData.hemoglobin),
        packedCellVolume: Number(formData.packedCellVolume),
        whiteBloodCellCount: Number(formData.whiteBloodCellCount),
      };

      const analysisResult = await analyzeKidneyDiseaseRisk(data);

      // Check if we have a valid result object
      if (analysisResult && typeof analysisResult === "object") {
        // Make sure probability is a number between 0 and 1
        let probability =
          typeof analysisResult.probability === "number"
            ? analysisResult.probability
            : 0.5;

        // Ensure probability is within bounds
        probability = Math.max(0, Math.min(1, probability));

        // Ensure key_factors and recommendations are arrays
        const key_factors = Array.isArray(analysisResult.key_factors)
          ? analysisResult.key_factors
          : [];

        const recommendations = Array.isArray(analysisResult.recommendations)
          ? analysisResult.recommendations
          : [];

        // Set properly formatted result
        setResult({
          probability,
          key_factors,
          recommendations,
          analysis: analysisResult.analysis || "Analysis not available",
        });
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Error predicting kidney disease:", error);
      setError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
      setResult({
        probability: 0.5,
        key_factors: [],
        recommendations: [],
        analysis: "An error occurred during analysis. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] p-4">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Form Card */}
        <Card className="shadow-xl border-0 rounded-2xl mt-26 h-fit">
          <CardHeader className="text-center">
            <CardTitle>Kidney Disease Risk Prediction</CardTitle>
            <CardDescription>
              Enter clinical values to predict chronic kidney disease risk
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    value={formData.age}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select
                    value={formData.gender}
                    onValueChange={(value) =>
                      handleSelectChange("gender", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Other form fields remain the same */}
                {/* ... */}
                <div className="space-y-2">
                  <Label htmlFor="bloodPressure">Blood Pressure (mmHg)</Label>
                  <Input
                    id="bloodPressure"
                    name="bloodPressure"
                    type="number"
                    value={formData.bloodPressure}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specificGravity">Specific Gravity</Label>
                  <Input
                    id="specificGravity"
                    name="specificGravity"
                    type="number"
                    step="0.001"
                    value={formData.specificGravity}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="albumin">Albumin (g/dL)</Label>
                  <Input
                    id="albumin"
                    name="albumin"
                    type="number"
                    step="0.1"
                    value={formData.albumin}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sugar">Sugar (mmol/L)</Label>
                  <Input
                    id="sugar"
                    name="sugar"
                    type="number"
                    step="0.1"
                    value={formData.sugar}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="redBloodCells">Red Blood Cells</Label>
                  <Select
                    value={formData.redBloodCells}
                    onValueChange={(value) =>
                      handleSelectChange("redBloodCells", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="normal">Normal</SelectItem>
                      <SelectItem value="abnormal">Abnormal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bloodGlucose">Blood Glucose (mg/dL)</Label>
                  <Input
                    id="bloodGlucose"
                    name="bloodGlucose"
                    type="number"
                    value={formData.bloodGlucose}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bloodUrea">Blood Urea (mg/dL)</Label>
                  <Input
                    id="bloodUrea"
                    name="bloodUrea"
                    type="number"
                    value={formData.bloodUrea}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="serumCreatinine">
                    Serum Creatinine (mg/dL)
                  </Label>
                  <Input
                    id="serumCreatinine"
                    name="serumCreatinine"
                    type="number"
                    step="0.1"
                    value={formData.serumCreatinine}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sodium">Sodium (mEq/L)</Label>
                  <Input
                    id="sodium"
                    name="sodium"
                    type="number"
                    value={formData.sodium}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="potassium">Potassium (mEq/L)</Label>
                  <Input
                    id="potassium"
                    name="potassium"
                    type="number"
                    step="0.1"
                    value={formData.potassium}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hemoglobin">Hemoglobin (g/dL)</Label>
                  <Input
                    id="hemoglobin"
                    name="hemoglobin"
                    type="number"
                    step="0.1"
                    value={formData.hemoglobin}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hypertension">Hypertension</Label>
                  <Select
                    value={formData.hypertension}
                    onValueChange={(value) =>
                      handleSelectChange("hypertension", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="diabetes">Diabetes</Label>
                  <Select
                    value={formData.diabetes}
                    onValueChange={(value) =>
                      handleSelectChange("diabetes", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="appetite">Appetite</Label>
                  <Select
                    value={formData.appetite}
                    onValueChange={(value) =>
                      handleSelectChange("appetite", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="poor">Poor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Analyzing..." : "Predict Kidney Disease Risk"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Results Card */}
        <div className="sticky top-20 h-fit">
          <ResultCard
            loading={loading}
            result={result}
            error={error}
            title="Kidney Disease Risk Assessment"
          />

          {/* Recommendations Section */}
          {result &&
            result.recommendations &&
            result.recommendations.length > 0 && (
              <Card className="mt-6 bg-transparent border-none transition-all hover:shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    Recommendations
                  </CardTitle>
                  <CardDescription>
                    Based on your risk assessment
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border bg-muted/50 p-4">
                    <ul className="list-disc list-inside space-y-1.5 ml-1">
                      {result.recommendations.map((recommendation, i) => (
                        <li key={i} className="text-muted-foreground">
                          {recommendation}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}
        </div>
      </div>
    </main>
  );
};

export default KidneyDiseasePage;
