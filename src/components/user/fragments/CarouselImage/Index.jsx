import { Fragment } from "react"
import { Carousel } from "flowbite-react"

const CarouselImage = () => {
    return (
        <div className="w-full h-96 mb-5">
            <Carousel>
                <Image />
                <Image />
                <Image />
                <Image />
            </Carousel>
        </div>
    )
}

const Image = () => {
    return (
        <Fragment>
            <img src="https://picsum.photos/200 " alt="" className="w-full h-full object-cover"/>
        </Fragment>
    )
}

export default CarouselImage