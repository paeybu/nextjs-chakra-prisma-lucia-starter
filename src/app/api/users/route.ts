import { hash } from "@node-rs/argon2";
import { generateIdFromEntropySize } from "lucia";
import prisma from "../../../../prisma/db";
export async function POST(req: Request) {
  const body = await req.json();
  const { username, password } = body;
  if (
    typeof username !== "string" ||
    username.length < 3 ||
    username.length > 31 ||
    !/^[a-z0-9_-]+$/.test(username)
  ) {
    return Response.json({ error: "Invalid username" });
  }
  if (
    typeof password !== "string" ||
    password.length < 6 ||
    password.length > 255
  ) {
    return Response.json({
      error: "Invalid password",
    });
  }
  const passwordHash = await hash(password, {
    // recommended minimum parameters
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });
  const userId = generateIdFromEntropySize(10); // 16 characters long
  const data = await prisma.user.create({
    data: {
      id: userId,
      password_hash: passwordHash,
      username,
    },
  });
  return Response.json({ data });
}
