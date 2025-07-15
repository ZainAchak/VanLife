import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
                <img src={vanData.imageUrl} alt="" />
                <div className="single-description-details">
                    <button className={`btn-${vanData.type}`}>{vanData.type}</button>
                    <h3>{"$"+vanData.price}<span style={{fontWeight:100,fontSize:"15px"}}>/day</span></h3>
                    <p>{vanData.description}</p>
                    <button className="rentbtn">Rent this van</button>
                </div>
            </div>
    )}
    else{
        return <div className="loader"></div>
    };
}