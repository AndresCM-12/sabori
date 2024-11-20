import React from "react";

import { fetchArrayInPost } from "@/app/utils/methods";
import FeaturedBlogClientWrapper from "./client.wrapper";
import { allBlogs } from "@/app/utils/constants";

export default async function FeaturedBlog() {
  const blogs = await fetchArrayInPost(allBlogs);
  const flatenBlogs = blogs
    .flatMap((category: any) => category.items)
    .filter((recipe: any) => recipe?.viewInHome);

  return <FeaturedBlogClientWrapper blogs={flatenBlogs} />;
}
