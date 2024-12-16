import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Collapse from "../../components/collapse/Collapse";
import Footer from "../../components/footer/Footer";

export default function About() {
	const aboutDatas = [
		{
			id: "1",
			title: "Fiabilité",
			content:
				"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
		},
		{
			id: "2",
			title: "Respect",
			content:
				"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
		},
		{
			id: "3",
			title: "Service",
			content:
				"La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
		},
		{
			id: "4",
			title: "Sécurité",
			content:
				"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
		}
	];

	return (
		<div className="about global-container">
			<Header />
			<Banner />
			<main>
				{aboutDatas.map((data) => {
					return <Collapse key={data.id} title={data.title} content={data.content} />;
				})}
			</main>
			<Footer />
		</div>
	);
}
