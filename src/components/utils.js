import { redirect } from "react-router-dom"

export async function requireAuth(request) {
    const isLoggedIn = localStorage.getItem("loggedin")
    const pathname = new URL(request.url).pathname
    // console.log("requireAuth PATH", pathname)
    if (isLoggedIn === "false" || isLoggedIn === null) {
        const response = redirect(`/login?message=You must log in first to access the host dashboard.&redirect=${pathname}`)
        response.body = true
        throw response
    }
    return null
}