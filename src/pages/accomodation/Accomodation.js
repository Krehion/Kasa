import data from "../../datas/logements.json";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../../components/header/Header";
import Slideshow from "../../components/slideshow/Slideshow";
import Collapse from "../../components/collapse/Collapse";
import Footer from "../../components/footer/Footer";

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

				<div>
					<h1>{dataCurrentPage.title}</h1>
					<p>{dataCurrentPage.location}</p>
					<div>{/* tags here */}</div>
				</div>
				<div>
					<p>{dataCurrentPage.host.name}</p>
					<img src={dataCurrentPage.host.picture} alt="Host portrait" />
					<div>{/* rating here */}</div>
				</div>
				<div>
					<div>
						<Collapse title="Description" content={dataCurrentPage.description} />
					</div>
					<div>
						<Collapse title="Équipements" content={dataCurrentPage.equipments} />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
