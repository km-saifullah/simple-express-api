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

// @desc  Get all Posts
// @route GET /api/posts
export const getPosts = (req, res, next) => {
  //   console.log(req.query);
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  } else {
    res.status(200).json(posts);
  }
  //   res.json(posts);
};

// @desc  Get single Posts
// @route GET /api/posts/:id
export const getPost = (req, res, next) => {
  //   console.log(req.params);
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    // res.status(404).json({ msg: `A post with the id of ${id} was not found` });
    const error = new Error(`A post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  } else {
    res.status(200).json(post);
  }
  //   res.status(200).json(posts.filter((post) => post.id === id));
};

// @desc  Create a Post
// @route POST /api/posts
export const createPost = (req, res, next) => {
  //   console.log(req.body);
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };
  if (!newPost.title) {
    // res.status(400).json({ msg: "Please include a title" });
    const error = new Error(`Please include a title`);
    error.status = 400;
    return next(error);
  } else {
    posts.push(newPost);
    res.status(201).json(posts);
  }
  //   res.status(201).json(posts);
};

// @desc  Update a Post
// @route PUT /api/posts/:id
export const updatePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    // res.status(404).json({ msg: `A post with the id of ${id} was not found` });
    const error = new Error(`A post with the id of ${id} was not found`);
    error.status = 400;
    return next(error);
  } else {
    post.title = req.body.title;
    res.status(200).json(posts);
  }
};

// @desc  Delete a Post
// @route DELETE /api/posts/:id
export const deletePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    // res.status(404).json({ msg: `A post with the id of ${id} was not found` });
    const error = new Error(`A post with the id of ${id} was not found`);
    error.status = 400;
    return next(error);
  } else {
    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
  }
};
