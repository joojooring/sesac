import {useForm} from "react-hook-form"
export default function Signup () {

    const {
        register,
        handleSubmit,
        formState: {errors},
        watch
    } = useForm();

    // handleSubmit(onValid, onInvalid)
    // onValid : 폼을 정상적으로 제출 할 수 있는 상태일때 ,실행시킬 함수
    // onInvalid : 폼을 제출 할 수 없을 때 실행시킬 함수

    const onValid = (data) => {
        console.log("성공:", data)
    }
 
    const onInvalid = (error) => {
        console.log("실패:", error)
    }

    return(
        <>
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <input 
            type="text" 
            placeholder="이름"
            {...register("name",
            {required: "이름은 필수 항목입니다."}
            )}
            >
        </input>
        {errors.name?.message}
        <br/>


        <input 
            type="text" 
            placeholder="나이"
            {...register("age",
                {min: {
                    value:1,
                    message:"0이상의 숫자만 입력 가능합니다."
                    }
                }
            )}
            >
        </input>
        {errors.age?.message}
        <br/>
        

        <button type="submit">제출</button>
        </form>
        </>
    )
};