import * as React from 'react'

export interface WrapperInterface {
    children: React.ReactChild
}

export default function Wrapper(props: WrapperInterface) {
    return <>{props.children}</>
}
