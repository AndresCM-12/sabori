import React from "react";
import "swiper/css";
import "swiper/css/pagination";

import { fetchArrayInPost } from "@/app/utils/methods";
import { allRecipes } from "@/app/utils/constants";
import RecipesClientWrapper from "./client.wrapper";

export default async function Recipes() {
  const recipes = await fetchArrayInPost(allRecipes);
  const flatenRecipes = recipes
    .flatMap((category: any) => category.items)
    .filter((recipe: any) => recipe.viewInHome)
    .sort((a: any, b: any) => a.order - b.order);
  return <RecipesClientWrapper recipes={flatenRecipes} />;
}
