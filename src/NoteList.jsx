import { Note } from './Note'
import './NoteList.css'

export function NoteList({notes}) {
    return (
        <ul className='note-list'>
          {
            notes.map(({ color, text, id }) =>
              <Note key={id} colorClassName={color}>{text}</Note>
            )
          }
        </ul>
    )
}