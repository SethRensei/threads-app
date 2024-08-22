import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { fetchUser } from "@/lib/actions/user.actions";
import PostThread from "@/components/forms/PostThread";

export const metadata = {
    title: "Threads | Post - Créer un fil de discussions",
    description: "Il est temps de partager avec nous vos idées.",
};

export default async function Page() {
    const user = await currentUser();
    if (!user) return null;

    const userInfo = await fetchUser(user.id);
    if (!userInfo?.onboarded) redirect("/onboarding");
    
    return (
        <>
            <h1 className="head-text">Créer un fil</h1>
            <PostThread userId={userInfo._id} />
        </>
    );
}