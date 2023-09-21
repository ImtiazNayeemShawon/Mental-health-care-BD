import { createPost, deletePost, getAllPosts } from "@/prisma/posts";

export default async function handler(req, res) {
  try {
    // Get api
    if (req.method == "GET") {
      const allPosts = getAllPosts();
      return res.status(200).json(allPosts);

      // Add api
    } else if (req.method == "POST") {
      const post = req.body;
      const newPost = await createPost(post);
      return res.status(201).json(newPost);

      // delete api
    } else if (req.method == "DELETE") {
      const { id } = req.query;
      await deletePost(id);
      return res.status(200).json({ message: "deleted" });
    }
  } catch (error) {
    return res.json(error);
  }
}
