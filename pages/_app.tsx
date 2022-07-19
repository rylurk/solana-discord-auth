import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useMemo } from 'react';
import { WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  CoinbaseWalletAdapter,
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { createDefaultAuthorizationResultCache, SolanaMobileWalletAdapter } from '@solana-mobile/wallet-adapter-mobile';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from 'react-query';

require('@solana/wallet-adapter-react-ui/styles.css');

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const network = WalletAdapterNetwork.Devnet;

  const wallets = useMemo(
    () => [
      new SolanaMobileWalletAdapter({
        appIdentity: { name: 'Solana Wallet Adapter App' },
        authorizationResultCache: createDefaultAuthorizationResultCache(),
      }),
      new CoinbaseWalletAdapter(),
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
      new SolletWalletAdapter(),
    ],
    [network]
  );

  const queryClient = new QueryClient();

  return (
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <SessionProvider session={session}>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </SessionProvider>
      </WalletModalProvider>
    </WalletProvider>
  );
}

export default MyApp;
