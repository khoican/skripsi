import { useState } from 'react';
import { getAppUrl } from '../../../../../config/app';
import logo from '/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const Carousel = ({ images }) => {
	const [selectedImage, setSelectedImage] = useState(0);

	if (!images) {
		return <p>Loading...</p>;
	}

	const handleNextImage = () => {
		setSelectedImage((prev) => (prev + 1) % images.length);
	};

	const handlePreviousImage = () => {
		setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
	};

	const isMobile = window.innerWidth < 768;

	return (
		<div className="flex flex-col gap-3 h-full">
			<div className="relative w-full">
				<img
					src={
						images.length > 0
							? getAppUrl() + images[selectedImage].image
							: logo
					}
					alt=""
					className="h-64 md:h-full w-full object-cover mx-auto"
				/>
				{isMobile && (
					<>
						<button
							className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1"
							onClick={handlePreviousImage}
						>
							<FontAwesomeIcon icon={faChevronLeft} />
						</button>
						<button
							className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1"
							onClick={handleNextImage}
						>
							<FontAwesomeIcon icon={faChevronRight} />
						</button>
						<div className="absolute bottom-2 right-2 border border-white text-white px-2 py-1 rounded text-xs">
							{selectedImage + 1} / {images.length}
						</div>
					</>
				)}
			</div>
			{!isMobile && (
				<div className="flex justify-center gap-3 mt-3">
					{images.map((image, index) => (
						<img
							key={index}
							src={getAppUrl() + image.image}
							alt=""
							className={`w-16 h-16 object-cover cursor-pointer ${
								selectedImage === index
									? 'border-2 border-green-500 opacity-100'
									: 'opacity-60'
							}`}
							onClick={() => setSelectedImage(index)}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Carousel;
