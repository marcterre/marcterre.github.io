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

	const [currentItemIndex, setCurrentItemIndex] = useState(0);

	const handlePrevButtonClick = () => {
		if (currentItemIndex > 0) {
			setCurrentItemIndex((prevIndex) => prevIndex - 1);
		}
	};

	const handleNextButtonClick = () => {
		if (currentItemIndex < items.length - 1) {
			setCurrentItemIndex((prevIndex) => prevIndex + 1);
		}
	};

	return (
		<div className="carousel">
			<h2 className="carousel-title">{carouselTitle}</h2>
			<div className="carousel-wrapper">
				<div
					className="carousel-container"
					style={{
						transform: `translateX(-${currentItemIndex * 100}%)`,
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
				{currentItemIndex < items.length - 5 && (
					<Button
						variant="carousel-next-button"
						handleClick={handleNextButtonClick}
						label="Next"
					/>
				)}
				{currentItemIndex > 0 && (
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
