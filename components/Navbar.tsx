import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-12">
      <a href="https://www.drift.trade/">
        <Image src="/logo.svg" height="32px" width="120px" alt="Drift logo" />
      </a>
      <div className="flex mt-3 flex-row">
        <button className="btn-gradient wallet-select px-4">Connect Wallet</button>
      </div>
    </div>
  );
}
