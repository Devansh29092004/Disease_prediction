"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ArrowLeft, Activity, AlertCircle, Heart } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { loadModel, runInference } from "@/lib/model/model-helper";
import type { InferenceSession } from "onnxruntime-web";

// Define the form schema with zod
const formSchema = z.object({
  age: z.coerce.number().min(20).max(100),
  sex: z.enum(["0", "1"]), // 0 = female, 1 = male
  chestPainType: z.enum(["1", "2", "3", "4"]), // 1-4 values
  restingBP: z.coerce.number().min(80).max(200),
  cholesterol: z.coerce.number().min(100).max(600),
  fastingBS: z.enum(["0", "1"]), // 0 = false, 1 = true
  restingECG: z.enum(["0", "1", "2"]), // 0, 1, 2 values
  maxHR: z.coerce.number().min(60).max(220),
  exerciseAngina: z.enum(["0", "1"]), // 0 = no, 1 = yes
  oldpeak: z.coerce.number().min(-3).max(10).step(0.1),
  stSlope: z.enum(["1", "2", "3"]), // 1 = upsloping, 2 = flat, 3 = downsloping
  majorVessels: z.enum(["0", "1", "2", "3"]), 
  thal: z.enum(["0", "1", "2"]) // 0 = normal, 1 = fixed defect, 2 = reversible defect
});

