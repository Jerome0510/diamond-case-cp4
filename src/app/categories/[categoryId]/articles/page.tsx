import { apiRoutes } from "@/data/ROUTES";
import styles from "./Shop.module.css";
import { ArticleModel } from "@/model/ArticleModel";

type Props = {
  params: {
    categoryId: number;
    articleId: number;
  };
};

const Articles = async ({ params }: Props) => {
  const { categoryId } = await params;
  const apiArticlesResult = await fetch(apiRoutes.ARTICLES(categoryId));
  const allArticles: ArticleModel[] = await apiArticlesResult.json();

  console.log(allArticles);
  return (
    <section>
      <ul>
        {allArticles.map((article) => (
          <li key={article.id}>
            <h2>{article.name}</h2>
            <img src={article.image} alt={article.name} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Articles;
