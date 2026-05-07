import connectDb from "@/lib/db";
import Food from "@/models/food.models";
import User from "@/models/user.models";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
  try {
    await connectDb();

    const totalDonations = await Food.countDocuments();

    const ngoPartners = await User.countDocuments({
      role: "ngo",
    });

    const mealsDistributed = await Food.countDocuments({
      status: "picked",
    });

    const pendingRequests = await Food.countDocuments({
      status: "available",
    });

    const recentDonations = await Food.find()
      .sort({ createdAt: -1 })
      .limit(5);

    // =====================
    // DYNAMIC CHART DATA
    // =====================

    const foods = await Food.find();

    const days = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ];

    const weeklyMap: Record<string, number> = {
      Sun: 0,
      Mon: 0,
      Tue: 0,
      Wed: 0,
      Thu: 0,
      Fri: 0,
      Sat: 0,
    };

    foods.forEach((food) => {
      const date = new Date(food.createdAt);

      const day = days[date.getDay()];

      weeklyMap[day] += 1;
    });

    const weeklyData = days.map((day) => ({
      name: day,
      donations: weeklyMap[day],
    }));

    return NextResponse.json({
      success: true,

      stats: {
        totalDonations,
        ngoPartners,
        mealsDistributed,
        pendingRequests,
      },

      recentDonations,

      weeklyData,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}