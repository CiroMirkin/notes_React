import './Note.css'

export function Note({ children, noteId, colorClassName, deleteNote }) {
    const className = `note ${colorClassName}`;

    return (
        <li className={className}>
            <header>
                { children }
            </header>
            <footer>
                <button onClick={() => deleteNote(noteId)}>Eliminar</button>
            </footer>
        </li>
    )
}
