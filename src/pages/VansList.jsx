import { useEffect, useState } from "react"

export default function VansList() {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch("/api/vans")
            .then(res=>res.json())
            .then(json=>setData(json.vans))
            .catch(err=>console.log("failed to fetch vans:", err));
        },[])

    const vansDisplay = data.map((van)=>(
        <div className="singleVan" key={van.id}>
                <img src={van.imageUrl} alt="" />
                <div className="van-description">
                    <h2 className="vanTitle">
                        {van.name}
                    </h2>
                    <span className="vanPricePDay">
                        <h2>${van.price}</h2>
                        <p>/day</p>
                    </span>
                </div>
                <button className={`btn-${van.type}`}>{van.type.charAt(0).toUpperCase() + van.type.slice(1)}</button>
            </div>
    ))
    return(
        <div className="vansWrapper">
            <div className="vans-container">
                {vansDisplay}
            </div>
        </div>
        
    )
}