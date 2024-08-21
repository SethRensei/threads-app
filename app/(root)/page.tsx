import { ClerkProvider, UserButton } from "@clerk/nextjs";

export default function Home() {
    return (
        <ClerkProvider>
            <div>
                <UserButton />
                <h1>Home</h1>
                <p>Welcome to Threads!</p>
                <p>
                    This is a simple Next.js app with a Clerk authentication
                    system. You can sign up, log in, and see your profile
                    information.
                </p>
            </div>
        </ClerkProvider>
    );
}
