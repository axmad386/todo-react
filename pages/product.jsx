import Link from "next/link";
import { useRouter } from "next/router"
import { useEffect, useState} from "react"
import CardProduct from "../component/CardProduct";
import Layout from "../component/Layout";
import useApi from "../hooks/useApi";

const Todo = ()=>{

    const router = useRouter();
    const [API] = useApi()
    const [products, setProducts] = useState([])
    // on documetn ready / on mount
    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(!token){
            router.replace("/login")
        }

        getProduct()
    }, [])

    const getProduct = async ()=>{
        const data = await API.get("/product")
        setProducts(data)
    }

    const onProductDeleted = (productId) =>{
        setProducts(old=>old.filter(p => p.id!=productId))
    }
    return (
        <Layout>
            <Link href="/add-product">
                <button>TAMBAH PRODUK</button>
            </Link>
            <br></br>
            {products.length==0 && "Belum ada produk"}
            {
                products.map(product=>(
                    <CardProduct product={product} key={product.id} onDeleted={onProductDeleted}/>
                ))
            }

        </Layout>
    )
}
export default Todo