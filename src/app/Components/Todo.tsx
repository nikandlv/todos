import { TodoType } from 'app/Types/Todo'

export interface TodoInterface extends TodoType {}

export default function Todo({ title }: TodoInterface) {
    return (
        <div>
            <span>{title}</span>
        </div>
    )
}
