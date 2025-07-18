import { useOutletContext } from "react-router-dom"

export default function HostSingleVanPricing(){
    const hostData = useOutletContext()
    return (
        <h1>${hostData.price}
            <span 
                style={{fontWeight:"100",fontSize:"1.3rem"}}>
                    /day
            </span>
        </h1>
    )
}