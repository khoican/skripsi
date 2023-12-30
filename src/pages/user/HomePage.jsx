import { Fragment } from "react"
import Navbar from "../../components/user/fragments/Navbar/Index"
import Home from "../../components/user/layouts/Home"

const HomePage = () => {
    return (
        <Fragment>
            <Navbar/>

            <Home />
        </Fragment>
    )
}

export default HomePage