export const URL = "https://sabori.com.mx/crm-api/graphql";

export const featuredHome = "featured-home";
export const featuredProducts = "featured-products";
export const featuredRecipes = "featured-recipes";
export const featuredBlog = "featured-blog";
export const whereFindUs = "where-find-us";
export const allProducts = "all-products";
export const allRecipes = "all-recipes";
export const allBlogs = "all-blogs";
export const newRecipes = "new-recipes";

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

export const getProductsGraphqlQuery = (postName: string) => {
  return `
    query get_post_by_name {
      categories(where: {name: "products"}) {
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

export const getRecipesGraphqlQuery = (postName: string) => {
  return `
    query get_post_by_name {
      categories(where: {name: "recipes"}) {
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

export const getBlogsGraphqlQuery = (postName: string) => {
  return `
    query get_post_by_name {
      categories(where: {name: "blogs"}) {
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
