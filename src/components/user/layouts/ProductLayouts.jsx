import { Fragment } from "react"
import Category from "./../elements/Category/Index"
import Product from "../fragments/Product/Index"

const ProductLayouts = () => {
    return (
        <Fragment>
            <main className="w-full flex gap-14 px-28 mt-10">
                <Category />

                <main className="w-9/12">
                    <div>
						<h1 className='text-montserrat font-bold text-xl mb-5'>Menampilkan Semua Produk</h1>
						<Product />
					</div>
                </main>
            </main>
        </Fragment>
    )
}

export default ProductLayouts