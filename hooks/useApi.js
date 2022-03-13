import Axios from "axios"
import { useContext } from "react"
import ErrorContext from "../context/ErrorContext"
const HOST = process.env.NEXT_PUBLIC_HOST

const useApi = ()=>{
    const {errors, setErrors} = useContext(ErrorContext)
    const callApi = (method) => (url, input) => {
        return Axios({
            method,
            baseURL: HOST,
            url,
            data: input
        }).then(res=>{
            setErrors({})
            return res.data.data 
        })
        .catch(err=>{
            if(err.response.status == 422){
                if(err.response.data.errors){
                    setErrors(err.response.data.errors)
                }
                alert(err.response.data.message)
            }
            throw err
        })
    }
    const API = {
        post: callApi("POST"),
        get: callApi("GET"),
        delete: callApi("DELETE"),
        patch: callApi("PATCH")
    }

    return [API]
}

export default useApi