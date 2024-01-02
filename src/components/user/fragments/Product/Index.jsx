import { Fragment, useEffect, useState } from "react"
import CardProduct from "../../elements/CardProduct/Index"
import { getProducts } from "../../../../services/product.services"
import { useParams } from "react-router-dom"

const Product = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getProducts((data) => {
            setProduct(data)
        })
    }, [])
    return (
        <Fragment>
            <main className="flex flex-wrap gap-4 mb-5">
                { id != null ? product.filter((item) => item.subCategoryId === id).map((item, index) => (
                    <CardProduct key={index}>
                        <CardProduct.Header />
                        <CardProduct.Body name={item.name} price={item.price} />
                    </CardProduct>
                )) : 
                    product.map((item, index) => (
                    <CardProduct key={index}>
                        <CardProduct.Header />
                        <CardProduct.Body name={item.name} price={item.price} />
                    </CardProduct>
                ))}
            </main>
        </Fragment>
    )
}

export default Product