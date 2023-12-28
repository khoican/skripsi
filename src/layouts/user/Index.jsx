import { Fragment } from "react"
import Navbar from "../../components/user/Navbar/Index"
import Category from "../../components/user/Category/Index"

const Index = () => {
    return (
        <Fragment>
            <Navbar />

            <main className="px-28 py-5">
                <Category />
            </main>
        </Fragment>
    )
}

export default Index