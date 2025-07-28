import { Suspense, useEffect, useState } from "react"
import { Await, defer, Link, useLoaderData } from "react-router-dom"
import { requireAuth } from "../../components/utils"

export async function loader({request}){
    await requireAuth(request)
    const res = fetch("/api/host/vans")
                .then(res=> res.json())
                .then(json=>json.vans)
    return(defer({dataLoader:res}))
    // async function getData (){
    //     await requireAuth(request)
    //     let data =null
    //     try{
    //         const res = await fetch("/api/host/vans")
    //         const json = await res.json()
    //         data = json.vans
    //         console.log("loader",data)
    //     }
    //     catch(err){
    //         console.error("found error fetching host vans",err)
    //     }
    //     return data
    // }
    // return getData()
}


// export function loader({request}){
//     async function getData (){
//         await requireAuth(request)
//         let data =null
//         try{
//             const res = await fetch("/api/host/vans")
//             const json = await res.json()
//             data = json.vans
//             console.log("loader",data)
//         }
//         catch(err){
//             console.error("found error fetching host vans",err)
//         }
//         return data
//     }
//     return getData()
// }

export default function HostVans(){
    const hostVansPromise = useLoaderData();

    function hostVansDisplay(hostVans){
        return hostVans?.map((van)=>(
        <Link key={van.id} to={van.id}>
            <div className="HostVanItems">
                <img src={van.imageUrl} alt="" />
                <div>
                    <h2>{van.name}</h2>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
        ))}
    // const vansList = hostVans?.map((van,index)=>(
    //     <Link key={van.id} to={van.id}>
    //         <div className="HostVanItems">
    //             <img src={van.imageUrl} alt="" />
    //             <div>
    //                 <h2>{van.name}</h2>
    //                 <p>${van.price}/day</p>
    //             </div>
    //         </div>
    //     </Link>
    // ))

    return(
        <div className="HostVansWrapper">
            <Suspense fallback={<h1 style={{alignSelf:"center"}}>Loading...</h1>}>
                <Await resolve={hostVansPromise.dataLoader}>
                    {hostVansDisplay}
                </Await>
            </Suspense>
            {/* {vansList} */}
        </div>
    )
}

 // const [hostVans, setHostVans] = useState([])
    // useEffect(()=>{
    //     async function getData (){
    //         const cached = sessionStorage.getItem('hostVans')
    //         if(cached){
    //             setHostVans(JSON.parse(cached))
    //         }else{
    //             try{
    //                 const res = await fetch("/api/host/vans")
    //                 const json = await res.json()
    //                 setHostVans(json.vans)
    //                 sessionStorage.setItem("hostVans",JSON.stringify(json.vans))
    //             }catch(err){
    //                 console.error("found error fetching host vans",err)
    //             }
    //         }
    //     }

    //     getData()
    // },[])