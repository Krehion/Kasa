import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<div className="error global-container">
			<Header />
			<main>
				<p className="error__number">404</p>
				<p className="error__description">Oups! La page que vous demandez n'existe pas.</p>
				<Link to="/" className="error__link">
					Retourner sur la page d'accueil
				</Link>
			</main>
			<Footer />
		</div>
	);
}
