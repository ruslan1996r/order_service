import { useState } from 'react';

export function useInput(initialVal: any) {
    const [value, setValue] = useState(initialVal)
    const onChange = (event: any) => {
        if (event.target.value < 0) {
            return
        }
        setValue(event.target.value)
    }
    const clear = () => setValue("")
    const changeVal = (val: any) => setValue(val)
    return {
        bind: {
            value,
            onChange
        },
        value,
        changeVal,
        clear
    }
}