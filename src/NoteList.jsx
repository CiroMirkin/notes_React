import { Note } from './Note'
import './NoteList.css'

export function NoteList({ notes, deleteNoteFunction, addNoteFunction}) {
    return (
        <ul className='note-list'>
          {
            notes.map(({ color, text, id }) =>
              <Note key={id} noteId={id} deleteNote={deleteNoteFunction} addNote={addNoteFunction} colorClassName={color}>{text}</Note>
            )
          }
        </ul>
    )
}