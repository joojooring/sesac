import { useState } from "react";

// toggle기능은 여러군데서 자주 쓰임(toggle기능이라는게 true일 경우 false로 / false일 경우 true로 해서 처리)

export default function useToggle(initialValue) {
    // initialValue에 false라고 하면 false가 되고 true가 되면 true가 됨
    const [value, setValue] = useState(initialValue);
    const toggle = () => {
        setValue(!value);
    };

    return [value, toggle];

}