import { db } from "@/lib/db";
import { ArticleModel } from "@/model/ArticleModel";
import { NextResponse } from "next/server";

type Params = {
  params: { categoryId: string; articleId: string };
};

export async function GET(_req: Request, { params }: Params) {
  const { categoryId, articleId } = await params;
  try {
    const result = await db.query(
      "SELECT * FROM articles WHERE id = ? AND categories_id = ?",
      [articleId, categoryId]
    );
    const rows = result[0] as ArticleModel[];
    if (rows.length === 0) {
      return NextResponse.json(
        { error: "Article non trouvé" },
        { status: 404 }
      );
    }

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("Erreur SQL:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
