import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TodoListType } from 'app/Types/Todo'
import ExampleTodos from '../app/Data/Todos'
import Todos from '../app/Layouts/Todos'

export default {
    title: 'Todo List',
    component: Todos,
} as ComponentMeta<typeof Todos>

const Template: ComponentStory<typeof Todos> = (args) => <Todos {...args} />

export const FilledList = Template.bind({})
FilledList.args = {
    todos: ExampleTodos,
    list: ExampleTodos,
}

export const EmptyList = Template.bind({})
EmptyList.args = {
    todos: [],
    list: [],
    setTodos: (_: TodoListType) => {},
}
