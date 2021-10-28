import { ComponentStory, ComponentMeta } from '@storybook/react'
import ExampleComponent from '../app/Components/ExampleComponent'

export default {
    title: 'Example/Button',
    component: ExampleComponent,
    argTypes: {
        text: { control: 'text' },
    },
} as ComponentMeta<typeof ExampleComponent>

const Template: ComponentStory<typeof ExampleComponent> = (args) => (
    <ExampleComponent {...args} />
)

export const Hello = Template.bind({})
Hello.args = {
    text: 'Hello',
}

export const Bye = Template.bind({})
Bye.args = {
    text: 'Bye',
}
