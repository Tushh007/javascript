
const noteTitle = document.querySelector("#note-title")
const noteBody = document.querySelector("#note-body")
const removeButton = document.querySelector("#remove-note")

const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function (note) {
    return note.id === noteId
})

if (note === undefined) {
    location.assign('/index.html')
}

// setting up title and body fields
noteTitle.value = note.title
noteBody.value = note.body

// note title
noteTitle.addEventListener("input", function (e) {
    note.title = e.target.value
    saveNotes(notes)
})

// input body
noteBody.addEventListener("input", function (e) {
    note.body = e.target.value
    saveNotes(notes)
})

// remove note button
removeButton.addEventListener("click", function (e) {
    removeNote(note.id)
    saveNotes(notes)
    location.assign("/index.html")
})

window.addEventListener("storage", function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find(function (note) {
            return note.id = noteId
        })
        
        if (note === undefined) {
            location.assign('/index.html')
        }
        
        // setting up title and body fields
        noteTitle.value = note.title
        noteBody.value = note.body
    }
})