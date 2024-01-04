import { Fragment, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../../services/product.services"
import { NumericFormat } from "react-number-format"
import Counter from "../elements/Counter/Index"
import Label from "../elements/Label/Index"
import Input from "../elements/Input/Index"
import CarouselImage from "../fragments/CarouselImage/Index"

const DetailProductLayout = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        getProductById(id, (data)=> {
            setProduct(data)
        } )
    }, [id])

    return (
        <Fragment>
            <main className="w-full flex gap-14 px-28 mt-10" >
                { product.map((item, index) => (
                    <div key={ index } className="w-full">
                        <CarouselImage />
                        <div className="flex justify-between">
                            <div>
                                <h1 className="font-montserrat font-bold text-3xl">{ item.name }</h1>
                                <p className="font-medium text-xl mt-3 text-red"><NumericFormat value={ item.price } displayType="text" thousandSeparator={true} prefix={'Rp.'} /></p>
                            </div>
                            <div className="text-end flex flex-col justify-between">
                                <p className="text-sm font-light">Stok Tersedia</p>
                                <p className="font-montserrat font-bold text-3xl">{ item.stock }</p>
                            </div>
                        </div>

                        <main className="mt-10 text-justify">
                            <p>{ item.description }</p>
                        </main>
                    </div>
                )) }

                <div>
                    <Label title="Jumlah">
                        <Counter />
                    </Label>

                    <Label title="Catatan" style="mt-5">
                        <Input />
                        <Label.Note note="Berikan catatan untuk produk ini" />
                    </Label>
                </div>
            </main>
        </Fragment>
    )
}

export default DetailProductLayout