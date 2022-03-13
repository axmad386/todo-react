import { useEffect, useState } from "react";
import Counter from "../component/Counter"
import CounterClass from "../component/CounterClass"
import Layout from "../component/Layout"
import { ThemeContext } from "../context/ThemeContext";

const Props = ()=>{

    

    return (
    <Layout dark={dark} toggleDarkMode={toggleDarkMode}>
        <ThemeContext.Provider value={{
            dark: dark
        }}>
            <h1>Belajar Props</h1>
            <Counter label="HITUNG" jumlahAwal={100}/>
            <CounterClass label="HITUNG CLASS"/>
        </ThemeContext.Provider>
    </Layout>

    )
}
export default Props