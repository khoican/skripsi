import { ShoppingCartIcon } from "@heroicons/react/24/outline"

const CardProduct = ( props ) => {
    const { children } = props

    return (
        <div className="shadow-xl w-64">
            { children }
        </div>
    )
}

const Header = () => {
    return (
        <div>
            <img src="https://picsum.photos/200/300" alt="product" className="w-full h-60 object-cover"/>
        </div>
    )
}

const Body = ( props ) => {
    const { name, price } = props

    return (
        <div className="flex justify-between items-center px-5 py-5">
            <div>
                <h1 className="font-montserrat font-semibold">{name}</h1>
                <p className="text-xl text-red mt-3">Rp. {price}</p>
            </div>
            <ShoppingCartIcon className="w-7 h-7" />
        </div>
    )
}

CardProduct.Header = Header
CardProduct.Body = Body

export default CardProduct