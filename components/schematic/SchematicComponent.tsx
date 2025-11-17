import getTemporaryAccessToken from "@/actions/getTemporaryAccessToken";
import React from "react";
import SchematicEmbed from "./SchematicEmbed";

type Props = {
  componentId: string;
};

export default async function SchematicComponent({ componentId }: Props) {
  if (!componentId) return null;

  const accessToken = await getTemporaryAccessToken();

  if (!accessToken) throw new Error("Access token not found");

  return <SchematicEmbed accessToken={accessToken} componentId={componentId} />;
}
