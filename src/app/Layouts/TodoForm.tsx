import { TodoListType } from 'app/Types/Todo'
import * as React from 'react'

export interface TodoFormInterface {
    todos: TodoListType
    setTodos: (todos: TodoListType) => void
}

export default function TodoForm({ todos, setTodos }: TodoFormInterface) {
    const titleInputRef = React.useRef<HTMLInputElement | null>(null)
    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!titleInputRef.current) {
            return
        }
        const title = titleInputRef.current.value
        setTodos([
            ...todos,
            {
                id: Math.random(),
                title,
                checked: false,
            },
        ])
        // clear the input
        titleInputRef.current.value = ''
    }
    return (
        <form onSubmit={submit}>
            <input
                ref={titleInputRef}
                name="title"
                placeholder="Title"
                required
            />
            <button type="submit">Add todo</button>
        </form>
    )
}
