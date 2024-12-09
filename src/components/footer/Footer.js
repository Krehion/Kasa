import "../../style/layout/_footer.scss";
import LogoWhite from "../../assets/logo-white.svg";

function Footer() {
	return (
		<footer>
			<img src={LogoWhite} alt="Kasa" />
			<p>© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}

export default Footer;
