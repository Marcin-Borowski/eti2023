import { PrismaClient } from "@prisma/client";

export const GET = async () => { 
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany()
  await prisma.$disconnect()

  return new Response(JSON.stringify(posts))
}


// export const POST = async () => { }
// export const PUT = async () => { }

export const DELETE = async ({ request }) => { 
  const data = await request.json();
  // const data = await request.formData().get('slug');

  const prisma = new PrismaClient();

  const result = await prisma.post.delete({
    where: {
      slug: data.slug
    }
  })

  const posts = await prisma.post.findMany()
  await prisma.$disconnect()

  return new Response(JSON.stringify(posts))
}
