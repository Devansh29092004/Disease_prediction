import { createAuthClient } from "better-auth/react";
import { toast } from "sonner";

export const client = createAuthClient({
  fetchOptions: {
    onError(e) {
      if (e.error.status === 429) {
        toast.error("Too many requests. Please try again later.");
      } else if (e.error.status >= 400) {
        toast.error(e.error.message || "An error occurred. Please try again.");
      }
    },
  },
});

export const { signUp, signIn, signOut, useSession } = client;

// Listen for session changes and show a toast for sign in/out
client.$store.listen("$sessionSignal", async (session) => {
  if (session) {
    toast.success("Signed in successfully");
  } else {
    toast("Signed out");
  }
});
