"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

import { signOut, useSession } from "@/lib/auth-client";
import { redirect, useRouter } from "next/navigation";

interface SignOutButtonProps {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export function SignOutButton({
  variant = "outline",
  size = "sm",
  className = "text-red-500",
}: SignOutButtonProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const { data } = useSession();
  const isSignedIn = !!data?.session;

  const handleSignOut = async () => {
    try {
      setIsLoading(true);
      await signOut();
      router.refresh();
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // If user is not signed in, don't render the button
  if (!isSignedIn) {
    return (
      <Button
        variant={"default"}
        size={size}
        className={className}
        onClick={() => {
          redirect("/sign-in");
        }}
        disabled={isLoading}
      >
        {isLoading ? <Loader2 size={16} className="animate-spin mr-1" /> : null}
        Sign In
      </Button>
    );
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleSignOut}
      disabled={isLoading}
    >
      {isLoading ? <Loader2 size={16} className="animate-spin mr-1" /> : null}
      Sign Out
    </Button>
  );
}
