import express from "express";
import {
  getPost,
  getPosts,
  updatePost,
  deletePost,
  createPOst,
} from "../controllers/postController.js";
const router = express.Router();

// Get all posts
router.get("/", getPosts);

// Get single post
router.get("/:id", getPost);

// Create new post
router.post("/", createPOst);

// Update Post

router.put("/:id", updatePost);

// Delete post

router.delete("/:id", deletePost);

export default router;
