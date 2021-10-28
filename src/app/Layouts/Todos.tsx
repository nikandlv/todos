import { ITodoList } from 'app/Types/Todo'
import Todo from 'app/Components/Todo'
import { useCallback } from 'react'
export interface ITodosProps {
    todos: ITodoList
    list: ITodoList
    setTodos: (todos: ITodoList) => void
}

export default function Todos({ todos, list, setTodos }: ITodosProps) {
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
            {list.map((todo) => (
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
