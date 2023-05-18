import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import TwitterProvider from "next-auth/providers/twitter";
import FacebookProvider from "next-auth/providers/facebook";
import axios from "axios";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: "2.0", // opt-in to Twitter OAuth 2.0
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  // secret: process.env.JWT_SECRET,
  callbacks: {
    // signIn: async (user, account, profile) => {
    //   try {
    //     // Perform the desired action after successful sign-in
    //     // await axios.post("/api/", {
    //     //   user,
    //     //   account,
    //     //   profile,
    //     // });
    //     console.log(user, account, profile);
    //   } catch (error) {
    //     console.error("Error performing action:", error);
    //   }
    //   return true; // Allow sign-in to proceed
    // },
    // async signIn(user, account, profile) {
    //   // Perform your desired action after successful sign-in
    //   try {
    //     // Perform the desired action, such as an API call or updating user data
    //     await axios.post("/api/nt", {
    //       user,
    //       account,
    //       profile,
    //     });
    //   } catch (error) {
    //     // Handle any errors that occur during the action
    //     console.error("Error performing action:", error);
    //   }
    //   // await yourFunctionHere(user, account, profile);
    //   return true; // Return true to allow sign-in
    // },
    // async session({ session, token, user }) {
    //   // Send properties to the client, like an access_token and user id from a provider.
    //   session.accessToken = token.accessToken;
    //   session.user.id = token.id;
    //   //console.log(session);
    //   return "Session is", session;
    // },
  },
  async jwt({ token, account }) {
    // Persist the OAuth access_token to the token right after signin
    if (account) {
      token.accessToken = account.access_token;
    }
    return token;
  },
  async session({ session, token, user }) {
    // Send properties to the client, like an access_token from a provider.
    session.accessToken = token.accessToken;
    return session;
  },
};

export default NextAuth(authOptions);
