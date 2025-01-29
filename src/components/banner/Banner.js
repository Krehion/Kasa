import { useLocation } from "react-router-dom";
import "../../style/components/_banner.scss";
import BannerHome from "../../assets/home-cover.jpg";
import BannerAbout from "../../assets/about-cover.jpg";

function Banner() {
	const location = useLocation();

	// Remove "/Kasa" only in production (GitHub Pages)
	const currentRoute = location.pathname.replace(/^\/Kasa/, "").replace(/^\/$/, "");

	const banners = {
		"": {
			image: BannerHome,
			slogan: "Chez vous, partout et ailleurs"
		},
		"/about": {
			image: BannerAbout,
			slogan: null // No slogan on this page
		}
	};

	return (
		<section className="banner">
			{banners[currentRoute]?.image && <img src={banners[currentRoute].image} alt="" className="banner__bkgd" />}
			<div className="banner__overlay"></div>
			{banners[currentRoute]?.slogan && <h2 className="banner__slogan">{banners[currentRoute].slogan}</h2>}
		</section>
	);
}

export default Banner;
