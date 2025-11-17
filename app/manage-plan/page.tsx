import SchematicComponent from "@/components/schematic/SchematicComponent";
import React from "react";

export default function ManagePlan() {
  return (
    <div className="p-8 flex flex-col gap-4 mx-auto max-w-2xl">
      <SchematicComponent
        componentId={
          process.env.NEXT_PUBLIC_SCHEMATIC_CUSTOMER_PORTAL_COMPONENT_ID ?? ""
        }
      />
    </div>
  );
}
