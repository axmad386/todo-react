/* eslint-disable @next/next/link-passhref */
import Link from "next/link"
import useApi from "../hooks/useApi"
import style from "./CardProduct.module.css"
const CardProduct = ({product, onDeleted})=>{
    const [API] = useApi()
    const prepareDelete = async ()=>{
        const ok = confirm("Apakah kamu yakin?")
        if(ok){
            try {
                await API.delete("/product/"+product.id)
                alert("Produk berhasil dihapus")
                // hapus array yang di delete
                onDeleted(product.id)
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <div className={style.cardBox}>
            <h3>
                {product.product_name}
            </h3>
            <div>{product.product_sku}</div>
            <small>{product.description}</small>
            <br />
            <button onClick={prepareDelete}>delete</button>
            <Link href={"/edit-product/"+product.id}>
            <button>edit</button>
            </Link>
        </div>
    )
}

export default CardProduct