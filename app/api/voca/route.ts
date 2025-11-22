// GET(전체 조회), POST(생성)

import db from "@/app/lib/db";
import { NextResponse } from "next/server";

// 1. 전체 게시글 조회
export async function GET() {
  try {
    const [rows] = await db.query("SELECT * FROM voca ORDER BY ID DESC");
    return NextResponse.json(rows);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
