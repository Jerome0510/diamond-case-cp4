import { apiRoutes } from "@/data/ROUTES";
import styles from "./articles.module.css";
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
    <section className={styles.globalBoutique}>
      <ul className={styles.boutiqueList}>
        {allArticles.map((article) => (
          <li className={styles.cardArticle} key={article.id}>
            <h2 className={styles.nameArticle}>{article.name}</h2>
            <img
              className={styles.pictureArticle}
              src={article.image}
              alt={article.name}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Articles;
