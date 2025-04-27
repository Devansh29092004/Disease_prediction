import { Metadata } from "next";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Disease Prediction Dashboard",
  description: "Access different disease prediction models",
};

const models = [
  {
    id: "diabetes",
    name: "Diabetes Prediction",
    description: "Predict diabetes risk based on health metrics",
    href: "/dashboard/diabetes",
  },
  {
    id: "heart-disease",
    name: "Heart Disease Prediction",
    description: "Assess heart disease risk using clinical parameters",
    href: "/dashboard/heart-disease",
  },
  {
    id: "pneumonia",
    name: "Pneumonia Detection",
    description: "Detect pneumonia from chest X-ray images",
    href: "/dashboard/pneumonia",
  },
  {
    id: "skin-cancer",
    name: "Skin Cancer Classification",
    description: "Classify skin lesions from dermatoscopic images",
    href: "/dashboard/skin-cancer",
  },
];

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">
          Disease Prediction Dashboard
        </h1>
        <p className="text-muted-foreground text-lg">
          Select a model to get started with your health assessment
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {models.map((model) => (
          <Card
            key={model.id}
            className="overflow-hidden transition-all hover:shadow-lg"
          >
            <CardHeader>
              <CardTitle>{model.name}</CardTitle>
              <CardDescription>{model.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={model.href}>Launch Model</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
