import { useState } from 'react'
import ExampleTodos from './Data/Todos'
import TodoForm from './Layouts/TodoForm'
import Todos from './Layouts/Todos'
import Wrapper from './Layouts/Wrapper'

export default function App() {
    const [todos, setTodos] = useState(ExampleTodos)
    return (
        <Wrapper>
            <Todos todos={todos} />
            <TodoForm todos={todos} setTodos={setTodos} />
        </Wrapper>
    )
}
