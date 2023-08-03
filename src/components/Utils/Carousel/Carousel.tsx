import { useState } from "react";
import "./Carousel.styles.scss";
import { Button } from "../../Inputs";
import { ProjectDisplay } from "../ProjectDisplay";

type CarouselType = {
	items: {
		title: string;
		description: string;
		src: string;
		alt: string;
	}[];
};

const Carousel = (props: CarouselType) => {
	const { items } = props;
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
			<div
				className="carousel-container"
				style={{
					transform: `translateX(-${currentItemIndex * 100}%)`,
				}}
			>
				{items.map((item) => {
					const { title, description, src, alt } = item;
					return (
						<ProjectDisplay title={title} description={description} src={src} alt={alt} />
					);
				})}
			</div>
			{/* <div className="controls"> */}
			<Button
				variant="carousel-prev-button"
				handleClick={handlePrevButtonClick}
				label="Previous"
			/>
			<Button
				variant="carousel-next-button"
				handleClick={handleNextButtonClick}
				label="Next"
			/>
			{/* </div> */}
		</div>
	);
};

export default Carousel;
