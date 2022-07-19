import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-12">
      <a href="https://www.drift.trade/">
        <Image src="/logo.svg" height="32px" width="120px" alt="Drift logo" />
      </a>
      <div className="flex mt-3 flex-row">
        <WalletMultiButton className="btn-gradient wallet-select" />
      </div>
    </div>
  );
}
