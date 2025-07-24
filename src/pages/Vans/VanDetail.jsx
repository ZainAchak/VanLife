import { useEffect, useState } from "react";
import { Link, Navigate, redirect, useLoaderData, useLocation, useParams } from "react-router-dom";

export function loader({params}){
    async function getData(){
        try {
            const res = await fetch(`/api/vans/${params.id}`);
            const data = await res.json();
            return data.vans
        } catch (err) {
            console.error("Error loading data:", err);
            return null
        }
        }
    return getData()
}

export default function VanDetail() {
    // console.log("Here is Loader Data",useLoaderData())
    const vanData = useLoaderData()
    const location = useLocation()

        const searchExist = location.state?.search || ''
        
        return (
            <div className="singleVanDetails">
                <div className="singleVanDetailsExp">
                    <div className="backtoVans">🔙&nbsp;&nbsp;&nbsp;
                        <Link to={`..?${searchExist}`}
                        relative="path">
                            <span>{searchExist ? `Back to ${searchExist.split("=")[1]} vans` : "Back to all vans"}</span>
                        </Link>
                    </div>
                    
                    <img src={vanData.imageUrl} alt="" />
                    <div className="single-description-details">
                        <button className={`btn-${vanData.type}`}>{vanData.type}</button>
                        <h3>{"$"+vanData.price}<span style={{fontWeight:100,fontSize:"15px"}}>/day</span></h3>
                        <p>{vanData.description}</p>
                        <button className="rentbtn">Rent this van</button>
                    </div>
                        
                </div>
            </div>
            )
}


// const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
// const [vanData, setVanData] = useState(null);
// const [loading, setLoading] = useState(false);
// const params = useParams();
// const vanId = params.id;
// console.log("location",location)
// console.log("path",`${location.pathname}?${location.state.search}`)

// console.log(params);

// useEffect(() => {
//     async function loadingg(){
//         try {
//             const res = await fetch(`/api/vans/${params.id}`);
//             const data = await res.json();
//             setVanData(data.vans);
//         } catch (err) {
//             console.error("Error loading data:", err);
//         } finally {
//             await wait(1500);
//             setLoading(false);
//         }
//     }
//     loadingg();

//     // fetch(`/api/vans/${params.id}`)
//     //     .then(res => res.json())
//     //     .then(vanData => {setVanData(vanData.vans)
//     //         setLoading(false);
//     //     })
//     //     .catch(err => console.error("error loading data",err))
// }, []);
{/* {loading ? (
                        <div className="loader"></div>
                    ) : (
                        )
                    } */}