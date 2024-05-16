import { Carousel } from 'flowbite-react';

const CarouselImage = (props) => {
	const { children } = props;
	return (
		<>
			<div className="h-56 sm:h-64 xl:h-80 2xl:h-96 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-lg hover:shadow-xl duration-300">
				<Carousel slide={false}>{children}</Carousel>
			</div>
		</>
	);
};

export default CarouselImage;
