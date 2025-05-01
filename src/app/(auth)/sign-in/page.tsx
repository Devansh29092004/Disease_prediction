"use client";

import SignIn from "@/components/sign-in";

export default function Page() {
  return (
    <div className="w-full flex items-center justify-center min-h-screen ">
      <div className="md:w-[400px]">
        <SignIn />
      </div>
    </div>
  );
}
