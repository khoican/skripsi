import { Fragment } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom"
import FooterComponent from "../../elements/FooterComponent/Index"

const Footer = () => {
    return (
        <Fragment>
            <footer className="mt-20 bg-primary text-white px-28 py-10 relatiive bottom-0">
                <div className="flex justify-between py-5 border-b border-b-white">
                    <FooterComponent title="Kontak Kami">
                        <FooterComponent.Menu style="mt-8">
                            <FooterComponent.SubTitle subTitle="Alamat" />
                            <p className="font-light text-sm">Jl. Rotawu 2 No. 38 Jember - Jawa Timur</p>
                        </FooterComponent.Menu>

                        <FooterComponent.Menu style="mt-5">
                            <FooterComponent.SubTitle subTitle="Sosial Media" />

                            <div className="flex gap-2 mt-2">
                                <IconStyle icon={faWhatsapp} />
                                <IconStyle icon={faInstagram} />
                            </div>
                        </FooterComponent.Menu>
                    </FooterComponent>

                    <FooterComponent title="As-Sakinah Mart" style="text-end">
                        <FooterComponent.Menu style="mt-8 flex flex-col gap-2">
                            <Link to={'/'}>Beranda</Link>
                            <Link to={'/products'}>Produk</Link>
                            <Link to={'/cart'}>Keranjang</Link>
                        </FooterComponent.Menu>
                    </FooterComponent>
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