import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './Note.css'

export function Note({ children, noteId, colorClassName, deleteNote, editNote }) {
    const className = `note ${colorClassName}`;
    const [ noteText, setNoteText ] = useState(children);
    const [ editMode, setEditMode ] = useState(false);
    const [ newNoteText, setNewNoteText ] = useState(children);

    const toggleEditMode = () => {
        editMode ? setEditMode(false) : setEditMode(true)
    }

    const changeNoteText = () => {
        if(!!newNoteText.trim()) {
            editNote(noteId, newNoteText)
            setNoteText(newNoteText)
        } 
        else {
            setNewNoteText(noteText)
        }
        toggleEditMode()
    }

    const handleInputChange = (e) => setNewNoteText(e.target.value)
    const handleKeyUp = (e) => {
        if(e.key === 'Enter') {
            setNewNoteText(newNoteText.trim())
            changeNoteText()
        }
    }


    return (
        <li className={className}>
            <header className='note-header'>
                { 
                    editMode 
                    ? <TextareaAutosize className='textarea' value={newNoteText} onChange={handleInputChange} onKeyUp={handleKeyUp} />
                    : <p className="note-text">{ noteText }</p>
                }
            </header>
            <footer>
                <button className='btn' onClick={() => deleteNote(noteId)}>Eliminar</button>
                <button className='btn' onClick={changeNoteText}>Editar</button> 
            </footer>
        </li>
    )
}
