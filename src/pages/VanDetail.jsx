import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function VanDetail() {
    const [vanData, setVanData] = useState(null);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const vanId = params.id;
    console.log(params);

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(vanData => {setVanData(vanData.vans)
                setLoading(false);
            })
            .catch(err => console.error("error loading data",err))
    }, []);

    if (!loading){
        return (
            <div className="singleVanDetails">
                <div className="singleVanDetailsExp">
                    <div className="backtoVans">🔙&nbsp;&nbsp;&nbsp;<Link to={"/vans"}><span>Back to all vans</span></Link></div>
                    <img src={vanData.imageUrl} alt="" />
                    <div className="single-description-details">
                        <button className={`btn-${vanData.type}`}>{vanData.type}</button>
                        <h3>{"$"+vanData.price}<span style={{fontWeight:100,fontSize:"15px"}}>/day</span></h3>
                        <p>{vanData.description}</p>
                        <button className="rentbtn">Rent this van</button>
                    </div>
                </div>
            </div>
    )}
    else{
        return <div className="loader"></div>
    };
}