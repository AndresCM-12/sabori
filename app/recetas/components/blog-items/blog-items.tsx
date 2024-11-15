import { fetchArrayInPost } from "@/app/utils/methods";
import { allRecipes } from "@/app/utils/constants";
import BlogItemsClientWrapper from "./client.wrapper";

export default async function BlogItems() {
  const featuredBlog = await fetchArrayInPost(allRecipes);

  return <BlogItemsClientWrapper featuredBlog={featuredBlog} />;
}
