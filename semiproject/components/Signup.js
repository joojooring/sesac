import {useForm} from "react-hook-form"
import "../styles/signup.css"
import { useDispatch, useSelector  } from "react-redux";
import { registerAction } from "../redux/actions/registerAction";

// const User = {
//     name : "하이루",
//     email : "ghkdwnfl0557@naver.com",
//     pw : "joojoobab"
// }

export default function Signup () {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const {
        register,
        handleSubmit,
        formState: {errors},
        watch
    }= useForm();

    const onValid = (data) => {
        
        alert("회원가입 완료");
        dispatch(registerAction(data));
        window.location.href = "/login";
        console.log("성공 ", data)
    }

    const onInvalid = (error) => {
        console.log("실패 ", error)
    }

    return(
        <>
        <div className="signup_outside">

            <h2 className="titleWrap">회원가입</h2>

                <div className="contentWrap">
                    <form onSubmit={handleSubmit(onValid, onInvalid)}>
                    <div className="forminsideWrap">
                    
                    <div className="inputTitle">
                    <i className="fa-solid fa-user"></i>
                                    이름</div>
                    <div className="inputWrap">

                        <input 
                            className="signup_input"
                            type="text"
                            placeholder="ex) 홍길동"
                            {...register("name",
                            {required : "이름은 필수값입니다.",
                            minLength:{
                                value:2,
                                message:"이름은 두 글자 이상 입력해야 합니다."
                            }
                        })}
                        >
                        </input>
                    
                    </div>
                        {errors.name && (
                        <div  style={{ color: "red", fontSize:"11px", paddingTop:"3px" }}>{errors.name.message}</div>
                        )}                

                        <br />

                    <div className="inputTitle">
                    <i className="fa-solid fa-phone"></i>
                                    전화번호</div>
                    <div className="inputWrap">

                        <input 
                            className="signup_input"
                            type="text"
                            placeholder="ex) 01022223333"
                            {...register("phonenumber",
                            {required : "전화번호는 필수값입니다.",
                            minLength:{
                                value:11,
                                message:"정확하게 입력해주세요."
                            }
                        })}
                        >
                        </input>
                    
                    </div>
                        {errors.phonenumber && (
                        <div  style={{ color: "red", fontSize:"11px", paddingTop:"3px" }}>{errors.phonenumber.message}</div>
                        )}                

                        <br />




                    <div className="inputTitle">
                    <i className="fa-solid fa-envelope"></i>
                                        이메일</div>
                    <div className="inputWrap">


                        <input
                            className="signup_input"
                            type="email"
                            placeholder="ex) whitening@google.com"
                            {...register("email", {
                                required: "이메일은 필수값입니다.",
                                pattern: {
                                value:
                                    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/, // 정규식 지정
                                message: "올바른 형태의 이메일을 입력해주세요.", // 정규식을 만족하지 못했을 때, 발생시키는 오류 메세지
                                },
                            })}
                        />
                    </div>
                            {errors.email  && (
                            <div style={{ color: "red", fontSize:"11px", paddingTop:"3px" }}>{errors.email.message}</div>
                            )}                

                    <br />


                    

                    <div className="inputTitle">
                    <i className="fa-solid fa-lock"></i>
                        비밀번호</div>
                    <div className="inputWrap">

                        <input 
                            className="signup_input"
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
                    </div>
                        {errors.pw && (
                            <div style={{ color: "red", fontSize:"11px", paddingTop:"3px" }}>{errors.pw.message}</div>
                            )}                
                    <br />

                    <div className="inputTitle">
                    <i className="fa-solid fa-lock"></i>
                        비밀번호 확인</div>
                    <div className="inputWrap">

                        <input 
                            className="signup_input"
                            type="password"
                            placeholder="비밀번호 확인"
                            {...register("confirmPassword",
                            {required : true,
                                validate: (value) => {
                                    if (watch("pw") != value) {
                                      return "패스워드가 일치하지 않습니다.";
                                    }
                                },
                                              })}
                        >
                        </input>
                    </div>
                        {errors.confirmPassword  && (
                            <div style={{ color: "red", fontSize:"11px", paddingTop:"3px" }}>{errors.confirmPassword .message}</div>
                            )}                
                    <br />


                        
                    <div className="gender">
                        <label htmlFor="gender-men">
                            <input type="radio" value="남" id="gender-men" {...register("gender", {required: "성별은 필수값입니다."})}></input>
                            <i style={{color: "blue"}} className="fa-solid fa-mars"></i>
                        남</label>

                        <label htmlFor="gender-women">
                            <input type="radio" value="여" id="gender-women" {...register("gender", {required: "성별은 필수값입니다."})}></input>
                            <i style={{color: "red"}} className="fa-solid fa-venus"></i>
                        여</label>{" "}
                        {errors.gender && (
                            <div style={{ color: "red", fontSize:"11px", paddingTop:"3px" }}>{errors.gender.message}</div>
                            )}                
                    </div>
                    </div>
                    <br />
                    <button className="btn-signup" type="submit">Register !</button>
                    </form>
                </div>


        </div>
        </>
    )
};