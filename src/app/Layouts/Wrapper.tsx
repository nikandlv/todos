import * as React from 'react'

export interface IWrapperProps {
    children: React.ReactChild
}

export default function Wrapper(props: IWrapperProps) {
    return <>{props.children}</>
}
