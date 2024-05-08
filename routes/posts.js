import express from "express";

const router = express.Router();

let posts = [
  {
    id: 1,
    title: "Post One",
  },
  {
    id: 2,
    title: "Post Two",
  },
  {
    id: 3,
    title: "Post Three",
  },
  {
    id: 4,
    title: "Post Four",
  },
];

// get all posts
router.get("/", (req, res) => {
  //   console.log(req.query);
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  } else {
    res.status(200).json(posts);
  }
  //   res.json(posts);
});

// get a single post
router.get("/:id", (req, res) => {
  //   console.log(req.params);
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    res.status(404).json({ msg: `A post with the if of ${id} was not found` });
  } else {
    res.status(200).json(post);
  }
  //   res.status(200).json(posts.filter((post) => post.id === id));
});

// create new post
router.post("/", (req, res) => {
  //   console.log(req.body);
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };
  if (!newPost.title) {
    res.status(400).json({ msg: "Please include a title" });
  } else {
    posts.push(newPost);
    res.status(201).json(posts);
  }
  //   res.status(201).json(posts);
});

export default router;
