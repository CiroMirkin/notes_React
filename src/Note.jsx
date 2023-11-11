import './Note.css'

export function Note({ children, colorClassName }) {
    const className = `note ${colorClassName}`;

    return (
        <li className={className}>
            { children }
        </li>
    )
}
