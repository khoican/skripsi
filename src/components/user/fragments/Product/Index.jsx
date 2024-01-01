import { Fragment, useEffect, useState } from "react"
import CardProduct from "../../elements/CardProduct/Index"
import { getProducts } from "../../../../services/product.services"

const Product = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        getProducts((data) => {
            setProduct(data)
        })
    }, [])
    return (
        <Fragment>
            <main className="flex flex-wrap gap-4 mb-5">
                { product.map((item, index) => (
                    <CardProduct key={index}>
                        <CardProduct.Header />
                        <CardProduct.Body name={item.name} price={item.price} />
                    </CardProduct>
                )) }
            </main>
        </Fragment>
    )
}

export default Product