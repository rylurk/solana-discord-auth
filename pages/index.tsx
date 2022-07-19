import { useWallet } from '@solana/wallet-adapter-react';
import { useEffect, useState } from 'react';
import AuthStepDiscord from '../components/AuthStepDiscord';
import AuthStepSol from '../components/AuthStepSol';
import DiscordSignIn from '../components/DiscordSignIn';
import Navbar from '../components/Navbar';
import { addConnectedUser } from '../queries/firebase';

function HomePage() {
  const wallet = useWallet();

  const [address, setAddress] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleDiscordUser = (discordName: string, discordEmail: string) => {
    setUsername(discordName);
    setEmail(discordEmail);
  };

  useEffect(() => {
    if (wallet.publicKey) {
      setAddress(wallet.publicKey?.toString());
    }
    if (address !== '' && username !== '' && email !== '') {
      const user = {
        solanaAddress: address,
        discordUsername: username,
        discordEmail: email,
      };
      addConnectedUser(user);
    }
  }, [wallet, username, email]);

  return (
    <div className="bg-slate-900 px-2 py-4 text-white">
      <Navbar />
      <div className="flex flex-col items-center">
        <AuthStepSol />
        {wallet.connected && <AuthStepDiscord username={username} />}
      </div>
      {wallet.connected && <DiscordSignIn handleUser={handleDiscordUser} />}
    </div>
  );
}

export default HomePage;
