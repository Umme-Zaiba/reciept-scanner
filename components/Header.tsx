"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div
      className={`p-4 flex justify-between items-center ${isHomePage ? "bg-blue-50" : "bg-white border-b border-blue-50"}`}
    >
      <Link href="/" className="flex items-center gap-2">
        <Shield className="w-8 h-8" />
        <h1 className="text-xl font-semibold">Expensio</h1>
      </Link>

      <div className="flex space-x-4 items-center">
        <SignedIn>
          <Link href="/reciepts">
            <Button variant="outline">My reciepts</Button>
          </Link>

          <Link href="/manage-plan">
            <Button>Manage plan</Button>
          </Link>

          <UserButton />
        </SignedIn>

        <SignedOut>
          <SignInButton mode="modal">
            <Button>Login</Button>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
}
