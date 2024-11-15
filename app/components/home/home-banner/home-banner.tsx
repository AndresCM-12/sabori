import React from "react";

import "swiper/css";
import { fetchArrayInPost } from "@/app/utils/methods";
import { featuredHome } from "@/app/utils/constants";
import HomeBannerClientWrapper from "./client.wrapper";

export default async function HomeBanner() {
  const data = await fetchArrayInPost(featuredHome);

  return <HomeBannerClientWrapper carouselData={data} />;
}
