import Image from "next/image";
import { Inter } from "next/font/google";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

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
    <div>
      {!session ? (
        <div>
          <p>Not Logged In</p>
          <button onClick={signInWithGoogle}>Log in with google</button>
        </div>
      ) : (
        <div>
          <p>Account page will go here.</p>
          <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
        </div>
      )}
    </div>
  );
}
