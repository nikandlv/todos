import { ITodo } from 'app/Types/Todo'

export interface ITodoProps extends ITodo {
    onChange: (id: number, checked: boolean) => void
}

export default function Todo({ id, title, checked, onChange }: ITodoProps) {
    return (
        <div>
            <input
                type="checkbox"
                checked={checked}
                onClick={() => onChange(id, !checked)}
            />
            <span>{title}</span>
            <br />
            <br />
        </div>
    )
}
