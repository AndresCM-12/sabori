import React from "react";
import OurProductsClientWrapper from "./client.wrapper";
import { fetchArrayInPost } from "@/app/utils/methods";
import { featuredProducts } from "@/app/utils/constants";

export default async function OurProducts() {
  const products = await fetchArrayInPost(featuredProducts);

  return <OurProductsClientWrapper products={products} />;
}
