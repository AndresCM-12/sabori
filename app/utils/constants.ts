export const URL = "http://sabori.local/graphql";

export const featuredHome = "featured-home";
export const featuredProducts = "featured-products";
export const featuredRecipes = "featured-recipes";
export const featuredBlog = "featured-blog";
export const whereFindUs = "where-find-us";

export const getSectionsGraphqlQuery = (postName: string) => {
  return `
    query get_post_by_name {
      categories(where: {name: "sections"}) {
        edges {
          node {
            id
            posts(where: {name: "${postName}"}) {
              edges {
                node {
                  content
                }
              }
            }
          }
        }
      }
    }
    `;
};
