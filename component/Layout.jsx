import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const Layout = ({children})=>{
    const {dark, setDark} = useContext(ThemeContext)
    const toggleDarkMode = ()=>{
        setDark(!dark)    
    }
    return (
        <>
            <nav  style={{
                 backgroundColor: dark?"#333":"#fff",
                 color: "white"
             }}>
                 <button onClick={toggleDarkMode}>TOGGLE DARK MODE</button>
             </nav>

            <main style={{
                minHeight: "80vh",
                backgroundColor: "#eee",
            }}>
                {children}
            </main>
            <footer
             style={{
                 backgroundColor: "#333",
                 color: "white"
             }}
            >@copy 2022</footer>
        </>
    )
}

export default Layout