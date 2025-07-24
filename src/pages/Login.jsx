import { useState } from "react"
import { useLoaderData, useLocation } from "react-router-dom"

export function loader({request}){
    const url = new URL(request.url)
    const message = url.searchParams.get("message")
    return message || null
}

export default function Login(){
    const [status, setStatus] = useState("idle")
    const [loginFormData,SetLoginFormData] = useState({email:"",password:""})
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const message = useLoaderData()
    const [serverResponse, setServerResponse] = useState(null)
    let serverMessage = null
    let serverUser = null
    

    function handleSubmit(e){
        e.preventDefault()
        setStatus("submitting")
        const userTypedEmail = loginFormData.email.toLowerCase()
        const userTypesPassword = loginFormData.password
        // console.log("Login Form Email",loginFormData.email.toLowerCase())
        // console.log("Login Form Password",loginFormData.password)
        const res = fetch("/api/login",{method:"post",body: JSON.stringify({email:userTypedEmail,password:userTypesPassword})})
                    .then(res=>res.json())
                    .then(data=>{console.log("reponse from server ")
                                setServerResponse(data)
                                setStatus("idle")
                            })
        SetLoginFormData({email:"",password:""})
    }

    if(serverResponse){
        serverMessage = serverResponse?.message
        serverUser = serverResponse?.user
    }

    function handleChange(e){
        const {name,value} = e.target
        SetLoginFormData(prev=>({
            ...prev,
            [name]:value
        }))
    }

    return(
        <section className="login-container">
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input 
                    type="email" 
                    name="email" 
                    placeholder="example@email.com"
                    value={loginFormData.email}
                    onChange={handleChange} />
                <input 
                    type="password" 
                    name="password" 
                    value={loginFormData.password}
                    onChange={handleChange} />
                <button disabled={status === "submitting"} type="submit">
                        {status === "submitting" ? "Logging in..." : "Log in"}
                    </button>
            </form>
            <p  style={{color:"blue", 
                        fontSize:"1.2rem"}}>{serverUser ? "Congrats You're welcome" : ""}</p>
            <p  style={{color:"red", 
                        fontSize:"1.2rem"}}>{serverMessage ? "* "+serverMessage : ""}</p>
            <p  style={{color:"red", 
                        fontSize:"1rem",}}>{(message) ? "* "+message : ""}</p>
        </section>
    )
}