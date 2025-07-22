import {Link} from 'react-router-dom'
export default function NotFound404(){
    const secStyle ={
            height:"80vh",
            display: "flex",
            flexDirection: "column",
            padding: "2rem",
            justifyContent: "center",
            alignItems:"center",
            gap:"2rem"
    }

    const h1Style = {
        // backgroundColor:"red",
        fontSize: "3.9rem",
        textAlign: "start",
        width: "90%",
        maxWidth: "800px",
        fontWeight: "bolder"
    }

    const linkStyle = {
        width: "90%",
        maxWidth: "800px",
        textAlign: "center",
        padding: "20px 20px",
        borderRadius: "10px",
        backgroundColor:"#252525",
        textDecoration: "none",
        color:"white",
        fontSize:"1.3rem"
        }
    return(
        <section style={secStyle}>
            <h1 style={h1Style}>Sorry, the page you were looking for was not Found</h1>
            <Link style={linkStyle} to=".." relative='path'>Return to Home</Link>
        </section>
    )
}