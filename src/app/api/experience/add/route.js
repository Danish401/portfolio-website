import connectToDB from "@/database";
import Experience from "@/models/Experience";

import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const extractData = await req.json();
    const saveData = await Experience.create(extractData);
    if (saveData) {
      return NextResponse.json({
        success: true,
        message: "Data saved Successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: " something went wrong",
      });
    }
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: " something went wrong",
    });
  }
}
