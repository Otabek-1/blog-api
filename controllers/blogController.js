exports.createBlog = (req, res) => {
  const { title, content } = req.body;
  res.status(201).json({ message: `Blog created successfully!` });
};

exports.getBlogs = (req, res) => {
  let blogs = [
    { title: "blog1", content: "lorem ipsum dolor sit amet." },
    { title: "blog2", content: "lorem ipsum dolor sit amet." },
  ];
  res.status(200).send(blogs);
};
