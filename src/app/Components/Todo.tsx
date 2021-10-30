import { TodoType } from 'app/Types/Todo'

export interface TodoInterface extends TodoType {
    onChange: (id: number, checked: boolean) => void
}

export default function Todo({ id, title, checked, onChange }: TodoInterface) {
    return (
        <div>
            <input
                type="checkbox"
                checked={checked}
                onClick={() => onChange(id, !checked)}
            />
            <span>{title}</span>
        </div>
    )
}
