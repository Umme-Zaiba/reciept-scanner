"use client";

import { SchematicEmbed as SchematicEmbedComponent, EmbedProvider } from "@schematichq/schematic-components";

type Props = {
  accessToken: string;
  componentId: string;
};

export default function SchematicEmbed({ accessToken, componentId }: Props) {
  return (
    <EmbedProvider accessToken={accessToken}>
      <SchematicEmbedComponent accessToken={accessToken} id={componentId} />
    </EmbedProvider>
  );
}
