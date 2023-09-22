const express = require("express");
const app = express();
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// middleware
app.use(express.json());
app.use(cors());

// get Posts
app.get("/", async (req, res) => {
  const allpost = await prisma.post.findMany();
  res.send(allpost);
});

// get single Posts
app.get("/post/:id", async (req, res) => {
  const { id } = req.params;
  const singlepost = await prisma.post.findUnique({
    where: {
      id: id,
    },
  });
  res.send(singlepost);
});

// update single Posts
app.put("/post", async (req, res) => {
  const UpdatedData = await req.body;
  const updatepost = await prisma.post.update({
    where: {
      id: UpdatedData?.id,
    },
    data: {
      title: UpdatedData?.title,
      description: UpdatedData?.description,
      image: UpdatedData?.image,
    },
  });
  res.send(updatepost);
});

// create post
app.post("/", async (req, res) => {
  const newpost = await prisma.post.create({ data: req.body });
  res.send(newpost);
});

// Delete Post
app.delete("/post/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.post.delete({
    where: {
      id: id,
    },
  });
  res.send({ message: "Post Deleted" });
});

// run app
app.listen(4000, () => {
  console.log("server is running");
});
