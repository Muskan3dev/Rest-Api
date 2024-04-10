const express = require("express");
const { check, body } = require("express-validator");

const router = express.Router();

const feedController = require("../controllers/feed");

//GET /feed/posts
router.get("/posts", feedController.getPosts);

//Post /feed/post
router.post(
  "/post",
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedController.createPost
);

router.get("/post/:postId", feedController.getPost);

module.exports = router;
