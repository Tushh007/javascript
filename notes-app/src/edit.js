import { initializeEditPage, generateLastEdited } from "./views";
import { updateNote, removeNote } from "./notes";

const noteTitle = document.querySelector("#note-title");
const noteBody = document.querySelector("#note-body");
const dateElement = document.querySelector("#last-edited");
const removeButton = document.querySelector("#remove-note");
const noteId = location.hash.substring(1);

initializeEditPage(noteId);

// note title
noteTitle.addEventListener("input", (e) => {
  const note = updateNote(noteId, {
    title: e.target.value,
  });
  dateElement.textContent = generateLastEdited(note.updatedAt);
});

// input body
noteBody.addEventListener("input", (e) => {
  const note = updateNote(noteId, {
    body: e.target.value,
  });
  dateElement.textContent = generateLastEdited(note.updatedAt);
});

// remove note button
removeButton.addEventListener("click", (e) => {
  removeNote(noteId);
  location.assign("/index.html");
});

window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    initializeEditPage(noteId);
  }
});
