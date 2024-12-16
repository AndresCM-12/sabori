import {
  URL,
  getBlogsGraphqlQuery,
  getProductsGraphqlQuery,
  getRecipesGraphqlQuery,
  getSectionsGraphqlQuery,
} from "./constants";

export async function fetchArrayInPost(postName: string) {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 3600,
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
    return JSON.parse(decodedPost);
  } catch (error) {
    console.error("Error fetching data for:", postName);
    console.log("error:", error);
    return [];
  }
}

export async function fetchArrayInProduct(postName: string) {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 3600,
      },
      body: JSON.stringify({
        query: getProductsGraphqlQuery(postName),
      }),
    });

    const data = await response.json();
    const post: string =
      data.data.categories.edges[0].node.posts.edges[0].node.content;
    const decodedPost = post
      .split("<code>")[1]
      .split("</code>")[0]
      .replaceAll("&#91;", "[");
    return JSON.parse(decodedPost);
  } catch (error) {
    console.error("Error fetching data for:", postName);
    console.log("error:", error);
    return [];
  }
}

export async function fetchArrayInRecipe(postName: string) {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 3600,
      },
      body: JSON.stringify({
        query: getRecipesGraphqlQuery(postName),
      }),
    });

    const data = await response.json();
    const post: string =
      data.data.categories.edges[0].node.posts.edges[0].node.content;
    const decodedPost = post
      .split("<code>")[1]
      .split("</code>")[0]
      .replaceAll("&#91;", "[");
    return JSON.parse(decodedPost);
  } catch (error) {
    console.error("Error fetching data for:", postName);
    console.log("error:", error);
    return [];
  }
}

export async function fetchArrayInBlog(postName: string) {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 3600,
      },
      body: JSON.stringify({
        query: getBlogsGraphqlQuery(postName),
      }),
    });

    const data = await response.json();
    const post: string =
      data.data.categories.edges[0].node.posts.edges[0].node.content;
    const decodedPost = post
      .split("<code>")[1]
      .split("</code>")[0]
      .replaceAll("&#91;", "[");
    return JSON.parse(decodedPost);
  } catch (error) {
    console.error("Error fetching data for:", postName);
    console.log("error:", error);
    return [];
  }
}

export async function fetchArrayInBlogWithMarkDown(postName: string) {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 3600,
      },
      body: JSON.stringify({
        query: getBlogsGraphqlQuery(postName),
      }),
    });

    const data = await response.json();
    const post: string =
      data.data.categories.edges[0].node.posts.edges[0].node.content;
    const decodedPost = post
      .split("<code>")[1]
      .split("</code>")[0]
      .replaceAll("&#91;", "[");

    const postHtmlWithOutCode = post
      .split("<code>")[0]
      .concat(post.split("</code>")[1]);
    return { code: JSON.parse(decodedPost), info: postHtmlWithOutCode };
  } catch (error) {
    console.error("Error fetching data for:", postName);
    console.log("error:", error);
    return [];
  }
}
