import { useOutletContext } from "react-router-dom"

export default function HostSingleVanPhotos(){
    const hostData = useOutletContext()
    return(
        // <div style={{display:flex}}>
        <div style={{alignSelf:"center"}}>
            <img 
                src={hostData.imageUrl} 
                style={{
                    height:"600px", 
                    borderRadius:"10px"
            }} />
        </div>
    )
}