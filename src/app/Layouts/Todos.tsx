import { TodoListType } from 'app/Types/Todo'
import Todo from 'app/Components/Todo'
import { useCallback } from 'react'
export interface ITodosProps {
    todos: TodoListType
    setTodos: (todos: TodoListType) => void
}

export default function Todos({ todos, setTodos }: ITodosProps) {
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

    return (
        <div>
            {todos.map((todo) => (
                <Todo onChange={checkTodo} key={todo.id} {...todo} />
            ))}
        </div>
    )
}
