import { Fragment, useState, useEffect } from "react"
import Category from "./../elements/Category/Index"
import Product from "../fragments/Product/Index"
import { useParams } from "react-router-dom"
import { getProducts } from "../../../services/product.services"

const ProductLayouts = () => {
    const { id } = useParams()
    const [ product, setProduct ] = useState([])

    useEffect(() => {
        getProducts((data) => {
            setProduct(data)
        })
    }, [])
    
    return (
        <Fragment>
            <main className="w-full flex gap-14 px-28 mt-10">
                <Category />

                <main className="w-9/12">
                    <div>
						<h1 className='text-montserrat font-bold text-xl mb-5'>Menampilkan {' '}
                        { id != null ? product.filter((item) => item.subCategoryId === id).length : product.length }
                        {' '} Produk</h1>
						<Product />
					</div>
                </main>
            </main>
        </Fragment>
    )
}

export default ProductLayouts