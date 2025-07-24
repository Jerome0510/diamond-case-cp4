import { db } from "@/lib/db";
import { ArticleModel } from "@/model/ArticleModel";
import { NextResponse } from "next/server";

type Params = {
  params: { categoryId: string };
};

export async function GET(_req: Request, { params }: Params) {
  const { categoryId } = await params;
  try {
    const result = await db.query(
      " SELECT id, description, image, name, categories_id FROM articles WHERE categories_id = ?",
      [categoryId]
    );

    const rows = result[0] as ArticleModel[];
    if (rows.length === 0) {
      return NextResponse.json(
        { error: "Article introuvable" },
        { status: 404 }
      );
    }
    return NextResponse.json(rows);
  } catch (error) {
    console.error("erreur MySql : ", error);
    return NextResponse.json(
      { error: " Internal Server Error" },
      { status: 500 }
    );
  }
}
