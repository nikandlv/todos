import { ComponentStory, ComponentMeta } from '@storybook/react'
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
}

export const EmptyList = Template.bind({})
EmptyList.args = {
    todos: [],
}
