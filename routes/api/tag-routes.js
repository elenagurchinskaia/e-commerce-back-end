const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  try {
    // find all tags
    // be sure to include its associated Product data
    const tagsData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    // find a single tag by its `id`
    // be sure to include its associated Product data
    const tagData = await Tag.findByPk({
      include: [{ model: Product }],
    });
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!'});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    // create a new tag

  }
});

router.put("/:id", async (req, res) => {
  try {
    // update a tag's name by its `id` value

  }
});

router.delete("/:id", async (req, res) => {
  try {
    // delete on tag by its `id` value

  }
});

module.exports = router;
