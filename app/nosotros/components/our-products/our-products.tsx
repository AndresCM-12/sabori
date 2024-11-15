import React from "react";
import { fetchArrayInPost } from "@/app/utils/methods";
import { featuredProducts } from "@/app/utils/constants";
import OurProductsClientWrapper from "./client.wrapper";

export default async function OurProducts() {
  const products = await fetchArrayInPost(featuredProducts);

  return <OurProductsClientWrapper products={products} />;
}
