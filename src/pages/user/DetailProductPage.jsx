import DetailProductLayout from "../../components/user/layouts/DetailProductLayout"
import Navbar from "../../components/user/fragments/Navbar/Index"
import Footer from "../../components/user/fragments/Footer/Index"
import { Fragment } from "react"

const DetailProductPage = () => {
    return (
        <Fragment>
            <Navbar />
    
            <DetailProductLayout />
    
            <Footer />
        </Fragment>
    )
}

export default DetailProductPage