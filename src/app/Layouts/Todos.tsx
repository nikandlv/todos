import { TodoListType } from 'app/Types/Todo'
import Todo from 'app/Components/Todo'
import { useCallback } from 'react'
export interface TodosInterface {
    todos: TodoListType
    setTodos: (todos: TodoListType) => void
}

export default function Todos({ todos, setTodos }: TodosInterface) {
    const checkTodo = useCallback(
        (id: number, checked: boolean) =>
            setTodos(
                todos.map((todo) => {
                    if (todo.id === id) {
                        return {
                            ...todo,
                            checked,
                        }
                    }
                    return todo
                })
            ),
        [todos, setTodos]
    )

    const deleteTodo = useCallback(
        (id: number) => setTodos(todos.filter((todo) => todo.id !== id)),
        [todos, setTodos]
    )

    return (
        <div>
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    onChange={checkTodo}
                    onDelete={deleteTodo}
                    {...todo}
                />
            ))}
        </div>
    )
}
