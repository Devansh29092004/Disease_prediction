import { getAuthenticatedUserData } from "@/action/user";
import UserDisplay from "@/components/user-display";
import { MagicCard } from "@/components/magicui/magic-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Heart,
  PlusSquare,
  Activity,
  Atom,
  Brain,
  CircleAlert,
  ArrowRight,
} from "lucide-react";

const DashboardPage = async () => {
  const user = await getAuthenticatedUserData();

  return (
    <main className="min-h-[80vh]  flex flex-col items-center py-12 p-4 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl transform -translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-accent/5 to-transparent rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="w-full max-w-6xl z-10">
        {user ? (
          <>
            <UserDisplay />

            {/* Health prediction tools section */}
            <div className="mt-38">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <span className="bg-primary/10 text-primary p-2 rounded-full mr-2">
                  <Heart size={18} />
                </span>
                Health Risk Prediction Tools
              </h2>

              {/* Grid container for the cards */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                {/* Diabetes Model Card */}
                <MagicCard
                  className="rounded-xl"
                  gradientFrom="#60A5FA"
                  gradientTo="#3B82F6"
                >
                  <div className="p-6">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950/40 rounded-full flex items-center justify-center mb-3 text-blue-600 dark:text-blue-400">
                      <PlusSquare size={22} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Diabetes Risk Predictor
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Analyze blood glucose levels and other factors to estimate
                      your diabetes risk
                    </p>
                    <Link href="/dashboard/diabetes">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400 text-white hover:shadow-md transition-all">
                        <span className="mr-2">Try Now</span>
                        <ArrowRight size={16} />
                      </Button>
                    </Link>
                  </div>
                </MagicCard>

                {/* Heart Disease Model Card */}
                <MagicCard
                  className="rounded-xl"
                  gradientFrom="#F87171"
                  gradientTo="#EF4444"
                >
                  <div className="p-6">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-950/40 rounded-full flex items-center justify-center mb-3 text-red-600 dark:text-red-400">
                      <Heart size={22} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Heart Disease Risk Predictor
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Evaluate cardiac health markers to estimate your heart
                      disease risk
                    </p>
                    <Link href="/dashboard/heart-disease">
                      <Button className="w-full bg-gradient-to-r from-red-600 to-red-500 dark:from-red-500 dark:to-red-400 text-white hover:shadow-md transition-all">
                        <span className="mr-2">Try Now</span>
                        <ArrowRight size={16} />
                      </Button>
                    </Link>
                  </div>
                </MagicCard>

                {/* Breast Cancer Model Card */}
                <MagicCard
                  className="rounded-xl"
                  gradientFrom="#F472B6"
                  gradientTo="#EC4899"
                >
                  <div className="p-6">
                    <div className="w-12 h-12 bg-pink-100 dark:bg-pink-950/40 rounded-full flex items-center justify-center mb-3 text-pink-600 dark:text-pink-400">
                      <Atom size={22} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Breast Cancer Risk Predictor
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Analyze tissue markers and health factors to assess breast
                      cancer risk
                    </p>
                    <Link href="/dashboard/breast-cancer">
                      <Button className="w-full bg-gradient-to-r from-pink-600 to-pink-500 dark:from-pink-500 dark:to-pink-400 text-white hover:shadow-md transition-all">
                        <span className="mr-2">Try Now</span>
                        <ArrowRight size={16} />
                      </Button>
                    </Link>
                  </div>
                </MagicCard>

                {/* Kidney Disease Model Card */}
                <MagicCard
                  className="rounded-xl"
                  gradientFrom="#A78BFA"
                  gradientTo="#8B5CF6"
                >
                  <div className="p-6">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-950/40 rounded-full flex items-center justify-center mb-3 text-purple-600 dark:text-purple-400">
                      <Activity size={22} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Kidney Disease Risk Predictor
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Evaluate renal function markers to estimate your kidney
                      disease risk
                    </p>
                    <Link href="/dashboard/kidney-disease">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-500 dark:from-purple-500 dark:to-purple-400 text-white hover:shadow-md transition-all">
                        <span className="mr-2">Try Now</span>
                        <ArrowRight size={16} />
                      </Button>
                    </Link>
                  </div>
                </MagicCard>

                {/* Parkinson's Disease Model Card */}
                <MagicCard
                  className="rounded-xl"
                  gradientFrom="#4ADE80"
                  gradientTo="#22C55E"
                >
                  <div className="p-6">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-950/40 rounded-full flex items-center justify-center mb-3 text-green-600 dark:text-green-400">
                      <Brain size={22} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Parkinson's Disease Risk Predictor
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Analyze voice measurements and other factors to assess
                      Parkinson's risk
                    </p>
                    <Link href="/dashboard/parkinsons-disease">
                      <Button className="w-full bg-gradient-to-r from-green-600 to-green-500 dark:from-green-500 dark:to-green-400 text-white hover:shadow-md transition-all">
                        <span className="mr-2">Try Now</span>
                        <ArrowRight size={16} />
                      </Button>
                    </Link>
                  </div>
                </MagicCard>
              </div>
            </div>

            {/* Health tips section */}
            <div className="mt-12 bg-accent/20 rounded-xl p-6 border border-border/40">
              <h3 className="text-lg font-medium mb-3 flex items-center">
                <span className="bg-primary/10 text-primary p-2 rounded-full mr-2">
                  <Activity size={18} />
                </span>
                Daily Health Tip
              </h3>
              <p className="text-muted-foreground text-sm">
                Regular health monitoring and early detection are key to
                prevention. Our AI tools can help identify potential health
                risks, but remember to consult with healthcare professionals for
                proper diagnosis and treatment.
              </p>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
              <CircleAlert size={24} />
            </div>
            <h2 className="text-2xl font-semibold mb-2">No user found</h2>
            <p className="text-muted-foreground mb-4">
              Please sign in to access your health dashboard.
            </p>
            <Link href="/sign-in">
              <Button>Sign In</Button>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default DashboardPage;
