import Axios from "axios"
import { useContext } from "react"
import ErrorContext from "../context/ErrorContext"
const HOST = "https://todoapi.webofficial.my.id"

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
                console.log(err.response)
                setErrors(err.response.data.errors)
            }
            throw err
        })
    }
    const API = {
        post: callApi("POST"),
        get: callApi("GET"),
    }

    return [API]
}

export default useApi