"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../../sanity.config";
import withAuthorization from "@/utilis/WithAuthorization";

function StudioPage() {
  return <NextStudio config={config} />;
}

export default withAuthorization(StudioPage);
