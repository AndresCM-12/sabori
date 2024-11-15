import React from "react";
import { fetchArrayInPost } from "@/app/utils/methods";
import { ourValues } from "@/app/utils/constants";
import OurValuesClientWrapper from "./client.wrapper";

export default async function OurValues() {
  const products = await fetchArrayInPost(ourValues);

  return <OurValuesClientWrapper feature={products} />;
}
