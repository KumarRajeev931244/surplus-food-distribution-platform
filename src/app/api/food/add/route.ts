import connectDb from "@/lib/db";
import foodModels from "@/models/food.models";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
  try {
    await connectDb();

    const body = await req.json();

    const {
      title,
      quantity,
      location,
      expiry,
    } = body;

    // Validation
    if (
      !title ||
      !quantity ||
      !location ||
      !expiry
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        {
          status: 400,
        }
      );
    }

    // Create Food
    const food = await foodModels.create({
      title,
      quantity,
      location,
      expiry,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Food added successfully",
        food,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to add food",
      },
      {
        status: 500,
      }
    );
  }
}