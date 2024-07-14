import connectToDB from "@/database";
import About from "@/models/About";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PUT(req) {
  try {
    await connectToDB();
    const extractData = await res.json();
    const {
      _id,
      aboutMe,
      noOfProjects,
      yearofexperience,
      noofclients,
      skills,
    } = extractData;
    const updateData = await About.findOneAndUpdate(
      {
        _id: _id,
      },
      { noOfProjects, yearofexperience, noofclients, skills },
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
