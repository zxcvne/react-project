import db from "@/app/lib/db";
import bcrypt from "bcrypt";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  console.log("1");
  const { name, email, password, phone, address } = await req.json();

  if (!name || !email || !password || !phone || !address) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("2", hashedPassword);
    await db.query(
      "INSERT INTO user (name, email, password, phone, address) VALUES (?, ?, ?, ?, ?)",
      [name, email, hashedPassword, phone, address]
    );
    console.log("3");
    return Response.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ error: "Failed to create user" }, { status: 500 });
  }
}
