import React from "react";
import "swiper/css";
import "swiper/css/pagination";

import { fetchArrayInPost } from "@/app/utils/methods";
import { newRecipes } from "@/app/utils/constants";
import RecipesClientWrapper from "./client.wrapper";

export default async function Recipes() {
  const recipes = await fetchArrayInPost(newRecipes);

  return <RecipesClientWrapper recipes={recipes} />;
}
