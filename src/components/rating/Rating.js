import "../../style/components/_rating.scss";
import greyStar from "../../assets/star-grey.svg";
import redStar from "../../assets/star-red.svg";

function Rating({ rating }) {
	return (
		<div className="rating">
			{[...Array(5)].map((star, index) => {
				const ratingValue = index + 1;
				return <img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />;
			})}
		</div>
	);
}

export default Rating;
