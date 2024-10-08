"use client";
import { useSession, signIn, signOut, getProviders } from "next-auth/react";
import { useState, useEffect } from "react";

export default function Component() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [providers, setProviders] = useState<any>();
  const { data: session,status  } = useSession();
  console.log(status)
  const fetchProviders = async () => {
    const res = await getProviders();
    setProviders(res);
  };
  useEffect(() => {
    fetchProviders();
  }, []);

  const handleLogin = () => {
    signIn("credentials", {
      email: email,
      password: password,
      redirect: true,
      callbackUrl: "/",
    });
  };

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
          className="border border-slate-400 block my-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
        />
        <input
          className="border border-slate-400 block my-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
        />
      </div>
      <button onClick={handleLogin}>Sign in</button>
      {providers &&
        Object.values(providers).map((provider:any) => (
          <div key={provider?.name}>
            <button
              onClick={() => signIn(provider?.id)}
            >{`Sign in with ${provider?.name}`}</button>
          </div>
        ))}
    </>
  );
}
