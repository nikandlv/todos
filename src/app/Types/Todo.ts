export interface TodoType {
    id: number
    title: string
    checked: boolean
}

export type TodoListType = Array<TodoType>
