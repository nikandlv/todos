export interface Todo {
    id: number
    title: string
    checked: boolean
}

export type TodoList = Array<Todo>
