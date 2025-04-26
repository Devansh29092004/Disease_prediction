"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { BadgeCheck, Mail, CalendarIcon, LogOut, User } from "lucide-react";

export default function UserProfile() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    toast.success("Signed out successfully", {
      position: "top-center",
      className: "my-toast-success",
    });
    setOpen(false);
  };

  if (!session?.user) {
    return null;
  }

  const user = session.user;
  const userInitials = user.name
    ? user.name
        .split(" ")
        .map((name) => name[0])
        .join("")
    : "U";
  
  // Calculate rough member since date (for demo purposes)
  const memberSince = new Date();
  memberSince.setMonth(memberSince.getMonth() - 2);
  const formattedDate = memberSince.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="flex items-center gap-2 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] p-2 animate-in hover:scale-105 duration-200">
          <Avatar>
            <AvatarImage src={user.image || ""} alt={user.name || "User"} />
            <AvatarFallback>{userInitials}</AvatarFallback>
          </Avatar>
          <span className="font-medium text-sm hidden sm:inline-block">
            {user.name}
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md animate-in zoom-in-95 duration-300">
        <DialogHeader className="space-y-1">
          <DialogTitle className="text-2xl flex items-center gap-2">
            User Profile <BadgeCheck className="h-5 w-5 text-blue-500" />
          </DialogTitle>
          <DialogDescription className="text-base">
            Welcome back to Disease Prediction! 👋
          </DialogDescription>
        </DialogHeader>
        
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6">
          <div className="flex flex-col items-center gap-5 py-4">
            <div className="relative">
              <Avatar className="h-28 w-28 border-4 border-background shadow-lg">
                <AvatarImage src={user.image || ""} alt={user.name || "User"} />
                <AvatarFallback className="text-3xl bg-primary/20">{userInitials}</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                Active
              </div>
            </div>
            
            <div className="space-y-4 text-center w-full">
              <h3 className="font-bold text-xl">{user.name}</h3>
              
              <div className="grid gap-3">
                <div className="flex items-center gap-2 justify-center text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{user.email}</span>
                </div>
                
                <div className="flex items-center gap-2 justify-center text-sm text-muted-foreground">
                  <CalendarIcon className="h-4 w-4" />
                  <span>Member since {formattedDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <DialogFooter className="flex-col sm:flex-row gap-2 sm:gap-0">
          <Button variant="outline" onClick={() => setOpen(false)} className="flex items-center gap-2">
            <User className="h-4 w-4" />
            View Full Profile
          </Button>
          <Button 
            variant="destructive" 
            onClick={handleSignOut} 
            className="flex items-center gap-2 bg-gradient-to-r from-destructive/90 to-destructive hover:from-destructive hover:to-destructive/90"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
