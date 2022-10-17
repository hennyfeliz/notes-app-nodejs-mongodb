import express from "express";
const router = express.Router();
import "../models/Note.js";
import Note from "../models/Note.js";

/* routes */

/* GET */
router.get("/notes/add", (req, res) => {
  res.render("notes/new-note");
});

/* GET ALL NOTES */
router.get("/notes", async (req, res) => {
  const notes = await Note.find().lean().sort({date: 'desc'});
  res.render('notes/all-notes', {
    notes /* le esta pasando los datos .hbs a esa plantilla, despues la renderiza */
  })
});

/* POST */
router.post("/notes/new-note", async (req, res) => {
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
    const newNote = new Note({
      title,
      description,
    });
    await newNote.save();
    res.redirect("/notes");
  }
});

/* PUT */

router.get('/notes/edit/:id', async(req, res) => {
  const note = await Note.findById(req.params.id)
  res.render('notes/edit-notes', {
      note
  })
})

router.put('/notes/edit-note/:id', async(req, res) => {
  const {title, description} = req.body
  await Note.findByIdAndUpdate(req.params.id,{
    title, description
  })
  res.redirect('/notes') 
})


/* DELETE */

router.delete('/notes/delete/:id', (req, res) => {
  
})


export default router;
