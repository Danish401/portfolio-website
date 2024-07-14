import connectToDB from "@/database";
import Home from "@/models/Home";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PUT(req) {
  try {
    await connectToDB();
    const extractData = await res.json();
    const { _id, heading, summary } = extractData;
    const updateData = await Home.findOneAndUpdate(
      {
        _id: _id,
      },
      { heading, summary },
      { new: true }
    );

    if (updateData) {
      return NextResponse.json({
        success: true,
        message: "update successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "something went wrong",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "something went wrong",
    });
  }
}
