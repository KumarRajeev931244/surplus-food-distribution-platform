import connectDb from "@/lib/db";
import foodModels from "@/models/food.models";
import { NextRequest, NextResponse } from "next/server";


foodModels

export async function GET(req: NextRequest) {
  try {
    await connectDb();

    // Total available food
    const availableDonations =
      await foodModels.countDocuments({
        status: "available",
      });

    // Picked donations
    const pickedDonations =
      await foodModels.countDocuments({
        status: "picked",
      });

    // Recent available donations
    const recentDonations =
      await foodModels.find({
        status: "available",
      })
        .sort({ createdAt: -1 })
        .limit(10);

    return NextResponse.json({
      success: true,

      stats: {
        availableDonations,
        pickedDonations,
      },

      recentDonations,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to load NGO dashboard",
      },
      {
        status: 500,
      }
    );
  }
}