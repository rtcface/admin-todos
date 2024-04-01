"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  useEffect(() => {
    console.log("Client Side");
  }, []);

  return (
    <div>
      <h1>Hello Page Profile</h1>
      <hr />
      <p>Status: {status}</p>
      <p>Session: {JSON.stringify(session)}</p>
      <hr />
      <p>User: {session?.user?.name ?? "No name"}</p>
      <p>Email: {session?.user?.email ?? "No email"}</p>
      <p>Image: {session?.user?.image ?? "No Image"}</p>
    </div>
  );
}
