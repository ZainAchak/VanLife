import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

export default function VanDetail() {
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
    const [vanData, setVanData] = useState(null);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const vanId = params.id;
    const location = useLocation()
    console.log("location",location)
    // console.log("path",`${location.pathname}?${location.state.search}`)

    // console.log(params);

    useEffect(() => {
        async function loadingg(){
            try {
                const res = await fetch(`/api/vans/${params.id}`);
                const data = await res.json();
                setVanData(data.vans);
            } catch (err) {
                console.error("Error loading data:", err);
            } finally {
                await wait(1500);
                setLoading(false);
            }
        }
        loadingg();

        // fetch(`/api/vans/${params.id}`)
        //     .then(res => res.json())
        //     .then(vanData => {setVanData(vanData.vans)
        //         setLoading(false);
        //     })
        //     .catch(err => console.error("error loading data",err))
    }, []);

        const searchExist = location.state?.search || ''
        console.log("searchExist",searchExist)
        return (
            <div className="singleVanDetails">
                <div className="singleVanDetailsExp">
                    <div className="backtoVans">🔙&nbsp;&nbsp;&nbsp;
                        <Link to={`..?${searchExist}`}
                        relative="path">
                            <span>{searchExist ? `Back to ${searchExist.split("=")[1]} vans` : "Back to all vans"}</span>
                        </Link>
                    </div>

                    {loading ? (
                        <div className="loader"></div>
                    ) : (
                        <>
                            <img src={vanData.imageUrl} alt="" />
                            <div className="single-description-details">
                                <button className={`btn-${vanData.type}`}>{vanData.type}</button>
                                <h3>{"$"+vanData.price}<span style={{fontWeight:100,fontSize:"15px"}}>/day</span></h3>
                                <p>{vanData.description}</p>
                                <button className="rentbtn">Rent this van</button>
                            </div>
                        </>)
                    }
                </div>
            </div>
            )
}