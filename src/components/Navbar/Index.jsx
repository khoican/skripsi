import { Fragment } from "react"
import { Link } from 'react-router-dom'
import { HomeIcon, ShoppingBagIcon, ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    return (
        <Fragment>
            <nav className="px-28 py-5 flex justify-between items-center">
                <div className="flex items-center gap-5">
                    <div className="w-20 h-20 bg-slate-400"></div>
                    <div className="font-montserrat font-bold">
                        <h1 className="text-2xl">AS-SAKINAH MART</h1>
                        <p className="text-sm tracking-wider">KOPWAN AISYIYAH JEMBER</p>
                    </div>
                </div>

                <form action="" className="flex items-center">
                    <input type="text" placeholder="Cari Produk yang Anda Inginkan" className="border border-green-600 rounded-xl px-5 py-2 w-96 text-sm"/>
                    <button>
                        <MagnifyingGlassIcon className="w-5 h-5 hover:text-green-600 relative right-8"/>
                    </button>
                </form>

                <div className="flex items-center gap-10">
                    <Link to="/"><HomeIcon className="w-8 h-8 hover:text-green-600" /></Link>
                    <Link to="/"><ShoppingBagIcon className="w-8 h-8 hover:text-green-600" /></Link>
                    <Link to="/"><ShoppingCartIcon className="w-8 h-8 hover:text-green-600" /></Link>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar