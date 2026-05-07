import connectDb from "@/lib/db";
import foodModels from "@/models/food.models";
import { models } from "mongoose";
import { NextRequest, NextResponse } from "next/server";




export async function GET(req: NextRequest) {
  try {
    await connectDb();

    // Replace later with logged-in user ID
    const donorId = "demo-user-id";

    const donations = await foodModels.find({
      createdBy: donorId,
    }).sort({
      createdAt: -1,
    });

    const total =
      await foodModels.countDocuments({
        createdBy: donorId,
      });

    const available =
      await foodModels.countDocuments({
        createdBy: donorId,
        status: "available",
      });

    const picked =
      await foodModels.countDocuments({
        createdBy: donorId,
        status: "picked",
      });

    return NextResponse.json({
      success: true,

      donations,

      stats: {
        total,
        available,
        picked,
      },
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to load donor dashboard",
      },
      {
        status: 500,
      }
    );
  }
}