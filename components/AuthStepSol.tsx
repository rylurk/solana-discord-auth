import { useWallet } from '@solana/wallet-adapter-react';
import { useEffect, useState } from 'react';

export default function AuthStepSol() {
  const wallet = useWallet();
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (wallet.publicKey) {
      setAddress(wallet.publicKey?.toString());
    }
  }, [wallet]);

  return (
    <div className={`auth-step ${wallet.connected ? 'border-green-400' : 'border-white'}`}>
      {wallet.connecting && (
        <div className="flex justify-center">
          <div className="loading-spinner h-8 w-8 border-4 border-t-4" />
        </div>
      )}
      {!wallet.connecting && (
        <div className="text-xl font-extrabold">
          Connect your Solana wallet to continue {wallet.connected && <span className="ml-2">✅</span>}
        </div>
      )}
    </div>
  );
}
