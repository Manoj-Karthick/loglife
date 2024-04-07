import { connect } from "@/app/(config)/dbConfig";
import User from "@/app/(models)/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    //check to see if user already exist
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json({ error: "User already exists", status: 500 });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "User created in database",
      status: 201,
      savedUser,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
