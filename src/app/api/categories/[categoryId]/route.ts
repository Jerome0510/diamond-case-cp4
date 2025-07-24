import { db } from "@/lib/db";
import { CategoryModel } from "@/model/CategoryModel";
import { NextResponse } from "next/server";

type Params = {
  params: { categoryId: string };
};

export async function GET(_req: Request, { params }: Params) {
  const { categoryId } = await params;

  try {
    const result = await db.query(
      "SELECT id, name FROM categories WHERE id = ?",
      [categoryId]
    );
    const rows = result[0] as CategoryModel[];
    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("erreur MySql : ", error);
    return NextResponse.json(
      { error: " Internal Server Error" },
      { status: 500 }
    );
  }
}
