import express from "express";
const router = express.Router();
import "../models/Note.js";
import Note from "../models/Note.js";
import helpers from '../helpers/auth.js'

/* routes */

/* GET */
router.get("/notes/add", /* helpers.isAuthenticated, */ (req, res) => {
  res.render("notes/new-note");
});

/* GET ALL NOTES */
router.get("/notes",/* helpers.isAuthenticated, */ async (req, res) => {
  const notes = await Note.find({user: req.user.id/* trae solo las notas de ese user */}).lean().sort({date: 'desc'});
  res.render('notes/all-notes', {
    notes /* le esta pasando los datos .hbs a esa plantilla, despues la renderiza */
  })
});

/* POST */
router.post("/notes/new-note", /* helpers.isAuthenticated, */ async (req, res) => {
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
    newNote.user = req.user.id/* enlazando con las notas */
    await newNote.save();
    req.flash('success_msg', 'note added successfully!')
    res.redirect("/notes");
  }
});

/* PUT */

router.get('/notes/edit/:id',/* helpers.isAuthenticated, */ async(req, res) => {
  const note = await Note.findById(req.params.id)
  res.render('notes/edit-notes', {
      note
  })
})

router.put('/notes/edit-note/:id', /* helpers.isAuthenticated, */ async(req, res) => {
  const {title, description} = req.body
  await Note.findByIdAndUpdate(req.params.id,{
    title, description
  })
  req.flash('success_msg', 'note updated successfully!')
  res.redirect('/notes') 
})

/* DELETE */
router.delete('/notes/delete/:id', /* helpers.isAuthenticated, */ async(req, res) => {
  await Note.findByIdAndDelete(req.params.id)
  req.flash('success_msg', 'note deleted successfully!')
  res.redirect('/notes')
})


export default router;
