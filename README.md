This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## About

This is an auth solution for allowing Solana wallet owners to link their Discord accounts for verification purposes.

It uses next-auth under the hood and stores the wallet address <> Discord link in an external database.

Most major Solana wallet providers are supported: Phantom, Solflare, Sollet, Glow, Torus, etc.
