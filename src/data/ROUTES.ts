const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const appUrl = process.env.NEXT_PUBLIC_APP_URL;

const apiRoutes = {
  CATEGORIES: (id: number) => `${apiUrl}/api/categories/${id}`,
  ARTICLES: (categoryId: number) =>
    `${apiUrl}/api/categories/${categoryId}/articles/`,
  ARTICLE: (categoryId: number, articleId: number) =>
    `${apiUrl}/api/categories/${categoryId}/articles/${articleId}`,
  BASKET: `${apiUrl}/api/basket`,
};

const appRoutes = {
  ARTICLES: (categoryId: number) =>
    `${appUrl}/categories/${categoryId}/articles`,
  ARTICLE: (categoryId: number, articleId: number) =>
    `${apiUrl}/categories/${categoryId}/articles/${articleId}`,
  BASKET: `${appUrl}/basket`,
};

export { apiRoutes, appRoutes };
