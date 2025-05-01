import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import prisma from "@/lib/db";

export const getAuthenticatedUserData = async () => {
    "use server";
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user?.id) {
        // User is not authenticated
        return null;
    }

    // User is authenticated, get their data from the DB
    const userId = session.user.id;
    const userData = await prisma.user.findUnique({
        where: { id: userId },
    });

    return userData;
};


export const getUserFromDb = async (userId: string) => {
    return await prisma.user.findUnique({
        where: { id: userId },
    });
};
