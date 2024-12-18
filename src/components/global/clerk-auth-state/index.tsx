import React from "react";
// @ts-ignore
import {
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { User } from "lucide-react";
import Loader from "../loader";
import { Button } from "@/components/ui/button";

type Props = {};

const ClerkAuthState = (props: Props) => {
  return (
    <>
      {/* @ts-ignore */}
      <ClerkLoading>
        <Loader state>
          <></>
        </Loader>
      </ClerkLoading>
      {/* @ts-ignore */}
      <SignedOut>
        {/* @ts-ignore */}
        <SignInButton>
          <Button
            className="rounded-xl 
          bg-[#252525] 
          text-white 
          hover:bg-[#252525]/70
          "
          >
            <User />
            Login
          </Button>
        </SignInButton>
      </SignedOut>
      {/* @ts-ignore */}
      <SignedIn>
        {/* @ts-ignore */}
        <UserButton>
          {/* @ts-ignore */}
          <UserButton.UserProfileLink
            label="Dashboard"
            url={`/dashboard`}
            labelIcon={<User size={16} />}
          />
        </UserButton>
      </SignedIn>
    </>
  );
};

export default ClerkAuthState;
