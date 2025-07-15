import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function VansList() {
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadnfetch(){
            try{
                const res = await fetch("/api/vans")
                const json = await res.json()
                setData(json.vans)
                await wait(4000)
                setLoading(false)
                
            }catch(err){
                console.error("Van data fetch error",err)
            }
        }
        loadnfetch()
        // fetch("/api/vans")
        //     .then(res=>res.json())
        //     .then(json=>{
        //         setData(json.vans)
        //         setLoading(false);
        //     })
        //     .catch(err=>
        //         console.log("failed to fetch vans:", err));
        //         // setData(false)
        },[])

    const vansDisplay = data.map((van)=>(
        <div className="singleVan" key={van.id}>
            <Link style={{textDecoration: "none",color:"black"}} to={`/vans/${van.id}`}>
                <img className="singleVanImg" src={van.imageUrl} alt="" />
                    <div className="van-description">
                        <h2 className="vanTitle">
                            {van.name}
                        </h2>
                        <span className="vanPricePDay">
                            <h2>${van.price}</h2>
                            <p>/day</p>
                        </span>
                    </div>
                </Link>
                <button className={`btn-${van.type}`}>{van.type.charAt(0).toUpperCase() + van.type.slice(1)}</button>
            </div>))

    // if (loading) {
    //     return <div className="loader"></div>
    // }
    return(
        <div className="vansWrapper">
            <div className="title-filter">
                <h1>Explore our van options</h1>
                <div className="filters">
                    <div className="filterButton">
                        <button className="btn-filter">Simple</button>
                        <button className="btn-filter">Luxury</button>
                        <button className="btn-filter">Rugged</button>
                    </div>
                    <a href="#">Clear Filters</a>
                </div>
            </div>

            <div className="vans-container">
                {loading ? <div className="loader"></div> :vansDisplay}
                {/* {vansDisplay} */}
            </div>
        </div>
        
        )}