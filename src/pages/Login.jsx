import { useEffect, useState } from "react"
import { useLoaderData, useLocation, useNavigate, Form, redirect, useActionData, useNavigation } from "react-router-dom"

export function loader({request}){
    // if(localStorage.getItem("loggedin")){
    //     const redire = redirect("/host")
    //     redire.body = true
    //     console.log("Login Logged IN",localStorage.getItem("loggedin"))
    //     return redire
    // } 

    const url = new URL(request.url)
    const message = url.searchParams.get("message")
    return message
}

export function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

export async function action(obj){
    await sleep(1000)
    const url = new URL(obj.request.url)
    const redirectPathName = url.searchParams?.get("redirect") || "/host"
    
    const formData = await obj.request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    // console.log("action", email,password)
    const res = redirect(redirectPathName) // 1. This is just because of MirageJS ~ Fake Server
    res.body = true // Same here, we can use simply redirect("/host") is not MirageJS 

    if (email !== "vanlife@mail.com" || password !== "1") {
        localStorage.setItem("loggedin", false)
        return { error: "Invalid email or password" }  // ⛔ Return error object
    }
    localStorage.setItem("loggedin", true)
    return res
}

export default function Login(){
    const message = useLoaderData()
    const navigation = useNavigation()
    // console.log(navigation.state)
    const actionData = useActionData()

    return(
        <section className="login-container">
            <h1>Sign in to your account</h1>
            <Form method="post" className="login-form" replace>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="example@email.com" />
                <input 
                    type="password" 
                    name="password" />
                <button style={navigation.state === "submitting" || navigation.state === "loading" ?{backgroundColor:"gray"}: null}
                        disabled={navigation.state === "submitting" || navigation.state === "loading" ? true: false} type="submit">
                        {navigation.state === "submitting" 
                            ? "Logging in..." 
                            : navigation.state === "loading" 
                                ? "Loading..." 
                                :"Log in"}
                    </button>
            </Form>
            {/* <p  style={{color:"blue", 
                        fontSize:"1.2rem"}}>{actionData ? "Congrats You're welcome" : ""}</p> */}
            <p  style={{color:"red", opacity:actionData ? "1" : "0",
                        fontSize:"1.1rem"}}>{actionData ? "* "+actionData.error : "..."}</p>
            <p  style={{color:"red", 
                        fontSize:"1rem",}}>{(message) ? "* "+message : ""}</p>
        </section>
    )
}


    // const [status, setStatus] = useState("idle")
    // const [loginFormData,SetLoginFormData] = useState({email:"",password:""})
    // const location = useLocation()
    // const searchParams = new URLSearchParams(location.search)
    // console.log(actionData ? actionData.error : "No Error")
    
    // const [serverResponse, setServerResponse] = useState(null)
    // const navigate = useNavigate()
    // let serverMessage = null
    // let serverUser = null

    // function handleSubmit(e){
    //     e.preventDefault()
    //     setStatus("submitting")
    //     const userTypedEmail = loginFormData.email.toLowerCase()
    //     const userTypesPassword = loginFormData.password
    //     // console.log("Login Form Email",loginFormData.email.toLowerCase())
    //     // console.log("Login Form Password",loginFormData.password)
    //     const res = fetch("/api/login",{method:"post",body: JSON.stringify({email:userTypedEmail,password:userTypesPassword})})
    //                 .then(res=>res.json())
    //                 .then(data=>{console.log("reponse from server ")
    //                             setServerResponse(data)
    //                             setStatus("idle")
    //                         })
    //     SetLoginFormData({email:"",password:""})
    // }

    // useEffect(() => {
    //     if (serverResponse?.user) {
    //         navigate("/host",{replace:true})
    //     }
    // }, [serverResponse, navigate])

    // if(serverResponse){
    //     serverMessage = serverResponse?.message
    //     serverUser = serverResponse?.user
    // }

    // function handleChange(e){
    //     const {name,value} = e.target
    //     SetLoginFormData(prev=>({
    //         ...prev,
    //         [name]:value
    //     }))
    // }

// export default function Login(){
//     const [status, setStatus] = useState("idle")
//     const [loginFormData,SetLoginFormData] = useState({email:"",password:""})
//     const location = useLocation()
//     const searchParams = new URLSearchParams(location.search)
//     const message = useLoaderData()
//     const [serverResponse, setServerResponse] = useState(null)
//     const navigate = useNavigate()
//     let serverMessage = null
//     let serverUser = null
    

//     function handleSubmit(e){
//         e.preventDefault()
//         setStatus("submitting")
//         const userTypedEmail = loginFormData.email.toLowerCase()
//         const userTypesPassword = loginFormData.password
//         // console.log("Login Form Email",loginFormData.email.toLowerCase())
//         // console.log("Login Form Password",loginFormData.password)
//         const res = fetch("/api/login",{method:"post",body: JSON.stringify({email:userTypedEmail,password:userTypesPassword})})
//                     .then(res=>res.json())
//                     .then(data=>{console.log("reponse from server ")
//                                 setServerResponse(data)
//                                 setStatus("idle")
//                             })
//         SetLoginFormData({email:"",password:""})
//     }

//     useEffect(() => {
//         if (serverResponse?.user) {
//             navigate("/host",{replace:true})
//         }
//     }, [serverResponse, navigate])

//     if(serverResponse){
//         serverMessage = serverResponse?.message
//         serverUser = serverResponse?.user
//     }

//     function handleChange(e){
//         const {name,value} = e.target
//         SetLoginFormData(prev=>({
//             ...prev,
//             [name]:value
//         }))
//     }

//     return(
//         <section className="login-container">
//             <h1>Sign in to your account</h1>
//             <form onSubmit={handleSubmit} className="login-form">
//                 <input 
//                     type="email" 
//                     name="email" 
//                     placeholder="example@email.com"
//                     value={loginFormData.email}
//                     onChange={handleChange} />
//                 <input 
//                     type="password" 
//                     name="password" 
//                     value={loginFormData.password}
//                     onChange={handleChange} />
//                 <button disabled={status === "submitting"} type="submit">
//                         {status === "submitting" ? "Logging in..." : "Log in"}
//                     </button>
//             </form>
//             <p  style={{color:"blue", 
//                         fontSize:"1.2rem"}}>{serverUser ? "Congrats You're welcome" : ""}</p>
//             <p  style={{color:"red", 
//                         fontSize:"1.2rem"}}>{serverMessage ? "* "+serverMessage : ""}</p>
//             <p  style={{color:"red", 
//                         fontSize:"1rem",}}>{(message) ? "* "+message : ""}</p>
//         </section>
//     )
// }