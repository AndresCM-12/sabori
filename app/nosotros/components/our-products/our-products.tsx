import React from "react";
import { fetchArrayInPost } from "@/app/utils/methods";
import { featuredProducts, nosotrosInfo } from "@/app/utils/constants";
import OurProductsClientWrapper from "./client.wrapper";

export default async function OurProducts() {
  const products = await fetchArrayInPost(featuredProducts);
  const info = await fetchArrayInPost(nosotrosInfo);

  return <OurProductsClientWrapper products={products} info={info} />;
}
