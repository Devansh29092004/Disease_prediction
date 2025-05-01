import React from "react";
import { getAuthenticatedUserData } from "@/action/user";
import { User } from "better-auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserDisplay: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="m-6 flex w-5xl items-center gap-4">
      <Avatar className="h-20 w-20 rounded-lg">
        {" "}
        {/* Larger size and rounded square */}
        <AvatarImage src={user.image ?? undefined} alt={user.name ?? ""} />
        <AvatarFallback className="rounded-lg text-xl">
          {" "}
          {/* Match rounding and adjust text size */}
          {user.name
            ?.split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div>
        <h3 className="m-0 text-2xl font-semibold">
          Hello {user.name ?? "User"}
        </h3>
        <p className="m-0 text-md text-gray-600">how are you doing today?</p>
      </div>
    </div>
  );
};

const UserDisplayWrapper: React.FC = async () => {
  const user = await getAuthenticatedUserData();
  if (!user) {
    // Handle case where user is not found or not authenticated
    // You might want to redirect or show a login prompt instead
    return <p>Please log in.</p>;
  }
  return <UserDisplay user={user} />;
};

export default UserDisplayWrapper;
