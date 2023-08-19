import { Outlet } from "react-router-dom"
import BasicExample from "../component/bootcom"

export const Header=()=>{
    return(
        <>
        <BasicExample/>
        <Outlet/>
        </>
    )
}