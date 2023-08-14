
export const Box=(props)=>{
    return(
        <>
        <div  className="box">
            <div>{props.qty}</div>
            <div>{props.tittle}</div>
        </div>
        </>
    )
}