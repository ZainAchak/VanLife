import { useOutletContext } from "react-router-dom"

export default function HostSingleVanPhotos(){
    const hostData = useOutletContext()
    return(
        // <div style={{display:flex}}>
        <div className="HostSingleVanPhotosWrapper">
            <img className="HostSingleVanPhotos"
                src={hostData.imageUrl} 
            //     style={{
            //         height: "10%",
            //         maxHeight:"600px", 
            //         borderRadius:"10px"
            // }} 
            />
        </div>
    )
}