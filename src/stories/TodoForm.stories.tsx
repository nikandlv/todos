import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TodoListType } from 'app/Types/Todo'
import TodoForm from '../app/Layouts/TodoForm'

export default {
    title: 'Todo Form',
    component: TodoForm,
} as ComponentMeta<typeof TodoForm>

const Template: ComponentStory<typeof TodoForm> = (args) => (
    <TodoForm {...args} />
)

export const SimpleForm = Template.bind({})
SimpleForm.args = {
    todos: [],
    setTodos: (_: TodoListType) => {},
}
