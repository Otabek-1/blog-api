const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController.js");

router.get("/blogs",blogController.getBlogs);
router.post("/blog", blogController.createBlog);

module.exports = router;