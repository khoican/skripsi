import { Fragment } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <Fragment>
            <footer className="mt-20 bg-primary text-white px-28 py-10">
                <div className="flex justify-between py-5 border-b border-b-white">
                    <div>
                        <h1 className="font-montserrat text-2xl font-bold">Kontak Kami</h1>

                        <div className="mt-8">
                            <h3 className="font-montserrat text-md font-semibold">Alamat</h3>
                            <p className="text-md font-light">Jl. Rotawu 2 No. 38 Jember - Jawa Timur</p>
                        </div>

                        <div className="mt-5">
                            <h3 className="font-montserrat text-md font-semibold">Sosial Media</h3>
                            <div className="flex gap-3 mt-2">
                                <IconStyle icon={faWhatsapp} />
                                <IconStyle icon={faInstagram} />
                            </div>
                        </div>
                    </div>

                    <div className="text-end">
                        <h1 className="font-montserrat text-2xl font-bold">As-Sakinah Mart</h1>

                        <div className="mt-8 flex flex-col">
                            <Link to={'/'}>Beranda</Link>
                            <Link to={'/products'}>Produk</Link>
                            <Link to={'/cart'}>Keranjang</Link>
                        </div>
                    </div>
                </div>
                <div className="py-2">
                    <p className="text-sm">As-Sakinah Mart @ 2023</p>
                </div>
            </footer>
        </Fragment>
    )
}

const IconStyle = ( props ) => {
    const { icon } = props
    return (
        <Fragment>
            <div className="w-6 h-6 bg-white text-primary text-md flex justify-center items-center rounded-full">
                <FontAwesomeIcon icon={icon} />
            </div>
        </Fragment>
    )
}

export default Footer