import { Outlet,NavLink } from "react-router-dom"

export default function HostLayout(){
    return(
        
        <div className="HostLayoutWrapper">
            <nav>
                <NavLink 
                    className={(obj)=>obj.isActive ? "isActiveNav" : null}
                    to='' end>Dashboard</NavLink>

                {/* The end prop tells <NavLink> to only consider the route as active if the current URL exactly matches the to prop — and not any sub-paths. */}

                <NavLink
                    className={(obj)=>obj.isActive ? "isActiveNav" : null}
                    to='income'>Income</NavLink>

                <NavLink
                    className={(obj)=>obj.isActive ? "isActiveNav" : null}
                    to='vans'>Vans</NavLink>

                <NavLink
                    className={(obj)=>obj.isActive ? "isActiveNav" : null} 
                    to='reviews'>Reviews</NavLink>
            </nav>
            
            <Outlet/>
        </div> 
    )
}