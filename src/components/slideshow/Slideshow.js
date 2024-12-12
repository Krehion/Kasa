import "../../style/components/_slideshow.scss";

import arrowLeft from "../../assets/arrow-slideshow-left.svg";
import arrowRight from "../../assets/arrow-slideshow-right.svg";

import { useState } from "react";

function Slideshow({ imageSlider }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex(currentIndex + 1);
		if (currentIndex === imageSlider.length - 1) setCurrentIndex(0);
	};

	const prevSlide = () => {
		setCurrentIndex(currentIndex - 1);
		if (currentIndex === 0) setCurrentIndex(imageSlider.length - 1);
	};

	return (
		<section style={{ backgroundImage: `url(${imageSlider[currentIndex]})` }} className="slideshow">
			{imageSlider.length > 1 && (
				<>
					<img
						className="slideshow__arrow slideshow__arrow--left"
						src={arrowLeft}
						alt="show previous slider"
						onClick={prevSlide}
					/>
					<img
						className="slideshow__arrow slideshow__arrow--right"
						src={arrowRight}
						alt="show next slider"
						onClick={nextSlide}
					/>

					{document.body.clientWidth > 768 && (
						<p className="slideshow__counter">
							{currentIndex + 1} / {imageSlider.length}
						</p>
					)}
				</>
			)}
		</section>
	);
}

export default Slideshow;
