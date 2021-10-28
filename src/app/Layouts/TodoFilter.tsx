import { ITodoFilter } from 'app/Types/Filters'

export interface ITodoFilterProps {
    mode: ITodoFilter
    setMode: (mode: ITodoFilter) => void
}

export default function TodoFilter({ mode, setMode }: ITodoFilterProps) {
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
