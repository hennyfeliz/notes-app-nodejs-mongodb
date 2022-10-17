import express from "express";
const router = express.Router();

/* routes */

/* GET */
router.get("/notes/add", (req, res) => {
  res.render("notes/new-note");
});

/* POST */
router.post("/notes/new-note", (req, res) => {
  const { title, description } = req.body;
  const errors = [];
  if (!title) errors.push({ text: "please, insert a title!" });
  if (!description) errors.push({ text: "please, insert a description" });
  if (errors.length > 0) {
    res.render("notes/new-note", {
      errors,
      title,
      description,
    });
  } else {
    res.send("ok");
  }
});

/* PUT */

/* DELETE */
export default router;
