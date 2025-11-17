"use server";

//we need to know who the current user is in the app

import { currentUser } from "@clerk/nextjs/server";

import { SchematicClient } from "@schematichq/schematic-typescript-node";

const apiKey = process.env.SCHEMATIC_API_KEY;
const client = new SchematicClient({ apiKey });

export default async function getTemporaryAccessToken() {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  try {
    const resp = await client.accesstokens.issueTemporaryAccessToken({
      resource_type: "company",
      lookup: { id: user.id },
    });

    return resp.data?.token;
  } catch (error) {
    console.error("Error getting temporary access token:", error);
    throw error;
  }
}
