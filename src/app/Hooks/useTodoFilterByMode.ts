import { ITodoFilter } from 'app/Types/Filters'
import { ITodoList } from 'app/Types/Todo'
import { useMemo } from 'react'

export default function useTodoFilterByMode(
    todos: ITodoList,
    mode: ITodoFilter
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
