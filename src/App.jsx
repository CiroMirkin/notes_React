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
      text: noteText,
      color: 'blue',
      id: crypto.randomUUID()
    })

    setNotes(newNotes)
  }
  const deleteNote = (noteId) => {
    let newNotes = [...notes]
    newNotes = newNotes.filter(note => note.id !== noteId)
    setNotes(newNotes)
  }

  const [ noteText, setNoteText] = useState('')
  const handleInputChange = (e) => setNoteText(e.target.value)
  const handleKeyUp = (e) => {
    if(e.key === 'Enter') {
      addNote(noteText)
      setNoteText('')
    }
  }

  return (
    <>
      <header>
        <input type="text" className='input' value={noteText} onChange={handleInputChange} onKeyUp={handleKeyUp} />
      </header>
      <main>
        <NoteList notes={notes} deleteNoteFunction={deleteNote} addNoteFunction={addNote}></NoteList>
      </main>
    </>
  )
}

export default App
