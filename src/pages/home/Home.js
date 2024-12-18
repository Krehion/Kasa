import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Gallery from "../../components/gallery/Gallery";
import Footer from "../../components/footer/Footer";

export default function Home() {
	return (
		<div className="home global-container">
			<Header />
			<Banner />
			<Gallery />
			<Footer />
		</div>
	);
}
