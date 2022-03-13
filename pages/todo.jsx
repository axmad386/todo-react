import { useRouter } from "next/router"
import { useEffect } from "react"

const Todo = ()=>{

    const router = useRouter();
    // on documetn ready / on mount
    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(!token){
            router.replace("/login")
        }
    }, [])
    return (
        "HALAMAN TODO"
    )
}
export default Todo