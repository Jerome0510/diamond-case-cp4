import { apiRoutes } from "@/data/ROUTES";
import styles from "./ArticleDetail.module.css";
import { ArticleModel } from "@/model/ArticleModel";

type Props = {
  params: {
    categoryId: number;
    articleId: number;
  };
};

const ArticleDetail = async ({ params }: Props) => {
  const { categoryId, articleId } = params;

  const res = await fetch(apiRoutes.ARTICLE(categoryId, articleId));
  if (!res.ok) {
    return (
      <div className={styles.error}>
        Erreur lors du chargement de l'article.
      </div>
    );
  }

  const article: ArticleModel = await res.json();

  return (
    <section className={styles.articleDetail}>
      <h1 className={styles.titleDetail}>{article.name}</h1>

      <img
        className={styles.imageDetail}
        src={article.image}
        alt={article.name}
      />
      <p className={styles.description}>{article.description}</p>
    </section>
  );
};

export default ArticleDetail;
