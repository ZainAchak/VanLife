import { useState } from "react"

export default function Login(){
    const [loginFormData,SetLoginFormData] = useState({email:"",password:""})

    function handleSubmit(e){
        e.preventDefault()
        console.log("Login Form Email",loginFormData.email.toLowerCase())
        console.log("Login Form Password",loginFormData.password)
        SetLoginFormData({email:"",password:""})
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
                <button type="submit">Log in</button>
            </form>
        </section>
    )
}