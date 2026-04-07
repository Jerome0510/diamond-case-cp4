import { apiRoutes, appRoutes } from "@/data/ROUTES";
import styles from "./Articles.module.css";
import { ArticleModel } from "@/model/ArticleModel";
import Link from "next/link";

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

  return (
    <section className={styles.globalBoutique}>
      <ul className={styles.boutiqueList}>
        {allArticles.map((article) => (
          <li className={styles.cardArticle} key={article.id}>
            <h2 className={styles.nameArticle}>{article.name}</h2>

            <Link href={appRoutes.ARTICLE(categoryId, article.id)}>
              <img
                className={styles.pictureArticle}
                src={article.image}
                alt={article.name}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Articles;
