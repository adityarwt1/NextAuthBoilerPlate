import User from "@/models/User";
import connectDB from "@/lib/connectDB";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const { username, email, password } = await req.json();
  await connectDB();

  const exists = await User.findOne({ email });
  if (exists) {
    return new Response(JSON.stringify({ error: "Email already registered" }), { status: 400 });
  }

  const hashed = await bcrypt.hash(password, 10);
  const newUser = new User({ username, email, password: hashed });
  await newUser.save();

  return new Response(JSON.stringify({ message: "Signup successful" }), { status: 201 });
}
