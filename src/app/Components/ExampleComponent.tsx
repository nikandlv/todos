import * as React from 'react'

export interface IExampleComponentProps {
    text: string
}

export default function ExampleComponent(props: IExampleComponentProps) {
    return <div>{props.text}</div>
}
