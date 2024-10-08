"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
export default function Component() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    signIn("credentials", {
      email: email,
      password: password,
      redirect: true,
      callbackUrl: "/",
    });
  };
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <div className="form">
        <input
          className=" border border-slate-400 block my-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
        />
        <input
          className=" border border-slate-400 block my-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          name="password"
        />
      </div>
      <button onClick={handleLogin}>Sign in</button>
    </>
  );
}
