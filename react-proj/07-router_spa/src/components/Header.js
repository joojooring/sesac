import { Link } from "react-router-dom"

export default function Header() {

    return(
        <>
        <header className="Header">
            <div className="logo">리액트 Router 공부</div>
            <nav>
                <div>
                    {/* a태그는 페이지를 새로고침하면서 , 페이지를 이동시킴 */}
                    {/* Link 컴포넌트는 컴포넌트만 변경하면서 페이지를 새로고침하지 않음 */}
                    <Link to="/">Home</Link>
                {/* <a href="">Home</a> */}
                </div>
                <div>
                <a href="/products">Product 페이지</a>
                </div>
                <div>
                <Link to="/photos">사진 페이지</Link>
                {/* <Link to="/products">Product 페이지</Link> */}

                </div>
            </nav>
        </header>
        </>
    )
};