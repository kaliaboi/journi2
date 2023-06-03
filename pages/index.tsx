import { Inter } from "next/font/google";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Landing from "@/components/Landing";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }
  const session = useSession();
  const supabase = useSupabaseClient();
  return (
    <>
      {!session ? (
        <Landing authenticate={signInWithGoogle} />
      ) : (
        <div>
          <p>Account page will go here.</p>
          <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
        </div>
      )}
    </>
  );
}
