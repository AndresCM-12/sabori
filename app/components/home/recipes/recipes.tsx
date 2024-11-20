import React from "react";

import "swiper/css";
import { fetchArrayInPost } from "@/app/utils/methods";
import { allRecipes } from "@/app/utils/constants";
import RecipesClientWrapper from "./client.wrapper";

export default async function Recipes() {
  const rawRecipes = await fetchArrayInPost(allRecipes);
  const flatenRecipes = rawRecipes
    .flatMap((category: any) => category.items)
    .filter((recipe: any) => recipe.viewInHome);
  return <RecipesClientWrapper recipes={flatenRecipes} />;
}
