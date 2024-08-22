import { SignUp } from "@clerk/nextjs";

export const metadata = {
    title: "Threads | Inscription",
    description: "Inscrivez-vous sur Threads pour partager vos idées avec tous.",
};

export default function Page() {
    return (
        <div className="flex min-h-screen justify-center items-center py-14">
            <SignUp />
        </div>
    );
}
