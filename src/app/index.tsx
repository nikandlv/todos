import { useState } from 'react'
import ExampleTodos from './Data/Todos'
import useTodoFilterByMode from './Hooks/useTodoFilterByMode'
import TodoFilter from './Layouts/TodoFilter'
import TodoForm from './Layouts/TodoForm'
import Todos from './Layouts/Todos'
import Wrapper from './Layouts/Wrapper'
import { ITodoFilter } from './Types/Filters'

export default function App() {
    const [mode, setMode] = useState<ITodoFilter>('all')
    const [todos, setTodos] = useState(ExampleTodos)
    const filterdTodo = useTodoFilterByMode(todos, mode)
    return (
        <Wrapper>
            <TodoFilter mode={mode} setMode={setMode} />
            <Todos todos={todos} list={filterdTodo} setTodos={setTodos} />
            <TodoForm todos={filterdTodo} setTodos={setTodos} />
        </Wrapper>
    )
}
