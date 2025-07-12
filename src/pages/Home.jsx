import {Link} from 'react-router-dom'

export default function Home() {
    return(
        <div className="home-container">
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the <b style={{fontSize:"25px"}}>#vanlife</b> movement. Rent the perfect van to make your perfect road trip.</p>
            <Link className='findVanBtn' to='/vans'>Find your van</Link>
        </div>
    )
}