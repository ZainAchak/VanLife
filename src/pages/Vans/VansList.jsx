import { Suspense } from "react"
import { defer, Link, useLoaderData, Await, useSearchParams } from "react-router-dom";
import { sleep } from "../Login";
// import {Circles} from "react-loader-spinner"

export function loader(){
    const res =  fetch("/api/vans")
                .then(res=>res.json())
                .then(json=>(json.vans))
                
    return defer({loaderData:res})
}

// export function loader(){
//     async function getData(){
//         let currentData = null
//         try{
//             // await sleep(3000)
//             const res = await fetch("/api/vans")
//             const json = await res.json()
//             currentData = json.vans
//         }catch(err){
//             console.error("LOADER: Van data fetch error",err)
//         }
//         return currentData
//     }
//     return defer({loaderData:getData()})
// }

// export function loader(){
//     async function getData(){
//         let currentData = null
//         try{
//             const res = await fetch("/api/vans")
//             const json = await res.json()
//             currentData = json.vans
//         }catch(err){
//             console.error("LOADER: Van data fetch error",err)
//         }
//         return currentData
//     }
//     return getData()
// }

export default function VansList() {
    const [searchParams, setSearchParams] = useSearchParams()
    // const navigation  = useNavigation()
    const dataLoader = useLoaderData()
    
    // const vansDisplay = data.filter(
    //     searchParams.get("type")
    //     ? (van)=>van.type === searchParams.get("type")
    //     : (van)=>van)
    //     .map((van)=>(
    //         <div className="singleVan" key={van.id}>
    //             <Link   style={{textDecoration: "none",color:"black"}} 
    //                     to={van.id}
    //                     state={{search: searchParams.toString()}}>
                            
    //                 <img className="singleVanImg" src={van.imageUrl} alt="" />
    //                     <div className="van-description">
    //                         <h2 className="vanTitle">
    //                             {van.name}
    //                         </h2>
    //                         <span className="vanPricePDay">
    //                             <h2>${van.price}</h2>
    //                             <p>/day</p>
    //                         </span>
    //                     </div>
    //                 </Link>
    //                 <button className={`btn-${van.type}`}>{van.type.charAt(0).toUpperCase() + van.type.slice(1)}</button>
    //         </div>
    //         ))

    function getVansData(data){
        const vansDisplay = data.filter(
                searchParams.get("type")
                ? (van)=>van.type === searchParams.get("type")
                : (van)=>van)

            return vansDisplay.map((van)=>(
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
                </div>
            ))}

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
                <Suspense fallback={<h1>Loading...</h1>}>

                    <Await resolve={dataLoader.loaderData}>
                        {getVansData}
                    </Await>
                </Suspense>
            </div>
        </div>
)}

{/* {loading ? <div className="loader"></div> :vansDisplay} */}
{/* {vansDisplay} */}

// const [data, setData] = useState([])
// const [loading, setLoading] = useState(false);
// const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
// console.log("search Params",searchParams.get("type"))
// useEffect(()=>{
//     async function loadnfetch(){
//         const type = searchParams.get("type");
//         const cached = sessionStorage.getItem("VansList");
//         if(cached){
//             const currentData = JSON.parse(cached)
//             // type ? setData(currentData.filter(van => van.type === searchParams.get("type")))
//             // : setData(currentData)
//             setData(currentData)
//             setLoading(false)
//         }else{
//             try{
//                 const res = await fetch("/api/vans")
//                 const json = await res.json()
//                 const currentData = json.vans
//                 // type ? setData(currentData.filter(van => van.type === searchParams.get("type")))
//                 // : setData(currentData)
//                 setData(currentData)
//                 await wait(1000)
//                 setLoading(false)
//                 sessionStorage.setItem("VansList", JSON.stringify(currentData));
//             }catch(err){
//                 console.error("Van data fetch error",err)
//             }
//         }
//     }
//     loadnfetch()
//     },[])