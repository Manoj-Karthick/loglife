import { getDataFromToken } from "@/app/(helpers)/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/(models)/userModel";
import { connect } from "@/app/(config)/dbConfig";

connect();

export async function GET(request) {
  try {
    const userId = await getDataFromToken(request);
    const user = await User.findOne({ _id: userId }).select("-password");
    return NextResponse.json({ message: "User Found", data: user });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
