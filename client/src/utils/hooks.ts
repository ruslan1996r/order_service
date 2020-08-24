import { useState } from 'react';

export function useInput(initialVal: any) {
    const [value, setValue] = useState(initialVal)
    const onChange = (event: any) => {
        setValue(event.target.value)
    }
    const clear = () => setValue("")
    return {
        bind: {
            value,
            onChange
        },
        value,
        clear
    }
}