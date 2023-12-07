import {useState} from "react";

export default function usePrac(initialValue) {
    const [value, setValue] = useState(initialValue);
    const toggle = () => {
        setValue(!value);
    }
    // 리턴값으로 value, toggle를 반환해서 밖에서 쓸 수 있게끔 함
    // 첫번재 요소는 value상태고,
    // 두번째 요소는 toggle 함수임
    return [value, toggle];
};