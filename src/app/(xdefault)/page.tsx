import { permanentRedirect } from "next/navigation";

import { RootChooser } from "@/components/RootChooser";

const isStaticExport = process.env.STATIC_EXPORT === "true";

export default function RootPage() {
  if (isStaticExport) {
    return <RootChooser />;
  }

  permanentRedirect("/cs/");
}
