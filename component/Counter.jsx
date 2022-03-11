import {useState, useRef, useEffect, useContext} from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Counter = ({label="OK", jumlahAwal=0})=>{

    let varJumlah = jumlahAwal; // jangan dipakai

    const theme = useContext(ThemeContext) 

    const refInput = useRef();

    const refJumlah = useRef(jumlahAwal);

    const [jumlah, setJumlah] = useState(jumlahAwal)

    const onCounterClick = ()=>{
        // update state
        setJumlah(jumlah+1)
        // update variable
        varJumlah++;
        // update ref
        refJumlah.current++;
        
    }

    useEffect(()=>{
        console.log("component kerender ulang")
        console.log({
            var: varJumlah,
            state: jumlah,
            ref: refJumlah.current
        })
    })

    useEffect(()=>{
        console.log("component mounted")
        refInput.current.focus()
        refInput.current.value = 0;
    }, [])

    return (
        <>
            <input 
                type="text" 
                placeholder='nilai awal'
                ref={refInput}
            />

            <button onClick={onCounterClick} style={{
                    background: theme.dark?'#333':'#fff'
                }}>
                {label}
            </button>                
            <p>jumlah state functional component: {jumlah}</p>
            <p>jumlah var functional component: {varJumlah}</p>
            <p>jumlah ref functional component: {refJumlah.current}</p>
            <pre>
                nilai kontext
                {JSON.stringify(theme)}
            </pre>
        </>
    )
}
export default Counter