export default function HeartDiseasePredictionPage() {
  const [result, setResult] = useState<{prediction: number, probability: number} | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [modelSession, setModelSession] = useState<InferenceSession | null>(null);
  const [modelError, setModelError] = useState<string | null>(null);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: 45,
      sex: "1", // Default to male
      chestPainType: "1",
      restingBP: 130,
      cholesterol: 220,
      fastingBS: "0",
      restingECG: "0",
      maxHR: 150,
      exerciseAngina: "0",
      oldpeak: 1.0,
      stSlope: "1",
      majorVessels: "0",
      thal: "0"
    },
  });
  
  // Load the ONNX model on component mount
  useEffect(() => {
    async function initModel() {
      try {
        // Note: Change the path when you have a heart disease model
        // Currently showing a placeholder since no model file exists
        toast("Model Status", {
          description: "Heart disease prediction model not available yet. This is a placeholder."
        });
        
        // Uncomment when you have a heart disease model
        /*
        const session = await loadModel('/models/heart_disease_model.onnx');
        setModelSession(session);
        toast("Model Ready", {
          description: "Heart disease prediction model has been loaded successfully"
        });
        */
      } catch (error) {
        console.error('Error loading model:', error);
        setModelError(`Failed to load model: ${error instanceof Error ? error.message : String(error)}`);
        toast("Model Loading Error", {
          description: "Could not load the heart disease prediction model",
          
        });
      }
    }

    initModel();
  }, []);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real implementation, we would check for modelSession first
    // Since we don't have a model yet, we'll simulate the prediction
    setIsLoading(true);
    
    try {
      // Prepare the input data array in the order expected by the model
      const inputData = [
        values.age,
        parseInt(values.sex),
        parseInt(values.chestPainType),
        values.restingBP,
        values.cholesterol,
        parseInt(values.fastingBS),
        parseInt(values.restingECG),
        values.maxHR,
        parseInt(values.exerciseAngina),
        values.oldpeak,
        parseInt(values.stSlope),
        parseInt(values.majorVessels),
        parseInt(values.thal)
      ];
      
      console.log("Input data:", inputData);
      
      // Simulate model prediction (replace with actual model when available)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate result based on some simple heuristics
      const highRiskFactors = [
        parseInt(values.sex) === 1, // male
        parseInt(values.chestPainType) > 2, // more severe chest pain
        values.restingBP > 140, // high blood pressure
        values.cholesterol > 240, // high cholesterol
        parseInt(values.fastingBS) === 1, // high fasting blood sugar
        parseInt(values.exerciseAngina) === 1, // exercise angina
        values.oldpeak > 2, // significant ST depression
        parseInt(values.majorVessels) > 0, // major vessels affected
        parseInt(values.thal) > 0 // thal defect
      ];
      
      const riskScore = highRiskFactors.filter(Boolean).length / highRiskFactors.length;
      const simulatedResult = {
        prediction: riskScore > 0.5 ? 1 : 0,
        probability: riskScore
      };
      
      setResult(simulatedResult);
      
      toast("Analysis Complete", {
        description: "Heart disease risk prediction has been calculated"
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
        <h1 className="text-3xl font-bold">Heart Disease Prediction</h1>
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
              <Heart className="h-5 w-5 text-red-500" />
              <span>Cardiovascular Parameters</span>
            </CardTitle>
            <CardDescription>
              Enter cardiovascular health information to assess heart disease risk
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Tabs for better organization */}
                <Tabs defaultValue="demographic" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="demographic">Demographics</TabsTrigger>
                    <TabsTrigger value="clinical">Clinical Data</TabsTrigger>
                    <TabsTrigger value="cardiac">Cardiac Factors</TabsTrigger>
                  </TabsList>
                  
                  {/* Demographics Tab */}
                  <TabsContent value="demographic" className="pt-4">
                    <div className="space-y-4">
                      <div className="flex flex-row items-center justify-between">
                        <FormField
                          control={form.control}
                          name="age"
                          render={({ field }) => (
                            <FormItem className="flex-1 mr-4">
                              <FormLabel>Age</FormLabel>
                              <FormControl>
                                <Input type="number" {...field} className="w-full" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="sex"
                          render={({ field }) => (
                            <FormItem className="flex-1 space-y-3">
                              <FormLabel>Biological Sex</FormLabel>
                              <FormControl>
                                <RadioGroup 
                                  onValueChange={field.onChange} 
                                  defaultValue={field.value}
                                  className="flex flex-row space-x-4"
                                >
                                  <FormItem className="flex items-center space-x-1 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="0" />
                                    </FormControl>
                                    <FormLabel className="font-normal cursor-pointer">Female</FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-1 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="1" />
                                    </FormControl>
                                    <FormLabel className="font-normal cursor-pointer">Male</FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="chestPainType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Chest Pain Type</FormLabel>
                            <FormControl>
                              <RadioGroup 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                                className="grid grid-cols-2 gap-4"
                              >
                                <FormItem className="flex items-center space-x-2 space-y-0 border rounded-md p-3 cursor-pointer hover:bg-secondary">
                                  <FormControl>
                                    <RadioGroupItem value="1" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">Typical Angina</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-2 space-y-0 border rounded-md p-3 cursor-pointer hover:bg-secondary">
                                  <FormControl>
                                    <RadioGroupItem value="2" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">Atypical Angina</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-2 space-y-0 border rounded-md p-3 cursor-pointer hover:bg-secondary">
                                  <FormControl>
                                    <RadioGroupItem value="3" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">Non-anginal Pain</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-2 space-y-0 border rounded-md p-3 cursor-pointer hover:bg-secondary">
                                  <FormControl>
                                    <RadioGroupItem value="4" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">Asymptomatic</FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </TabsContent>
                  
                  {/* Clinical Data Tab */}
                  <TabsContent value="clinical" className="pt-4">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="restingBP"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Resting Blood Pressure (mmHg)</FormLabel>
                              <FormControl>
                                <Input type="number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="cholesterol"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Cholesterol (mg/dL)</FormLabel>
                              <FormControl>
                                <Input type="number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="fastingBS"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5">
                              <FormLabel className="text-base">Fasting Blood Sugar &gt; 120 mg/dL</FormLabel>
                              <FormDescription>
                                Toggle if blood sugar is above 120 mg/dL when fasting
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value === "1"}
                                onCheckedChange={(checked) => {
                                  field.onChange(checked ? "1" : "0");
                                }}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="restingECG"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Resting ECG Results</FormLabel>
                            <FormControl>
                              <RadioGroup 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                                className="grid gap-2"
                              >
                                <FormItem className="flex items-center space-x-2 space-y-0 border rounded-md p-3 cursor-pointer hover:bg-secondary">
                                  <FormControl>
                                    <RadioGroupItem value="0" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">Normal</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-2 space-y-0 border rounded-md p-3 cursor-pointer hover:bg-secondary">
                                  <FormControl>
                                    <RadioGroupItem value="1" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">ST-T Wave Abnormality</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-2 space-y-0 border rounded-md p-3 cursor-pointer hover:bg-secondary">
                                  <FormControl>
                                    <RadioGroupItem value="2" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">Left Ventricular Hypertrophy</FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </TabsContent>
                  
                  {/* Cardiac Factors Tab */}
                  <TabsContent value="cardiac" className="pt-4">
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="maxHR"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Maximum Heart Rate</FormLabel>
                            <FormControl>
                              <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="exerciseAngina"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5">
                              <FormLabel className="text-base">Exercise Induced Angina</FormLabel>
                              <FormDescription>
                                Presence of chest pain during exercise
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value === "1"}
                                onCheckedChange={(checked) => {
                                  field.onChange(checked ? "1" : "0");
                                }}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="oldpeak"
                        render={({ field: { value, onChange, ...fieldProps } }) => (
                          <FormItem>
                            <FormLabel>ST Depression (Oldpeak): {value}</FormLabel>
                            <FormControl>
                              <Slider
                                defaultValue={[parseFloat(value as any)]}
                                min={-3}
                                max={10}
                                step={0.1}
                                onValueChange={([newValue]) => onChange(newValue)}
                                className="py-4"
                              />
                            </FormControl>
                            <FormDescription>
                              ST depression induced by exercise relative to rest
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="stSlope"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>ST Slope</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select slope" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="1">Upsloping</SelectItem>
                                <SelectItem value="2">Flat</SelectItem>
                                <SelectItem value="3">Downsloping</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="majorVessels"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Major Vessels</FormLabel>
                              <FormDescription className="text-xs">
                                Colored by fluoroscopy (0-3)
                              </FormDescription>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select count" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="0">0</SelectItem>
                                  <SelectItem value="1">1</SelectItem>
                                  <SelectItem value="2">2</SelectItem>
                                  <SelectItem value="3">3</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="thal"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Thalassemia</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="0">Normal</SelectItem>
                                  <SelectItem value="1">Fixed Defect</SelectItem>
                                  <SelectItem value="2">Reversible Defect</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <Button 
                  type="submit" 
                  className="w-full mt-6"
                  disabled={isLoading}
                >
                  {isLoading ? "Processing..." : "Predict Heart Disease Risk"}
                </Button>
                
                <div className="text-center text-xs text-muted-foreground">
                  Note: This is using a simulated model until a heart disease model is available
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              <span>Heart Disease Risk Assessment</span>
            </CardTitle>
            <CardDescription>
              Your heart disease risk assessment results
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!result && !isLoading && (
              <div className="flex flex-col items-center justify-center h-[500px] text-center text-muted-foreground">
                <AlertCircle className="h-12 w-12 mb-4 opacity-50" />
                <p>Submit your cardiovascular parameters to see a heart disease risk assessment</p>
              </div>
            )}
            
            {isLoading && (
              <div className="flex flex-col items-center justify-center h-[500px]">
                <div className="w-12 h-12 border-4 border-t-primary rounded-full animate-spin mb-4"></div>
                <p className="text-muted-foreground">Analyzing your cardiovascular data...</p>
              </div>
            )}
            
            {result && !isLoading && (
              <div className="space-y-6">
                <Alert variant={result.prediction === 1 ? "destructive" : "default"}>
                  <AlertTitle className="text-xl font-bold">
                    {result.prediction === 1 
                      ? "Elevated Risk of Heart Disease" 
                      : "Lower Risk of Heart Disease"}
                  </AlertTitle>
                  <AlertDescription>
                    Based on the cardiovascular parameters provided, the model predicts 
                    {result.prediction === 1 
                      ? " a higher likelihood" 
                      : " a lower likelihood"} of heart disease.
                  </AlertDescription>
                </Alert>
                
                <div className="pt-4">
                  <div className="text-lg font-medium mb-1">Risk Assessment</div>
                  <div className="h-4 w-full bg-secondary rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${result.prediction === 1 ? "bg-destructive" : "bg-primary"}`}
                      style={{ width: `${Math.round(result.probability * 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-sm text-muted-foreground mt-1">
                    {Math.round(result.probability * 100)}% risk level
                  </div>
                </div>
                
                <div className="pt-4 space-y-2">
                  <h3 className="text-lg font-medium">What does this mean?</h3>
                  <p className="text-muted-foreground">
                    This assessment is based on established cardiovascular risk factors. 
                    {result.prediction === 1 
                      ? " Several risk factors in your profile suggest an elevated risk of heart disease. Consider consulting with a cardiologist." 
                      : " Your profile contains fewer established risk factors for heart disease, but regular check-ups are still recommended."}
                  </p>
                  <p className="text-muted-foreground pt-2">
                    <strong>Important:</strong> This is not a medical diagnosis. Please consult with a healthcare professional for proper evaluation and personalized advice.
                  </p>
                </div>
                
                {result.prediction === 1 && (
                  <Alert variant="default" className="bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800">
                    <AlertTitle>Contributing Factors</AlertTitle>
                    <AlertDescription className="space-y-2">
                      <p>Key risk factors in your profile may include:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        {parseInt(form.getValues().sex) === 1 && (
                          <li>Male gender (statistically higher risk)</li>
                        )}
                        {parseInt(form.getValues().chestPainType) > 2 && (
                          <li>Significant chest pain type</li>
                        )}
                        {form.getValues().restingBP > 140 && (
                          <li>Elevated resting blood pressure</li>
                        )}
                        {form.getValues().cholesterol > 240 && (
                          <li>High cholesterol level</li>
                        )}
                        {parseInt(form.getValues().exerciseAngina) === 1 && (
                          <li>Exercise-induced angina</li>
                        )}
                        {form.getValues().oldpeak > 2 && (
                          <li>Significant ST depression</li>
                        )}
                        {parseInt(form.getValues().majorVessels) > 0 && (
                          <li>Presence of affected major vessels</li>
                        )}
                      </ul>
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}