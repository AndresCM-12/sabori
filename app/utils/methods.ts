import { URL, getSectionsGraphqlQuery } from "./constants";

export async function fetchArrayInPost(postName: string) {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: getSectionsGraphqlQuery(postName),
    }),
  });
  const data = await response.json();
  const post: string =
    data.data.categories.edges[0].node.posts.edges[0].node.content;
  const decodedPost = post
    .split("<code>")[1]
    .split("</code>")[0]
    .replaceAll("&#91;", "[");
  console.log(decodedPost);
  return JSON.parse(decodedPost);
}