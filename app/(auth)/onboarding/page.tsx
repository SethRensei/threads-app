import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import AccountProfile from "@/components/forms/AccountProfile";
import { fetchUser } from "@/lib/actions/user.actions";

export const metadata = {
    title: "Threads | Intégration",
    description: "Ajoutez plus d'informations sur vous pour profiter d'une meilleure expérience.",
};

export default async function Page() {
    const user = await currentUser();

    const userInfo = await fetchUser(user.id);
    if (userInfo?.onboarding) redirect('/');
    
    const userData = {
        id: user?.id,
        objectId: userInfo?._id,
        username: userInfo?.username || user?.username,
        name: userInfo?.name || user?.firstName || "",
        bio: userInfo?.bio || "",
        image: userInfo?.image || user?.imageUrl,
    };

    return (
        <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
            <h1 className="head-text">Intégration</h1>
            <p className="mt-3 text-base-regular text-light-2">
                Complète ton profile maintenant, pour utiliser Threads
            </p>
            <section className="mt-9 bg-dark-2 p-10">
                <AccountProfile user={userData} btnTitle='continue'/>
            </section>
        </main>
    );
}
