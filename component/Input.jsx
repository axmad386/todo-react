import { useContext } from "react"
import ErrorContext from "../context/ErrorContext"
import style from "./Input.module.css"
const Input = ({name, value="", onTextChange})=>{
    const {errors} = useContext(ErrorContext)
    const onInputChange = (e)=>{
        onTextChange(e.target.value)
    }
    return (
        <div style={{marginBottom: "10px"}}>
            <label htmlFor={name}>{name}</label>
            <input type="text" name={name} value={value} className={style.input} onChange={onInputChange}/>
            <small className={style.error}>{errors[name]}</small>
            <br></br>
        </div>

    )
}
export default Input