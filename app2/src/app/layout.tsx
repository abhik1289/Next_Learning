import "./globals.css";
import { ClerkLoaded, ClerkLoading, ClerkProvider, GoogleOneTap } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ClerkLoading>
            <div>Clerk is loading...</div>
          </ClerkLoading>
          <ClerkLoaded>{children}</ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
