import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../../firebase";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "your-cool-username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-awesome-password",
        },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.username || !credentials?.password) {
            throw new Error("Username or password is missing");
          }

          // Fetch all documents in the 'users' collection
          const querySnapshot = await getDocs(collection(db, "users"));

          // Iterate over each document in the collection
          for (const doc of querySnapshot.docs) {
            console.log(
              doc.id,
              " => ",
              doc.data(),
              " => ",
              doc.data().username,
              " => ",
              doc.data().password
            );

            if (
              doc.data().username == credentials.username &&
              doc.data().password == credentials.password
            ) {
              return { id: credentials.username, name: credentials.username };
            }
          }
          console.error("User not found");
          return null;
        } catch (error) {
          console.error("Error during authentication:", error.message);
          // Return null to deny authentication
          return null;
        }
      },
    }),
  ],
};
