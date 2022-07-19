import NextAuth from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

// Only request basic info like username and email
const scopes = ['identify', 'email'].join(' ');

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
      authorization: { params: { scope: scopes } },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
