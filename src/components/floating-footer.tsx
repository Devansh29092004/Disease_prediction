import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function FloatingFooter() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Show footer after a small delay for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if user has previously dismissed the footer
      const dismissed = localStorage.getItem("footer-dismissed");
      if (!dismissed) {
        setIsVisible(true);
      } else {
        setIsDismissed(true);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const dismissFooter = () => {
    setIsVisible(false);
    // Save preference to local storage
    localStorage.setItem("footer-dismissed", "true");
    setIsDismissed(true);
  };

  if (isDismissed) return null;

  return (
    <footer
      className={`fixed bottom-6 left-0 right-0 z-50 mx-auto w-[calc(100%-2rem)] max-w-7xl transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <div className="backdrop-blur-md bg-background/80 border border-border rounded-xl shadow-lg p-4 md:p-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-medium">
            Ready to predict your health risks?
          </h3>
          <p className="text-muted-foreground text-sm mt-1">
            Try our AI-powered health prediction tools today
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <Button variant="outline" asChild className="whitespace-nowrap">
            <Link href="/dashboard">Explore Models</Link>
          </Button>
          <Button asChild className="whitespace-nowrap">
            <Link href="/dashboard/heart-disease">Try Heart Disease Model</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full h-8 w-8"
            onClick={dismissFooter}
            aria-label="Dismiss footer"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
