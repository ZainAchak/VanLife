import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function HostVans(){
    const [hostVans, setHostVans] = useState([])

    useEffect(()=>{
        async function getData (){
            try{
                const res = await fetch("/api/host/vans")
                const json = await res.json()
                setHostVans(json.vans)
            }catch(err){
                console.error("found error fetching host vans",err)
            }
        }

        getData()
    },[])

    const vansList = hostVans.map((van,index)=>(
        <Link to={van.id}>
            <div className="HostVanItems">
                <img src={van.imageUrl} alt="" />
                <div>
                    <h2>{van.name}</h2>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))

    return(
        <div className="HostVansWrapper">
            {vansList}
        </div>
    )
}