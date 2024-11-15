import React from "react";

import "swiper/css";
import { fetchArrayInPost } from "@/app/utils/methods";
import { featuredRecipes } from "@/app/utils/constants";
import RecipesClientWrapper from "./client.wrapper";

export default async function Recipes() {
  const recipes = await fetchArrayInPost(featuredRecipes);

  return <RecipesClientWrapper recipes={recipes} />;
}
