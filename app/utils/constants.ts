export const URL = "https://wp.sabori.com.mx/graphql";

export const featuredHome = "featured-home";
export const homeInfo = "home-info";
export const blogInfo = "blog-info";
export const nosotrosInfo = "nosotros-info";
export const avisoPrivacidadInfo = "aviso-privacidad";
export const recetasInfo = "recetas-info";
export const calculadoraInfo = "calculadora-info";
export const featuredProducts = "featured-products";
export const ourValues = "our-values";
export const whereFindUs = "where-find-us";
export const allProducts = "all-products";
export const allRecipes = "all-recipes";
export const allBlogs = "all-blogs";
export const aboutUs = "about-us";

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
