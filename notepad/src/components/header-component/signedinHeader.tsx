"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogOut, User } from "lucide-react";
import { handleSignOut } from "@/lib/actions/server-functions";

const SignedinHeader = ({ session }: { session: any }) => {
  return (
    <div className="flex px-20">
      <div className="flex justify-between px-10 py-5 border-b border-b-white/10 w-full">
        <div className="flex space-x-10 items-center text-white text-sm">
          <Link
            href="/landingPage"
            className="flex relative items-center w-36 h-20"
          >
            <Image src="/images/logo.svg" alt="" fill className="absolute" />
          </Link>
          <Link href="/homePage" className="hover:text-blue-400">
            Home
          </Link>
        </div>
        <div className="flex space-x-2 items-center justify-center px-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="flex items-center justify-center border">
                {session.user.image ? (
                  <AvatarImage src={session.user?.image} />
                ) : (
                  <User color="white" />
                )}
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>

                <DropdownMenuItem onClick={handleSignOut}>
                  Logout
                  <DropdownMenuShortcut>
                    <LogOut />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default SignedinHeader;
