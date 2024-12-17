import "../../style/components/_card.scss";
import { Link } from "react-router-dom";

function Card({ id, title, cover }) {
	return (
		<article className="card">
			<Link to={`/accomodation/${id}`} className="card__link" title={title}>
				{""}
			</Link>
			<img src={cover} alt={title} className="card__bkgd" />
			<div className="card__overlay"></div>
			<h3 className="card__title">{title}</h3>
		</article>
	);
}

export default Card;
