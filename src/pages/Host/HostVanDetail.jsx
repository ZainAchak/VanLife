import { useEffect, useState } from "react"
import { useParams,NavLink,Link, Outlet } from "react-router-dom"

export default function HostVanDetail(){
    const params = useParams()
    const [hostvanData, sethostvanData] = useState(null)

    useEffect(()=>{
        fetch(`/api/host/vans/${params.id}`)
            .then(res=>res.json())
            .then(data=>data.vans)
            .then(data=>sethostvanData(data[0]))
            .catch(err=>console.error("error getting single van host data"));
    },[])

    console.log(hostvanData ? hostvanData: null)
    return(
            hostvanData && 
            <div className="HostVanDetailWrapper">
                <span>🔙&nbsp;&nbsp;&nbsp;
                    <Link   to='..' 
                            relative="path">
                        Back to all vans
                    </Link>
                </span>
                <div className="HostVanDetailImgTitle">
                    <img src={hostvanData.imageUrl} alt="" />
                    <div className="HostVanDetailsIT2">
                        <button className={"btn-"+hostvanData.type}>{hostvanData.type}</button>
                        <h2>{hostvanData.name}</h2>
                        <h3>${hostvanData.price}
                            <span style={{fontWeight:100}}>
                                /day
                            </span>
                        </h3>
                    </div>
                </div>

                <nav>
                    <NavLink end to={'.'} 
                        style={{fontSize:"1.2rem"}}
                        className={(obj)=>obj.isActive ? "isActiveNav" : null}>
                        Details
                    </NavLink>

                    <NavLink to={'pricing'} 
                        style={{fontSize:"1.2rem"}}
                        className={(obj)=>obj.isActive ? "isActiveNav" : null}>
                        Pricing
                    </NavLink>

                    <NavLink to={'photos'} 
                        style={{fontSize:"1.2rem"}}
                        className={(obj)=>obj.isActive ? "isActiveNav" : null}>
                        Photos
                    </NavLink>
                </nav>
                
                <Outlet context={hostvanData}/>
            </div>
    )
}