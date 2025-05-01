import { ModeToggle } from "@/components/theme-mode";
import { SignOutButton } from "./sign-out-button";
import Link from "next/link";

const Navbar = () => (
  <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 px-12 py-4 rounded-2xl backdrop-blur-md bg-white/40 dark:bg-[#18181b]/40 shadow-lg border border-white/30 dark:border-[#23272f]/30 w-[80vw] ">
    <span className="font-semibold text-xl md:text-2xl text-gray-800 dark:text-white select-none tracking-tight">
      <Link href={"/"}>BetterHealth</Link>
    </span>
    <div className="flex-1" />
    <ModeToggle />
    <SignOutButton />
  </nav>
);

export default Navbar;
