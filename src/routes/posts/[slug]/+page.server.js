import { PrismaClient } from "@prisma/client";

export const load = async ({ params }) => {
  
  const prisma = new PrismaClient()

  const post = await prisma.post.findFirst({
    where: {
      slug: params.slug
    }
  })

  await prisma.$disconnect();

  return { post }
}