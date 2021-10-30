import { ComponentStory, ComponentMeta } from '@storybook/react'
import Todo from '../app/Components/Todo'

export default {
    title: 'Todo Item',
    component: Todo,
    argTypes: {
        id: {
            control: { type: 'number' },
        },
        title: {
            control: { type: 'text' },
        },
        checked: {
            control: { type: 'boolean' },
        },
    },
} as ComponentMeta<typeof Todo>

const Template: ComponentStory<typeof Todo> = (args) => <Todo {...args} />

export const Checked = Template.bind({})
Checked.args = {
    id: 1,
    title: 'Hello !',
    checked: true,
}

export const UnChecked = Template.bind({})
UnChecked.args = {
    id: 1,
    title: 'Hello !',
    checked: false,
}
