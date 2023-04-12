import { PrismaClient } from "@prisma/client";

export const load = async () => {
  let posts = [];

  const prisma = new PrismaClient();

  posts = await prisma.post.findMany(
    {
      where: {
        id: 1
      }
    }
  )

  prisma.$disconnect()


  return {
    posts
  }
}
