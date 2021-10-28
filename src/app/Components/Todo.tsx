import { ITodo } from 'app/Types/Todo'

export interface ITodoProps extends ITodo {
    onChange?: (id: number, checked: boolean) => void
    onDelete?: (id: number) => void
}

export default function Todo({
    id,
    title,
    checked,
    onChange,
    onDelete,
}: ITodoProps) {
    return (
        <div>
            <input
                type="checkbox"
                checked={checked}
                onClick={() => onChange && onChange(id, !checked)}
            />
            <span>{title}</span>
            <button onClick={() => onDelete && onDelete(id)}>x</button>
            <br />
            <br />
        </div>
    )
}
