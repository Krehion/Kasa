import data from "../../datas/logements.json";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../../components/header/Header";
import Slideshow from "../../components/slideshow/Slideshow";
import HostName from "../../components/hostname/Hostname";
import Tag from "../../components/tag/Tag";
import Rating from "../../components/rating/Rating";
import Collapse from "../../components/collapse/Collapse";
import Footer from "../../components/footer/Footer";

import "../../style/layout/_accomodation.scss";

export default function Accomodation() {
	const { id } = useParams();
	const dataCurrentPage = data.find((data) => data.id === id);

	const [imageSlider, setImageSlider] = useState([]);

	useEffect(() => {
		if (dataCurrentPage) {
			setImageSlider(dataCurrentPage.pictures);
		}
	}, [id, dataCurrentPage]);

	return (
		<div className="accomodation global-container">
			<Header />
			<main>
				<Slideshow imageSlider={imageSlider} />
				<div className="accomodation__info">
					<div className="accomodation__info__block accomodation__info__block--left">
						<h1>{dataCurrentPage.title}</h1>
						<p className="accomodation__localization">{dataCurrentPage.location}</p>
						<div className="tags-container">
							{dataCurrentPage.tags.map((tag, index) => (
								<Tag key={index} tag={tag} />
							))}
						</div>
					</div>
					<div className="accomodation__info__block accomodation__info__block--right">
						<div className="accomodation__info__host">
							<HostName name={dataCurrentPage.host.name} />
							<img src={dataCurrentPage.host.picture} alt="Host portrait" />
						</div>
						<Rating rating={dataCurrentPage.rating} />
					</div>
				</div>
				<div className="accomodation__info">
					<div className="accomodation__info__block accomodation__info__block--left">
						<Collapse title="Description" content={dataCurrentPage.description} />
					</div>
					<div className="accomodation__info__block accomodation__info__block--right">
						<Collapse title="Équipements" content={dataCurrentPage.equipments} />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
