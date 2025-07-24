import { useEffect, useState } from "react"
import { useParams,NavLink,Link, Outlet, useLoaderData, Navigate } from "react-router-dom"
import { requireAuth } from "../../components/utils";

export async function loader({params}){
    try {
        await requireAuth()
        const res = await fetch(`/api/host/vans/${params.id}`);
        const json = await res.json();
        const data = json.vans[0];
        return data;
    } catch (err) {
        throw new Error(`Host Van Detail Page Loader Error: ${err.message || err}`);
    }
}

export default function HostVanDetail(){
    const hostvanData = useLoaderData()

    
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

    // const isLoggedIn = false;

    // const params = useParams()
    // const [hostvanData, sethostvanData] = useState(null)

    // if (!isLoggedIn) {
    //     return <Navigate to={"/login"}/>;
    // }
    // console.log("Use Effect Data",hostvanData)
    // console.log("Loader Data",hostvanDataL)

    // useEffect(()=>{
    //     fetch(`/api/host/vans/${params.id}`)
    //         .then(res=>res.json())
    //         .then(data=>data.vans)
    //         .then(data=>sethostvanData(data[0]))
    //         .catch(err=>console.error("error getting single van host data"));
    // },[])