import {useForm} from "react-hook-form"
export default function Signup () {
    const {
        register,
        handleSubmit,
        formState: {errors},
        watch
    }= useForm();

    const onValid = (data) => {
        console.log("성공 ", data)
    }

    const onInvalid = (error) => {
        console.log("실패 ", error)
    }

    const genderRegister = register("gender", {required: "성별은 필수값입니다."})

    return(
        <>
        <h2>회원가입</h2>
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <input 
            type="text"
            placeholder="아이디"
            {...register("ID",
            {required : "아이디는 필수값입니다.",
            pattern: {
                value: /^[a-zA-Z0-9]{4,12}$/,
                message:"4자리 이상 12자리 이하, 알파벳, 숫자를 포함해 아이디를 만들어주세요. "
                }
            })}
        >
        </input>
        {errors.ID?.message}
        <br />

        <input 
            type="password"
            placeholder="비밀번호"
            {...register("pw",
            {required : "비밀번호는 필수값입니다.",
            pattern: {
                value: /^[a-zA-Z0-9]{4,12}$/,
                message:"4자리 이상 12자리 이하, 알파벳, 숫자를 포함해 아이디를 만들어주세요. "
                }
            })}
        >
        </input>
        {errors.pw?.message}
        <br />


        <input 
            type="text"
            placeholder="이름"
            {...register("name",
            {required : "이름은 필수값입니다.",
            minLength:{
                value:2,
                message:"이름은 두 글자 이상 입력해야 합니다."
            }
            })}
        >
        </input>
        {errors.name?.message}
        <br />


        <label htmlFor="gender-men">
            <input type="radio" value="남" id="gender-men" {...register("gender", {required: "성별은 필수값입니다."})}></input>
        남</label>

        <label htmlFor="gender-women">
            <input type="radio" value="여" id="gender-women" {...register("gender", {required: "성별은 필수값입니다."})}></input>
        여</label>{" "}
        {errors.gender?.message}
        <br />


        <select {...register("option", {required: "출생년도는 필수값 입니다."})}>
            <option value="option-0">1990</option>
            <option value="option-1">1991</option>
            <option value="option-2">1992</option>
            <option value="option-3">1993</option>
            <option value="option-4">1994</option>
            <option value="option-5">1995</option>
            <option value="option-6">1996</option>
            <option value="option-7">1997</option>
            <option value="option-8">1998</option>
            <option value="option-9">1999</option>
            <option value="option-10">2000</option>
            <option value="option-11">2001</option>
            <option value="option-12">2002</option>
            <option value="option-13">2003</option>
            <option value="option-14">2004</option>
            <option value="option-15">2005</option>
            <option value="option-16">2006</option>
            <option value="option-17">2007</option>
            <option value="option-18">2008</option>
            <option value="option-19">2009</option>
            <option value="option-20">2010</option>
            <option value="option-21">2011</option>
            <option value="option-22">2012</option>
            <option value="option-23">2013</option>
        </select>
        {errors.option?.message}

        <select {...register("optionmonth", {required: "출생월은 필수값 입니다."})}>
            <option value="option-0">1</option>
            <option value="option-1">2</option>
            <option value="option-2">3</option>
            <option value="option-3">4</option>
            <option value="option-4">5</option>
            <option value="option-5">6</option>
            <option value="option-6">7</option>
            <option value="option-7">8</option>
            <option value="option-8">9</option>
            <option value="option-9">10</option>
            <option value="option-10">11</option>
            <option value="option-11">12</option>
        </select>
        {errors.optionmonth?.message}


        <select {...register("optionday", {required: "출생일은 필수값 입니다."})}>
        <option value="option-0">1</option>
            <option value="option-1">2</option>
            <option value="option-2">3</option>
            <option value="option-3">4</option>
            <option value="option-4">5</option>
            <option value="option-5">6</option>
            <option value="option-6">7</option>
            <option value="option-7">8</option>
            <option value="option-8">9</option>
            <option value="option-9">10</option>
            <option value="option-10">11</option>
            <option value="option-11">12</option>
            <option value="option-1">13</option>
            <option value="option-2">14</option>
            <option value="option-3">15</option>
            <option value="option-4">16</option>
            <option value="option-5">17</option>
            <option value="option-6">18</option>
            <option value="option-7">19</option>
            <option value="option-8">20</option>
            <option value="option-9">21</option>
            <option value="option-10">22</option>
            <option value="option-11">23</option>
            <option value="option-1">23</option>
            <option value="option-2">24</option>
            <option value="option-3">25</option>
            <option value="option-4">26</option>
            <option value="option-5">27</option>
            <option value="option-6">28</option>
            <option value="option-7">29</option>
            <option value="option-8">30</option>
            <option value="option-9">31</option>
        </select>
        {errors.optionday?.message}


        <button type="submit">회원가입</button>
        </form>
        </>
    )
};