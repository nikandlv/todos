import { ITodo } from 'app/Types/Todo'

export interface ITodoProps extends ITodo {}

export default function Todo({ title }: ITodoProps) {
    return (
        <div>
            <span>{title}</span>
        </div>
    )
}
