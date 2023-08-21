import { Children } from "react"
import "./slide.css"
export const Slide=({children})=>{
    const about =[]
       
    console.log(about)
    return(
        <div className="main">
            <div className="imageco">{children}</div>
            <div className="footer">
                <div className="feature"></div>
                <div className="specification"></div>
            </div>
        </div>
    )
}