import { use } from "react";
import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom";

export default function VansList() {
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const [searchParams, setSearchParams] = useSearchParams()
    console.log("search Params",searchParams.get("type"))

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadnfetch(){
            const type = searchParams.get("type");
            const cached = sessionStorage.getItem("VansList");
            if(cached){
                const currentData = JSON.parse(cached)
                // type ? setData(currentData.filter(van => van.type === searchParams.get("type")))
                // : setData(currentData)
                setData(currentData)
                setLoading(false)
            }else{
                try{
                    const res = await fetch("/api/vans")
                    const json = await res.json()
                    const currentData = json.vans
                    // type ? setData(currentData.filter(van => van.type === searchParams.get("type")))
                    // : setData(currentData)
                    setData(currentData)
                    await wait(1000)
                    setLoading(false)
                    sessionStorage.setItem("VansList", JSON.stringify(currentData));
                }catch(err){
                    console.error("Van data fetch error",err)
                }
            }
        }
        loadnfetch()
        },[])
    
    
    const vansDisplay = data.filter(
                                searchParams.get("type")
                                ? (van)=>van.type === searchParams.get("type")
                        : (van)=>van)
                        .map((van)=>(
                        <div className="singleVan" key={van.id}>
                            <Link   style={{textDecoration: "none",color:"black"}} 
                                    to={van.id}
                                    state={{search: searchParams.toString()}}>
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

    // useEffect(()=>{},[searchParams])
    return(
        <div className="vansWrapper">
            <div className="title-filter">
                <h1>Explore our van options</h1>
                <div className="filters">
                    <div className="filterButton">
                        <button className={searchParams.get("type") === "simple" 
                                                ? "btn-filter isActiveFilterBtn" 
                                                : "btn-filter"} 
                                onClick={()=>setSearchParams({type:"simple"})}>Simple
                        </button>

                        <button className={searchParams.get("type") === "luxury" 
                                                ? "btn-filter isActiveFilterBtn" 
                                                : "btn-filter"} 
                                onClick={()=>setSearchParams({type:"luxury"})}>Luxury
                        </button>

                        <button className={searchParams.get("type") === "rugged" 
                                                ? "btn-filter isActiveFilterBtn" 
                                                : "btn-filter"} 
                                onClick={()=>setSearchParams({type:"rugged"})}>Rugged
                        </button>

                    </div>
                    {searchParams.get("type") && <Link to="." onClick={()=>setSearchParams({})}>Clear Filters</Link>}
                </div>
            </div>

            <div className="vans-container">
                {loading ? <div className="loader"></div> :vansDisplay}
                {/* {vansDisplay} */}
            </div>
        </div>
        
        )}