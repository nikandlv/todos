import { ITodoList } from 'app/Types/Todo'
import Todo from 'app/Components/Todo'
export interface ITodosProps {
    todos: ITodoList
}

export default function Todos({ todos }: ITodosProps) {
    return (
        <div>
            {todos.map((todo) => (
                <Todo key={todo.id} {...todo} />
            ))}
        </div>
    )
}
