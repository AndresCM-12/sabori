import { fetchArrayInPost } from "@/app/utils/methods";
import { allBlogs, blogInfo } from "@/app/utils/constants";
import BlogItemsClientWrapper from "./client.wrapper";

export default async function BlogItems() {
  const featuredBlog = await fetchArrayInPost(allBlogs);
  const blogInfoData = await fetchArrayInPost(blogInfo);
  
  return (
    <BlogItemsClientWrapper
      featuredBlog={featuredBlog}
      blogInfo={blogInfoData}
    />
  );
}
