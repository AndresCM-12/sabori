import React from "react";
import AboutUsClientWrapper from "./client.wrapper";
import { fetchArrayInPost } from "@/app/utils/methods";
import { aboutUs } from "@/app/utils/constants";

export default async function AboutUs() {
  const data = await fetchArrayInPost(aboutUs);
  return <AboutUsClientWrapper data={data} />;
}
