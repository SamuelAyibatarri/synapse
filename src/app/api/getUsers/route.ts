import prisma from "@/lib/db";

export async function GET() {
  const users = await prisma.user.findMany();
  console.log("Users: ", users)
  return new Response(JSON.stringify(users));
}