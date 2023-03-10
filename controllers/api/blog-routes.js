const router = require("express").Router();
const { Blog } = require("../../models");

router.get("/", async(req, res) => {
    try {
        const blogData = await Blog.findAll
    }
    }
});
