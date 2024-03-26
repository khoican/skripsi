import { getAppUrl } from '../../../../../config/app';

const Carousel = ({ images }) => {
	return (
		<>
			<div className="w-full inline-flex overflow-hidden">
				{images.length > 0 &&
					images.map((image, index) => (
						<img
							key={index}
							src={getAppUrl() + image.image}
							alt=""
							className="w-full object-cover"
						/>
					))}
			</div>
			<div className="w-full inline-flex justify-center gap-3 mt-3">
				{images.map((image, index) => (
					<img
						key={index}
						src={getAppUrl() + image.image}
						alt=""
						className="w-1/4 object-cover"
					/>
				))}
			</div>
		</>
	);
};

export default Carousel;
