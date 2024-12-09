import "../../style/layout/_header.scss";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function Header() {
	const currentRoute = window.location.pathname;

	return (
		<header className="header">
			<h1>
				<img src={Logo} alt="Kasa" />
			</h1>
			<nav>
				<ul className="nav-list">
					<li className={currentRoute === "/" ? "nav-list__item--active" : "nav-list__item"}>
						<Link to="/">Accueil</Link>
					</li>
					<li className={currentRoute === "/about" ? "nav-list__item--active" : "nav-list__item"}>
						<Link to="/about">À propos</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
