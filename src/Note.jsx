import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './Note.css'

export function Note({ children, noteId, colorClassName, deleteNote, editNote }) {
    const className = `note ${colorClassName}`;
    const [ noteText, setNoteText ] = useState(children);
    const [ editMode, setEditMode ] = useState(false);

    const toggleEditMode = () => {
        editMode ? setEditMode(false) : setEditMode(true)
    }

    const changeNoteTextFromInput = () => {
        toggleEditMode()
        editNote(noteId, noteText)
    }
    
    const handleInputChange = (e) => setNoteText(e.target.value)
    const handleKeyUp = (e) => {
        if(e.key === 'Enter') {
            changeNoteTextFromInput()
        }
    }


    return (
        <li className={className}>
            <header className='note-header'>
                { 
                    editMode 
                    ? <TextareaAutosize className='textarea' value={noteText} onChange={handleInputChange} onKeyUp={handleKeyUp} />
                    : <p className="note-text">{ noteText }</p>
                }
            </header>
            <footer>
                <button className='btn' onClick={() => deleteNote(noteId)}>Eliminar</button>
                <button className='btn' onClick={changeNoteTextFromInput}>Editar</button> 
            </footer>
        </li>
    )
}
