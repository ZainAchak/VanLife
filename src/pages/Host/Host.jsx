import { Navigate, Outlet } from "react-router-dom"

export default function Dashboard(){
    // const isLoggedIn = true
    // if (!isLoggedIn) {
    //     console.log("requireAuth loader called")
    //     return <Navigate to={"/login"}/>
    // }
    return(
        <>
            <h1>Dashboard</h1>
            {/* <Outlet/> */}
        </>
    )
}