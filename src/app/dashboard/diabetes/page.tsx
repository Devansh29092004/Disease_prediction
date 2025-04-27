"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ArrowLeft, LucideBolt, AlertCircle, TestTube } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { loadModel, runInference } from "@/lib/model/model-helper";
import type { InferenceSession } from "onnxruntime-web";

// Define our form schema with zod
const formSchema = z.object({
  pregnancies: z.coerce.number().min(0).max(20),
  glucose: z.coerce.number().min(0).max(300),
  bloodPressure: z.coerce.number().min(0).max(200),
  skinThickness: z.coerce.number().min(0).max(100),
  insulin: z.coerce.number().min(0).max(1000),
  bmi: z.coerce.number().min(10).max(80),
  diabetesPedigree: z.coerce.number().min(0).max(2.5),
  age: z.coerce.number().min(18).max(120),
  gender: z.enum(["0", "1"]), // Adding gender as the potential 9th feature
});

export default function DiabetesPredictionPage() {
  const [result, setResult] = useState<{prediction: number, probability: number} | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [modelSession, setModelSession] = useState<InferenceSession | null>(null);
  const [modelError, setModelError] = useState<string | null>(null);

  // Load the ONNX model on component mount
  useEffect(() => {
    async function initModel() {
      try {
        const session = await loadModel('/models/rf_diabetes_model.onnx');
        setModelSession(session);
        toast("Model Ready", {
          description: "Diabetes prediction model has been loaded successfully"
        });
      } catch (error) {
        console.error('Error loading model:', error);
        setModelError(`Failed to load model: ${error instanceof Error ? error.message : String(error)}`);
        toast("Model Loading Error", {
          description: "Could not load the diabetes prediction model",
          
        });
      }
    }

    initModel();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pregnancies: 6,
      glucose: 199,
      bloodPressure: 95,
      skinThickness: 28,
      insulin: 30,
      bmi: 32.5,
      diabetesPedigree: 1.3,
      age: 55,
      gender: "0", // Default to female
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!modelSession) {
      toast("Error", {
        description: "Model is not loaded yet. Please try again in a moment.",
        
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Prepare the input data array in the order expected by the model
      const inputData = [
        values.pregnancies,
        values.glucose,
        values.bloodPressure,
        values.skinThickness,
        values.insulin,
        values.bmi,
        values.diabetesPedigree,
        values.age,
        parseInt(values.gender) // Add gender as the 9th feature
      ];
      
      console.log("Input data:", inputData);
      
      // Run inference with our simplified helper
      const predictionResult = await runInference(modelSession, inputData);
      
      setResult(predictionResult);
      
      toast("Analysis Complete", {
        description: "Diabetes risk prediction has been calculated"
      });
    } catch (error) {
      console.error('Inference error:', error);
      toast("Error", {
        description: `Failed to process prediction: ${error instanceof Error ? error.message : String(error)}`,
        
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="icon" asChild className="mr-2">
          <Link href="/dashboard">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Diabetes Prediction</h1>
      </div>

      {modelError && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Model Error</AlertTitle>
          <AlertDescription>
            {modelError}
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TestTube className="h-5 w-5" />
              <span>Health Metrics</span>
            </CardTitle>
            <CardDescription>
              Enter your health information to assess diabetes risk
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="pregnancies"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pregnancies</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="glucose"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Glucose (mg/dL)</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="bloodPressure"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Blood Pressure (mmHg)</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="skinThickness"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Skin Thickness (mm)</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="insulin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Insulin (μU/mL)</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="bmi"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>BMI (kg/m²)</FormLabel>
                        <FormControl>
                          <Input type="number" step="0.1" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="diabetesPedigree"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Diabetes Pedigree</FormLabel>
                        <FormControl>
                          <Input type="number" step="0.01" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Age</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gender</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="0">Female</SelectItem>
                            <SelectItem value="1">Male</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isLoading || !modelSession || !!modelError}
                >
                  {isLoading ? "Processing..." : "Predict Risk"}
                </Button>
                
                {!modelSession && !modelError && (
                  <div className="text-center text-sm text-muted-foreground">
                    Loading model, please wait...
                  </div>
                )}
              </form>
            </Form>
          </CardContent>
        </Card>
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LucideBolt className="h-5 w-5" />
              <span>Results</span>
            </CardTitle>
            <CardDescription>
              Your diabetes risk assessment results
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!result && !isLoading && (
              <div className="flex flex-col items-center justify-center h-64 text-center text-muted-foreground">
                <AlertCircle className="h-12 w-12 mb-4 opacity-50" />
                <p>Submit your health metrics to see a diabetes risk assessment</p>
              </div>
            )}
            
            {isLoading && (
              <div className="flex flex-col items-center justify-center h-64">
                <div className="w-12 h-12 border-4 border-t-primary rounded-full animate-spin mb-4"></div>
                <p className="text-muted-foreground">Analyzing your data with ML model...</p>
              </div>
            )}
            
            {result && !isLoading && (
              <div className="space-y-6">
                <Alert variant={result.prediction === 1 ? "destructive" : "default"}>
                  <AlertTitle className="text-xl font-bold">
                    {result.prediction === 1 
                      ? "High Risk of Diabetes" 
                      : "Low Risk of Diabetes"}
                  </AlertTitle>
                  <AlertDescription>
                    Based on the provided health metrics, the model predicts 
                    {result.prediction === 1 
                      ? " an elevated risk" 
                      : " a lower risk"} of diabetes.
                  </AlertDescription>
                </Alert>
                
                <div className="pt-4">
                  <div className="text-lg font-medium mb-1">Confidence Level</div>
                  <div className="h-4 w-full bg-secondary rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${result.prediction === 1 ? "bg-destructive" : "bg-primary"}`}
                      style={{ width: `${Math.round(result.probability * 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-sm text-muted-foreground mt-1">
                    {Math.round(result.probability * 100)}%
                  </div>
                </div>
                
                <div className="pt-4 space-y-2">
                  <h3 className="text-lg font-medium">What does this mean?</h3>
                  <p className="text-muted-foreground">
                    This prediction is based on a machine learning model trained on historical health data. 
                    {result.prediction === 1 
                      ? " Your results suggest you may have risk factors associated with Type 2 diabetes." 
                      : " Your metrics appear to be within ranges not strongly associated with diabetes risk."}
                  </p>
                  <p className="text-muted-foreground pt-2">
                    <strong>Important:</strong> This is not a medical diagnosis. Please consult with a healthcare professional for proper evaluation.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
