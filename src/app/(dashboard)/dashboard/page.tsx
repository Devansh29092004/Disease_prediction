import { getAuthenticatedUserData } from "@/action/user";
import UserDisplay from "@/components/user-display";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const DashboardPage = async () => {
  const user = await getAuthenticatedUserData();

  return (
    <main className="min-h-[80vh] flex flex-col items-center py-12 p-4 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl transform -translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-accent/5 to-transparent rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="w-full max-w-6xl z-10">
        {user ? (
          <>
            {/* Welcome section with user info */}
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold tracking-tight mb-2 bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
                Welcome to Your Health Dashboard
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Select from our AI-powered health assessment tools to evaluate your health risks.
              </p>
            </div>

            <UserDisplay />

            {/* Health prediction tools section */}
            <div className="mt-10">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <span className="bg-primary/10 text-primary p-2 rounded-full mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </span>
                Health Risk Prediction Tools
              </h2>

              {/* Grid container for the cards */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                {/* Diabetes Model Card */}
                <Card className="border border-border/40 bg-card/60 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden group">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-200/20 to-transparent rounded-bl-full"></div>
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950/40 rounded-full flex items-center justify-center mb-3 text-blue-600 dark:text-blue-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                        <path d="M8.5 12h7" />
                        <path d="M9 8v8" />
                        <path d="M15 8v8" />
                      </svg>
                    </div>
                    <CardTitle className="text-xl">Diabetes Risk Predictor</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Analyze blood glucose levels and other factors to estimate your diabetes risk
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href="/dashboard/diabetes">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400 text-white hover:shadow-md group-hover:scale-[1.02] transition-all">
                        <span className="mr-2">Try Now</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Heart Disease Model Card */}
                <Card className="border border-border/40 bg-card/60 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden group">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-200/20 to-transparent rounded-bl-full"></div>
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-950/40 rounded-full flex items-center justify-center mb-3 text-red-600 dark:text-red-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                    </div>
                    <CardTitle className="text-xl">Heart Disease Risk Predictor</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Evaluate cardiac health markers to estimate your heart disease risk
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href="/dashboard/heart-disease">
                      <Button className="w-full bg-gradient-to-r from-red-600 to-red-500 dark:from-red-500 dark:to-red-400 text-white hover:shadow-md group-hover:scale-[1.02] transition-all">
                        <span className="mr-2">Try Now</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Breast Cancer Model Card */}
                <Card className="border border-border/40 bg-card/60 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden group">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-pink-200/20 to-transparent rounded-bl-full"></div>
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 bg-pink-100 dark:bg-pink-950/40 rounded-full flex items-center justify-center mb-3 text-pink-600 dark:text-pink-400">
                        Access Parkinson's Disease Predictor
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">No user found.</p>
          )}
        </CardContent>
      </Card>
    </main>
  );
};

export default DashboardPage;
