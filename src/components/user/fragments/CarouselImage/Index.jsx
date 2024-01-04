import { Fragment } from "react"
import { Carousel } from "flowbite-react"

const CarouselImage = () => {
    return (
        <Fragment>
            <Carousel>
                <div>
                    <img src="https://picsum.photos/200 " alt="" />
                    <img src="https://picsum.photos/200 " alt="" />
                </div>
            </Carousel>
        </Fragment>
    )
}
export default CarouselImage