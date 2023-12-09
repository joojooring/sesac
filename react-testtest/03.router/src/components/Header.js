import { Link } from "react-router-dom"
export default function Header() {

    return(
        <>
        <header className="Header">
            <div className="logo">리액트로 라우터 분리!!</div>
            <nav>
                <div><Link to="/signup" >회원가입</Link></div>
                <div><Link to="/todos">할 일 목록</Link></div>
            </nav>
        </header>
        </>
    )
};