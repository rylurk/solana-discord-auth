import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function DiscordSignIn(props: { handleUser: (name: string, email: string) => void }) {
  const { data: session } = useSession();

  useEffect(() => {
    if (session && session.user?.name && session.user?.email) {
      props.handleUser(session.user.name, session.user.email);
    }
  }, []);

  if (session) {
    return (
      <div className="flex justify-center items-center mt-10 w-full flex-col">
        <div className="text-lg font-bold mb-8">Your account has been verified and linked!</div>
        <button className="px-4 py-2 rounded bg-[#5865F2] w-68" onClick={() => signOut()}>
          Sign Out of Discord (Optional)
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-10 w-full">
      <button className="px-4 py-2 rounded bg-[#5865F2]" onClick={() => signIn('discord')}>
        Sign in with Discord
      </button>
    </div>
  );
}
