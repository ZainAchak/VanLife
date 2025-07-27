import { NavLink, Link, useLocation } from "react-router-dom"
import { MdAccountCircle } from "react-icons/md";
import { useEffect, useState } from "react";

export default function Header(){
    const location = useLocation()
    const [redirectPage,_] = useState(location.pathname)
    
     useEffect(() => {
        console.log("Header Location Pathname",location.pathname)
    }, [location.pathname])
    
    const style = {
        color:"#70861dff"
        
    }
    return(
        <header>
            <div className='headerData'>
                <Link className='site-logo' to='/'>#VANLIFE</Link>
                <nav>
                    <NavLink 
                        className={ (obj)=>(obj.isActive ? "isActiveNav" : null) } 
                        to='host'>Host</NavLink>
                    <NavLink 
                        className={(obj)=>obj.isActive ? "isActiveNav" : null}
                        to='about'>About</NavLink>
                    <NavLink 
                        className={(obj)=>obj.isActive ? "isActiveNav" : null}
                        to='vans'>Vans</NavLink>
                    {
                        localStorage.getItem("loggedin") === "true"
                            ?<NavLink 
                                // className={(obj)=>obj.isActive ? "isActiveNav" : null}
                                style={(obj) => ({
                                            color: "#ff0000a9",
                                            fontSize: "1.1rem",
                                            margin:"auto 0",
                                            ...(obj.isActive ? style : {})
                                            })}
                                onClick={()=> {localStorage.setItem("loggedin",false)}}
                                to={`/login?redirect=${redirectPage}`}>
                                    Logout
                            </NavLink>

                            :<NavLink 
                                // className={(obj)=>obj.isActive ? "isActiveNav" : null}
                                style={(obj)=>obj.isActive ? style : null}
                                to='/login'
                                onClick={()=> setStateLogin(true)}>
                                    <MdAccountCircle size={32} 
                                    style={{textDecoration:"none"}}/>
                            </NavLink>
                    }
                </nav>
            </div>
        </header>
    )
}