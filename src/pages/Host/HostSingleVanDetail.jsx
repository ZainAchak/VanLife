import { useOutletContext } from "react-router-dom"

export default function HostSingleVanDetail(){
    const hostvanDataDetails = useOutletContext()
    const style ={
        fontWeight:"bold"
    }
    return (
        <div className="singlevan-details">
            <p><span style={style}>Name:</span> {hostvanDataDetails.name}</p>
            <p><span style={style}>Category:</span> {hostvanDataDetails.type}</p>
            <p><span style={style}>Description:</span> {hostvanDataDetails.description}</p>
            <p><span style={style}>Visibilty:</span> Public</p>
        </div>
    )
}