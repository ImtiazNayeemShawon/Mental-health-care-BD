import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllPosts = async () => {
  const allPosts = await prisma.post.findMany();
  return allPosts;
};

export const createPost = async (posts) => {
  const newPost = await prisma.post.create({
    data: posts,
  });
  return newPost;
};

export const deletePost = async (id) => {
  await prisma.post.delete({
    where: {
      id: id,
    },
  });
};
