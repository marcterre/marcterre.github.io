import "./Carousel.styles.scss";
import { useState } from "react";
import { Button } from "../../Inputs";
import { ProjectDisplay } from "../ProjectDisplay";

type CarouselType = {
	items: {
		title: string;
		techStack: string[];
		src?: string;
		alt?: string;
	}[];
	carouselTitle?: string;
};

const Carousel = (props: CarouselType) => {
	const { items, carouselTitle } = props;

	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

	const handlePrevButtonClick = () => {
		if (currentSlideIndex > 0) {
			setCurrentSlideIndex((prevIndex) => prevIndex - 4);
		}
	};

	const handleNextButtonClick = () => {
		if (currentSlideIndex < 4) {
			setCurrentSlideIndex((prevIndex) => prevIndex + 4);
		}
	};

	return (
		<div className="carousel">
			<h2 className="carousel-title">{carouselTitle}</h2>
			<div className="carousel-wrapper">
				<div
					className="carousel-container"
					style={{
						transform: `translateX(-${currentSlideIndex * (100 / 4)}%)`,
					}}
				>
					{items.map((item, index) => {
						const { title, techStack, src, alt } = item;
						return (
							<ProjectDisplay
								key={index}
								title={title}
								techStack={techStack}
								src={src}
								alt={alt}
							/>
						);
					})}
				</div>
			</div>
			<div className="controls">
				{currentSlideIndex < Math.ceil(items.length / 4) - 1 && (
					<Button
						variant="carousel-next-button"
						handleClick={handleNextButtonClick}
						label="Next"
					/>
				)}
				{currentSlideIndex > 0 && (
					<Button
						variant="carousel-prev-button"
						handleClick={handlePrevButtonClick}
						label="Previous"
					/>
				)}
			</div>
		</div>
	);
};

export default Carousel;
