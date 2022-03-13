import Counter from "../component/Counter"
import CounterClass from "../component/CounterClass"
import Layout from "../component/Layout"

const Props = ()=>{

    

    return (
    <Layout>
            <h1>Belajar Props</h1>
            <Counter label="HITUNG" jumlahAwal={100}/>
            <CounterClass label="HITUNG CLASS"/>
    </Layout>

    )
}
export default Props