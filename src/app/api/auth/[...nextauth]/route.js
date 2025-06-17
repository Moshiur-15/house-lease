// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        role: { label: "Role", type: "text" },
      },
      async authorize(credentials) {
        const { email, password, role } = credentials;

        const users = [
          {
            id: "1",
            name: "Admin User",
            email: "admin@gmail.com",
            password: "admin123",
            role: "admin",
          },
          {
            id: "2",
            name: "Seller User",
            email: "seller@gmail.com",
            password: "seller123",
            role: "seller",
          },
          {
            id: "3",
            name: "Buyer User",
            email: "buyer@gmail.com",
            password: "buyer123",
            role: "buyer",
          },
        ];

        const matchedUser = users.find(
          (user) =>
            user.email === email &&
            user.password === password &&
            user.role === role
        );

        if (matchedUser) {
          return {
            id: matchedUser.id,
            name: matchedUser.name,
            email: matchedUser.email,
            role: matchedUser.role,
            image: "https://i.pravatar.cc/150?u=" + matchedUser.email,
          };
        }

        return null;
      },
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
  },

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

// ⬇️ Handler for Next.js API route
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
