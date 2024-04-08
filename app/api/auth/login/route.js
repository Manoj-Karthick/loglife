import { connect } from "@/app/(config)/dbConfig";
import User from "@/app/(models)/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    //check to see if user already exist
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "Invalid user", status: 500 });
    }
    //check if password is correct
    const validatePassword = await bcryptjs.compare(password, user.password);

    if (!validatePassword) {
      return NextResponse.json({ error: "Invalid password", status: 500 });
    }

    //create token data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    //create token
    const token = await jwt.sign(tokenData, process.env.JWT_TOKEN_SECRET, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "Loggedin user successfully",
      status: 200,
      data: {
        username: tokenData.username,
        email: tokenData.email,
        token: token,
      },
    });

    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
