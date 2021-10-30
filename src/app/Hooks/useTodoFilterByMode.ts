import { TodoFilterType } from 'app/Types/Filters'
import { TodoListType } from 'app/Types/Todo'
import { useMemo } from 'react'

export default function useTodoFilterByMode(
    todos: TodoListType,
    mode: TodoFilterType
) {
    return useMemo(() => {
        if (mode === 'all') {
            return todos
        }
        return todos.filter((todo) =>
            mode === 'done' ? todo.checked : !todo.checked
        )
    }, [todos, mode])
}
