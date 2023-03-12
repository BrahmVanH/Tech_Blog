const router = require("express").Router();
const { Blog, User, Comment } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Comment,
          attributes: ["content", "user_id"],
        },
      ],
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render("all-blogs", {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Comment,
          attributes: ["content", "user_id"],
        },
      ],
    });

    const blog = blogData.get({ plain: true });

    res.render("blog-search", {
      ...blog,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//router.post("/post"); // Suggested route endpoint using in homepage hbs

module.exports = router;
