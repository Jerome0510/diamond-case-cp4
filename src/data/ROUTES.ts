const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const appUrl = process.env.NEXT_PUBLIC_APP_URL;

const apiRoutes = {
  CATEGORIES: (id: number) => `${apiUrl}/api/categories/${id}`,
  ARTICLES: (categoryId: number) =>
    `${apiUrl}/api/categories/${categoryId}/articles/`,
};

const appRoutes = {
  ARTICLES: (categoryId: number) =>
    `${appUrl}/categories/${categoryId}/articles`,
};

export { apiRoutes, appRoutes };
