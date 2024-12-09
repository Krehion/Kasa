import "../../style/components/_gallery.scss";

import Card from "../card/Card";
import data from "../../datas/logements.json";

function Gallery() {
	return (
		<section className="gallery">
			{data.map((item) => (
				<Card key={item.id} id={item.id} title={item.title} cover={item.cover} />
			))}
		</section>
	);
}

export default Gallery;
