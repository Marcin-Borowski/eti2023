import { PrismaClient } from "@prisma/client";

export const load = async () => {
  let posts = [];

  const prisma = new PrismaClient();

  posts = await prisma.post.findMany(    )

  prisma.$disconnect()


  return {
    posts
  }
}
