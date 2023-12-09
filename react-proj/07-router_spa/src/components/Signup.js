import {useForm} from "react-hook-form"

export default function Signup() {
    const {
        register, 
        handleSubmit, 
        formState: {errors},
        watch
    } = useForm();


    const onValid = (data) => {
        console.log("성공", data)
    }

    const onInvalid = (error) => {
        console.log("실패",error)
    }

    const genderRegister = register("gender", {required: "성별은 필수값입니다."})

    console.log(watch("ID"));

    return(
        <>
        <h4>리액트 hook form 테스트</h4>
        
        {/* handleSubmit(onValid [, onInvalid)] */}
        {/* onValid : 폼을 정상적으로 제출할 수 있는 상태일 때, 실행시킬 함수 */}
        {/* onInvalid : (선택값) 폼을 제출 할 수 없을 때 실행시킬 함수 */}
        <form onSubmit={handleSubmit(onValid,onInvalid)}>
        <input 
            type="text" 
            placeholder="아이디" 
            {...register("ID", 
            {required: "아이디는 필수 값입니다."}
            )}>
            </input>
            {/* {error.Id && error.ID.message} */}
            {errors.ID?.message}
            <br />


            <input 
            type="text" 
            placeholder="이름" 
            {...register("username", 
            {required: "이름은 필수 값입니다.",
            // minLength: 2
            minLength: {
                value:2, //value는 최소값 지정
                message:"이름은 두 글자 이상 입력해야 합니다."
            },
            maxLength: {
                value:4,
                message: "이름은 네 글자 이하로 입력해야 합니다."
            }
            }
            )}>
            </input>
            {/* {error.Id && error.ID.message} */}
            {errors.username?.message}
            <br />


            {/* <input 
            type="text" 
            placeholder="이메일" 
            {...register("email", 
            {required: "이메일은 필수 값입니다.",
            
            pattern: {
                value:/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                message:"올바른 형태의 이메일을 입력해주세요."
            },
            }
            )}>
            </input>
            {errors.email?.message}
            <br /> */}


{/* gmail.com만 가입하게끔 하려면 */}
{/* customizing가능 */}
            <input 
            type="text" 
            placeholder="이메일" 
            {...register("email", 
            {required: "이메일은 필수 값입니다.",
            validate: (value)=>value.includes("gmail.com") || "gmail로만 가입이 가능합니다.",
            
            // pattern: {
            //     value:/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
            //     message:"올바른 형태의 이메일을 입력해주세요."
            // },
            }
            )
        }
            >
            </input>
            {errors.email?.message}
            <br />



{/* input의 라디오박스 */}
        {/* <input type="radio" name="gender" value="남" required></input>
        <input type="radio" name="gender" value="여" required></input> */}

<label htmlFor="gender-men">
        <input type="radio"  value="남" id="gender-men" {...register("gender", {required: "성별은 필수값입니다."})} ></input>
        남</label>
        {/* <input type="radio"  value="여" {...register("gender", {required: "성별은 필수값입니다."})}></input> */}
        {/* genderRegister */}

<label htmlFor="gender-women">
        <input type="radio"  value="여" id="gender-women" {...genderRegister}></input>
        여</label>{" "}

        {errors.gender?.message}
        <br />



        <select {...register("option", {required: "옵션은 필수값 입니다."})}>
            <option value="">옵션</option>
            <option value="option-1">옵션1</option>
            <option value="option-2">옵션2</option>
            <option value="option-3">옵션3</option>
            <option value="option-4">옵션4</option>
            <option value="option-5">옵션5</option>
        </select>

        {errors.option?.message}
        <br />
                <button type="submit">회원가입</button>

        {/* register("ID") => {name : id} */}

            {/* <input type="text" placeholder="아이디" name="" pattern=""></input> */}
        </form>
        </>
    )
};