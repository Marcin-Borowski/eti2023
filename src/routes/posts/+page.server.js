import { PrismaClient } from "@prisma/client";
import slugify from "slugify";

export const load = async () => {
  let posts = [];

  const prisma = new PrismaClient();
  posts = await prisma.post.findMany()
  prisma.$disconnect()

  return {
    posts
  }
}

export const actions = {
  'create': async ({ request }) => {
    const data = await request.formData();

    const title = data.get('title');
    const abstract = data.get('abstract');
    const content = data.get('content');

    const prisma = new PrismaClient();
    await prisma.post.create({
      data: {
        title,
        slug: slugify(title, { lower: true, locale: 'pl' }),
        abstract,
        content
      }
    })

    const posts = await prisma.post.findMany()
    prisma.$disconnect()

    return {posts}
  }


};
