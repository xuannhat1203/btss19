import { SignInButton, SignOutButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import React from "react";

export default async function Page() {
  const { userId } = auth();
  let userName = "User";
  let email = "Email";
  let check;
  if (userId) {
    const user = await currentUser();
    userName = `${user?.firstName || ""} ${user?.lastName || ""}`.trim();
    email = user?.emailAddresses[0]?.emailAddress || "Email";
    check = user;
  }
  console.log(check);

  return (
    <div>
      <h4>
        {" "}
        Họ và tên: {userName} - Email: {email}
      </h4>
      {check ? (
        <SignOutButton>
          <button>Đăng xuất</button>
        </SignOutButton>
      ) : (
        <SignInButton>
          <button>Đăng nhập</button>
        </SignInButton>
      )}
    </div>
  );
}
