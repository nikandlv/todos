import { TodoListType } from 'app/Types/Todo'
import Todo from 'app/Components/Todo'
export interface TodosInterface {
    todos: TodoListType
}

export default function Todos({ todos }: TodosInterface) {
    return (
        <div>
            {todos.map((todo) => (
                <Todo key={todo.id} {...todo} />
            ))}
        </div>
    )
}
