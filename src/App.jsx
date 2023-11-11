import { useState } from 'react'
import './App.css'
import { NoteList } from './NoteList'

function App() { 
  const [notes, setNotes] = useState([{
    text: 'My first note.',
    color: 'blue',
    id: 1
  }])

  const addNote = (noteText) => {
    const newNotes = [...notes]
    newNotes.push({
      text: noteText.trim(),
      color: 'blue',
      id: crypto.randomUUID()
    })

    if(noteText.trim()) setNotes(newNotes)
  }

  const editTextNote = (noteId, noteText) => {
    if(!noteText.trim()) {
      setNotes([...notes])
      return;
    }
    const newNotes = [...notes].map(note => 
      note.id === noteId 
      ? ({
        text: noteText,
        color: 'blue',
        id: noteId
      }) 
      : note
    )

    setNotes(newNotes)
  }

  const deleteNote = (noteId) => {
    const newNotes = [...notes].filter(note => note.id !== noteId)
    setNotes(newNotes)
  }

  const addNoteFromInput = () => {
      addNote(noteText)
      setNoteText('')
  }

  const [ noteText, setNoteText] = useState('')
  const handleInputChange = (e) => setNoteText(e.target.value)
  const handleKeyUp = (e) => {
    if(e.key === 'Enter') {
      addNoteFromInput()
    }
  }

  return (
    <>
      <header>
        <input type="text" className='input' value={noteText} onChange={handleInputChange} onKeyUp={handleKeyUp} />
        <button className="btn" onClick={addNoteFromInput}>Agregar</button>
      </header>
      <main>
        <NoteList notes={notes} deleteNoteFunction={deleteNote} addNoteFunction={addNote} editTextNoteFunction={editTextNote}></NoteList>
      </main>
    </>
  )
}

export default App
