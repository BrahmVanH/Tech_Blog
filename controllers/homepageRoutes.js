const router = require("express").Router();
const { User, Blog, Comment } = require("../models");

router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [
        {
          model: Comment,
          attributes: ["content", "user_id"],
        },
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    const fiveBlogs = blogs.slice(0, 6);

    res.render('homepage', {
      ...fiveBlogs,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', async (req, res) => {
  try {
    const userBlogData = await Blog.findAll({
     /* where: {
        user_id: req.session.user_id==
      }, */
      include: [{
        model: Comment,
        attributes: ["content", "user_id"],
      }],
    });

    const userBlogs = userBlogData.map((userBlog) => userBlog.get({ plain: true }));

    res.render('dashboard', {
      ...userBlogs,
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
