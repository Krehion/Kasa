import "../../style/components/_card.scss";

function Card({ id, title, cover }) {
	return (
		<article className="card">
			<a href={`/${id}`} className="card__link" title={title}>
				{""}
			</a>
			<img src={cover} alt={title} className="card__bkgd" />
			<div className="card__overlay"></div>
			<h3 className="card__title">{title}</h3>
		</article>
	);
}

export default Card;
