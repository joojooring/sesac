import abcstyle from "../styles/origin.module.css"

function CssModule () {
    return(
        <>
        <div className={abcstyle.origin}>
            <div className={`${abcstyle.box} ${abcstyle.red}`}></div>
            <div className={[abcstyle.box, abcstyle.orange].join(' ')}></div>
            <div className={`${abcstyle.box} ${abcstyle.yellow}`}></div>
            <div className={[abcstyle.box, abcstyle.green].join(' ')}></div>
            <div className={`${abcstyle.box} ${abcstyle.blue}`}></div>
            <div className={`${abcstyle.box} ${abcstyle.purple}`}></div>
        </div>
        </>
    )
}

export default CssModule;