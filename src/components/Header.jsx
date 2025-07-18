import { NavLink, Link } from "react-router-dom"

export default function Header(){
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
                </nav>
            </div>
        </header>
    )
}