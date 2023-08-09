const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint
// ------------------------------------------------- GET All Router ------------------------------------------------ //
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
// ------------------------------------------------- GET One by ID Router ------------------------------------------------ //
router.get("/:id", async (req, res) => {
  try {
    // find a single tag by its `id`
    // be sure to include its associated Product data
    const tagData = await Tag.findOne({
      where: { id: req.params.id },
      include: [{ model: Product }],
    });
    if (!tagData) {
      res.status(404).json({ message: "No tag found with this id!" });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// ------------------------------------------------- POST Router ------------------------------------------------ //
router.post("/", async (req, res) => {
  try {
    // create a new tag
    const newTag = await Tag.create(req.body);
    res.status(201).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});
// ------------------------------------------------- PUT Router ------------------------------------------------ //
router.put("/:id", async (req, res) => {
  try {
    // update a tag's name by its `id` value
    const updatedTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updatedTag);
  } catch (err) {
    res.status(400).json(err);
  }
});
// ------------------------------------------------- DELETE Router ------------------------------------------------ //
router.delete("/:id", async (req, res) => {
  try {
    // delete on tag by its `id` value
    const deletedTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deletedTag) {
      res.status(404).json({ message: "No tag found with this id!" });
      return;
    }
    res.status(200).json(deletedTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
