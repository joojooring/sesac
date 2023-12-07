import "../styles/larva.scss"
function Larva(){
    return(
        <>
        <div className="larva">
            <div className="body body1">
                <div className="eye">
                    <div className="eye-white"></div>
                    <div className="eye-black"></div>
                </div>
            </div>
            <div className="body body2"></div>
            <div className="body body3"></div>
            <div className="body body4"></div>
            <div className="body body5"></div>

            <img
            className="grass"
            src={process.env.PUBLIC_URL + '/images/grass.png'}
            alt="잔디"
            width="67%"
            />
      </div>
        </>
    )
};

export default Larva;