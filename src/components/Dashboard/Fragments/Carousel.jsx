import { Carousel } from 'flowbite-react';

const CarouselImage = (props) => {
	const { children } = props;
	return (
		<>
			<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
				<Carousel slide={false}>{children}</Carousel>
			</div>
		</>
	);
};

export default CarouselImage;
