import { fetchArrayInPost } from "@/app/utils/methods";
import { allProducts } from "@/app/utils/constants";
import BlogItemsClientWrapper from "./client.wrapper";

export default async function BlogItems() {
  const featuredBlog = await fetchArrayInPost(allProducts);

  return <BlogItemsClientWrapper featuredBlog={featuredBlog} />;
}
