import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Button from "../../component/Button";
import Input from "../../component/Input";
import Layout from "../../component/Layout"
import useApi from "../../hooks/useApi";

const EditProduct = ()=>{
    const router = useRouter();
    const [API] = useApi();
    const {id} = router.query
    const [product, setProduct] = useState({})


    const getDetailProduct = async ()=>{
        if(id){
            const data = await API.get("/product/"+id)
            setProduct(data)
        }
    }

    const setProductData = (key, value) =>{
        setProduct(old => ({
            ...old,
            [key]: value
        }))
    }

    const saveProduct = async (e)=>{
        e.preventDefault();
        try {
            await API.patch("/product/"+id, product)
            alert("Produk berhasil di ubah")
            
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        getDetailProduct()
    },[id])
    return (
        <Layout>
            <h1>Edit Produk ID: {id}</h1>
            <form onSubmit={saveProduct}>
                <Input name="product_name" value={product.product_name} onTextChange={(value)=>setProductData("product_name", value)} />
                <Input name="product_sku" value={product.product_sku}  onTextChange={(value)=>setProductData("product_sku", value)} />
                <Input name="description" value={product.description}  onTextChange={(value)=>setProductData("description", value)} />
                <Button>
                    SAVE
                </Button>
            </form>
        </Layout>
    )
}
export default EditProduct