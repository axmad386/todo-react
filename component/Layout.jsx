import { useState } from "react"

const Layout = ({children, dark, toggleDarkMode})=>{

    return (
        <>
            <nav  style={{
                 backgroundColor: dark?"#333":"#fff",
                 color: "white"
             }}>
                 {JSON.stringify(dark)}
                 <button onClick={toggleDarkMode}>TOGGLE DARK MODE</button>
             </nav>

            <main style={{
                minHeight: "80vh",
                backgroundColor: "#eee"
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