import { Outlet,Link } from "react-router-dom"

export default function HostLayout(){
    return(
        <>
        <nav>
            <Link to=''>Dashboard</Link>
            <Link to='income'>Income</Link>
            <Link to='reviews'>Reviews</Link>
        </nav>
        <h1>Host Layout Start</h1>
            <br />
            <br />
                <Outlet/>
            <br />
            <br />
        <h3>Host layout End</h3>
        </> 
    )
}