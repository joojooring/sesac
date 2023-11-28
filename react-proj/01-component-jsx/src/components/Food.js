function Food ({content}){
return(
    <>
    <div className="Food__content">

    <div> {content}</div>
    </div>
    <div>방어는 추울수록 살이 뒤룩뒤룩~ 꿀맛</div>
    </>
)
}

Food.defaultProps = {
    content : "해산물은 싱싱해야지"
}

export default Food;
