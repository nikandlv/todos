import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ITodoFilter } from 'app/Types/Filters'
import TodoFilter from '../app/Layouts/TodoFilter'

export default {
    title: 'Todo Filter',
    component: TodoFilter,
} as ComponentMeta<typeof TodoFilter>

const Template: ComponentStory<typeof TodoFilter> = (args) => (
    <TodoFilter {...args} />
)

export const All = Template.bind({})
All.args = {
    mode: 'all',
    setMode: (_: ITodoFilter) => {},
}

export const Done = Template.bind({})
Done.args = {
    mode: 'done',
    setMode: (_: ITodoFilter) => {},
}

export const Todo = Template.bind({})
Todo.args = {
    mode: 'todo',
    setMode: (_: ITodoFilter) => {},
}
