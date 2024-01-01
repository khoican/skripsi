import { ShoppingCartIcon as CartOutline } from "@heroicons/react/24/outline"
import { ShoppingCartIcon as CartSolid } from "@heroicons/react/24/solid"
import { NumericFormat } from "react-number-format"
import { useState } from "react"
import { Link } from "react-router-dom"

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
        <Link to={'/'}>
            <div className="w-full h-60 overflow-hidden">
                <img src="https://picsum.photos/200/300" alt="product" className="w-full object-cover hover:scale-150"/>
            </div>
        </Link>
    )
}

const Body = ( props ) => {
    const { name, price } = props

    const [icon, setIcon] = useState(false)
    const handleIcon = () => {
        setIcon(!icon)
    }

    return (
        <div className="flex justify-between items-center px-5 py-5">
            <div>
                <h1 className="font-montserrat font-semibold mb-5">{name}</h1>
                <NumericFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} className="text-red text-xl" />
            </div>
            <Link to={'/'} onClick={handleIcon} >
                { icon ? <CartSolid className="w-8 h-8 text-green" /> : <CartOutline className="w-8 h-8 text-green" /> }
            </Link>
        </div>
    )
}

CardProduct.Header = Header
CardProduct.Body = Body

export default CardProduct