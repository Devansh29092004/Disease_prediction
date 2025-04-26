"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { toast } from "sonner";
import Link from "next/link";

export default function SignInButton() {
  const { data: session } = useSession();
  
  const handleSignIn = async () => {
    toast.promise(signIn("google", { callbackUrl: "/" }), {
      loading: "Signing in...",
      success: "Signed in successfully!",
      error: "Failed to sign in. Please try again.",
    });
  };

  // If user is signed in, show Dashboard button
  if (session?.user) {
    return (
      <Link href="/dashboard" passHref>
        <button
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-primary text-primary-foreground gap-2 hover:bg-primary/90 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
        >
          Dashboard
        </button>
      </Link>
    );
  }

  // If no user is signed in, show Sign In button
  return (
    <button
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
      onClick={handleSignIn}
    >
      <Image
        className="dark:invert"
        src="/vercel.svg"
        alt="Vercel logomark"
        width={20}
        height={20}
      />
      Sign In
    </button>
  );
}
