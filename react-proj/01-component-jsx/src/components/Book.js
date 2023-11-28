function Book ({title, author, price,type}){
    return(
        <>
        <div className="Book__text">
    
        <div>
        <div style= {{fontSize : '60px', color:'orange'}} >{title}</div>     
        </div>
        <img src="/logo192.png" />
        <h2>나의 하루는 8시에 시작된다ㅋㅋ</h2>
        <div>{author}</div>
        <div>{price}</div>
        <div>{type}</div>
        </div>
        </>
    )
    }
        
    export default Book;
    