//  read existing notes from local storage
const getSavedNotes = function () {
  // check for existing notes data
  const notesJSON = localStorage.getItem("notes");

  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
};

// Save the notes to localStorage
const saveNotes = function (notes) {
  localStorage.getItem("notes", JSON.stringify(notes));
};

// generate the DOM structure for a note
const generateNoteDOM = function (noteData) {
  const noteEl = document.createElement("div");
  const textEl = document.createElement("span");
  const button = document.createElement("button");

  // Setup the note remove button
  button.textContent = "x";
  noteEl.appendChild(button);

  // Setup the note title text
  if (noteData.title.length > 0) {
    textEl.textContent = noteData.title;
  } else {
    textEl.textContent = "Unnamed note";
  }
  noteEl.appendChild(textEl);

  return noteEl;
};

// render application notes
const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach(function (note) {
    const noteEl = generateNoteDOM(note);
    document.querySelector("#notes").appendChild(noteEl);
  });
};
