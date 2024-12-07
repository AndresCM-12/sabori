import { fetchArrayInPost } from "@/app/utils/methods";
import { allBlogs } from "@/app/utils/constants";
import BlogItemsClientWrapper from "./client.wrapper";

export default async function BlogItems() {
  const featuredBlog = await fetchArrayInPost(allBlogs);

  return <BlogItemsClientWrapper featuredBlog={featuredBlog} />;
}
