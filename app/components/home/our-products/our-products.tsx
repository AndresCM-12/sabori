import React from "react";
import OurProductsClientWrapper from "./client.wrapper";
import { fetchArrayInPost } from "@/app/utils/methods";
import { featuredProducts, homeInfo } from "@/app/utils/constants";

export default async function OurProducts() {
  const products = await fetchArrayInPost(featuredProducts);
  const homeInfoData = await fetchArrayInPost(homeInfo);

  return <OurProductsClientWrapper products={products} homeInfo={homeInfoData.ourProducts} />;
}
