import { NavLink, Link } from "react-router-dom"
import { FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

export default function Header(){

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
                    <NavLink 
                        // className={(obj)=>obj.isActive ? "isActiveNav" : null}
                        style={(obj)=>obj.isActive ? style : null}
                        to='login'>
                            <MdAccountCircle size={32} 
                            style={{textDecoration:"none"}}/>
                    </NavLink>

                </nav>
            </div>
        </header>
    )
}