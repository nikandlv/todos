import { TodoFilterType } from 'app/Types/Filters'

export interface TodoFilterInterface {
    mode: TodoFilterType
    setMode: (mode: TodoFilterType) => void
}

export default function TodoFilter({ mode, setMode }: TodoFilterInterface) {
    return (
        <div>
            <button onClick={() => setMode('all')}>
                all
                {mode === 'all' && '(active)'}
            </button>
            <button onClick={() => setMode('done')}>
                done
                {mode === 'done' && '(active)'}
            </button>
            <button onClick={() => setMode('todo')}>
                todo
                {mode === 'todo' && '(active)'}
            </button>
        </div>
    )
}
