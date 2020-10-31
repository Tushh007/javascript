
'use strict'

const noteTitle = document.querySelector("#note-title")
const noteBody = document.querySelector("#note-body")
const dateElement = document.querySelector("#last-edited")
const removeButton = document.querySelector("#remove-note")

const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteId)

if (!note) {
    location.assign('/index.html')
}

// setting up title and body fields
noteTitle.value = note.title
noteBody.value = note.body
dateElement.textContent = generateLastEdited(note.updatedAt)

// note title
noteTitle.addEventListener("input", (e) => {
    const timestamp = moment().valueOf()
    note.title = e.target.value
    note.updatedAt = timestamp
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

// input body
noteBody.addEventListener("input", (e) => {
    const timestamp = moment().valueOf()
    note.body = e.target.value
    note.updatedAt = timestamp
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

// remove note button
removeButton.addEventListener("click", (e) => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign("/index.html")
})

window.addEventListener("storage", (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find((note) => note.id = noteId)
        
        if (!note) {
            location.assign('/index.html')
        }
        
        // setting up title and body fields
        noteTitle.value = note.title
        noteBody.value = note.body
        dateElement.textContent = `Last edited ${moment(note.unpdatedAt).fromNow()}`
    }
})