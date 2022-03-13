import { createContext } from "react";

const ErrorContext = createContext({
    errors: {},
    setErrors: ()=>{}
})

export default ErrorContext