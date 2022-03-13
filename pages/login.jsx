import { useState, useContext, useEffect} from "react"
import Input from "../component/Input"
import Layout from "../component/Layout"
import Button from "../component/Button"
import useApi from "../hooks/useApi"
import ErrorContext from "../context/ErrorContext"
import { useRouter } from "next/router"
const Login = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState(null)
    const [API] = useApi()
    const {errors} = useContext(ErrorContext)
    const router = useRouter()

    const doLogin = (e)=>{
        e.preventDefault()
        API.post("/login", {
            email,
            password,
            device_name: "Android"
        })
        .then(data=>{
            setToken(data.token)
            localStorage.setItem("token", data.token)
            // pindah ke halaman todo
            router.replace("/todo")
        })
        .catch(err=>{})
    }

    useEffect(()=>{
        if(localStorage.getItem("token")){
            router.replace("/product")
        }
    }, []) // on mount / on document ready
    return (
        <Layout>
            <form onSubmit={doLogin}>
                <Input name="email" value={email} onTextChange={setEmail}/>
                <Input name="password" value={password} onTextChange={setPassword}/>
                <Button>
                    LOGIN
                </Button>
            </form>
            TOKEN: {token}
        </Layout>
    )
}

export default Login