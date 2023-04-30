import { useState } from "react";


function useToggle(defaultValue: boolean): any {
    const [value, setValue] = useState(defaultValue);

    function toggleValue() {
        setValue(!value);
    }

    return [
        value, toggleValue
    ]
}



export default useToggle;