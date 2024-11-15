import React from "react";

import { fetchArrayInPost } from "@/app/utils/methods";
import { featuredBlog } from "@/app/utils/constants";
import FeaturedBlogClientWrapper from "./client.wrapper";

export default async function FeaturedBlog() {
  const blogs = await fetchArrayInPost(featuredBlog);

  return <FeaturedBlogClientWrapper blogs={blogs} />;
}
