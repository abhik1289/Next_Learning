// import '@/styles/globals.css'
import { ClerkProvider, SignedIn, SignedOut, useSignIn,UserButton,SignInButton } from '@clerk/nextjs'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

const publicPages: Array<string> = []

const SignInOAuthButtons = () => {
  const { signIn, isLoaded } = useSignIn();
  if (!isLoaded) {
    return null;
  }
  const signInWithGoogle = () =>
    signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/",
    });
  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
};

export default function Header() {
  return (
    <header
      style={{ display: "flex", justifyContent: "space-between", padding: 20 }}
    >
      <h1>My App</h1>
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      <SignedIn>
        <div>You are signed in</div>
      </SignedIn>
      <div>Always visible</div>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </header>
  );
}
