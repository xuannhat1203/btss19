import { auth, currentUser } from "@clerk/nextjs/server";
import React from "react";

export default async function Page() {
  const { userId } = auth();
  let userName = "";

  if (userId) {
    const user = await currentUser();
    userName = user?.firstName || "User";
  }
  return <div>Protected Router</div>;
}
