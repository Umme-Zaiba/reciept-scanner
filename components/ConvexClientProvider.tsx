"use client";

import { ReactNode, useEffect } from "react";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { useAuth, useUser } from "@clerk/nextjs";
import {
  SchematicProvider,
  useSchematicEvents,
} from "@schematichq/schematic-react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const SchematicWrapped = ({ children }: { children: ReactNode }) => {
  const { identify } = useSchematicEvents(); //tells schematic to identify the user , and says it is a clerk user
  const { user } = useUser();

  useEffect(() => {
    const userName =
      user?.username ??
      user?.fullName ??
      user?.id ??
      user?.emailAddresses[0]?.emailAddress;

    //need to make sure we have company level and user level keys setup
    if (user?.id) {
      identify({
        name: userName,
        keys: {
          id: user.id,
        },
        company: {
          keys: {
            id: user.id,
          },
          name: userName,
        },
        // id: user.id,
        // email: user.emailAddresses[0].emailAddress,
      });
    }
  }, [user, identify]);

  return children;
};

export default function ConvexClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      <SchematicProvider
        publishableKey={process.env.NEXT_PUBLIC_SCHEMATIC_KEY!}
      >
        <SchematicWrapped>{children}</SchematicWrapped>
      </SchematicProvider>
    </ConvexProviderWithClerk>
  );
}
