import { useState } from "react"
import Button from "../component/Button"
import Input from "../component/Input"
import Layout from "../component/Layout"
import useApi from "../hooks/useApi"

const AddProduct = ()=>{

    const [API] = useApi();

    const [productName, setProductName] = useState("")
    const [productSku, setProductSku] = useState("")
    const [description, setDescription] = useState("")

    const saveProduct = async (e)=>{
        e.preventDefault();
        try {
            await API.post("/product", {
                product_name: productName,
                product_sku: productSku,
                description
            })
            alert("Produk berhasil di tambahkan")
            
        } catch (error) {
            
        }
    }
    return (
        <Layout>
            <h1>Tambah Produk</h1>
            <form onSubmit={saveProduct}>
                <Input name="product_name" value={productName} onTextChange={setProductName} />
                <Input name="product_sku" value={productSku} onTextChange={setProductSku}/>
                <Input name="description" value={description} onTextChange={setDescription}/>
                <Button>
                    SAVE
                </Button>
            </form>
        </Layout>
    )
}

export default AddProduct