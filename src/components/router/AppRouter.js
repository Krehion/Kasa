import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Accomodation from "../../pages/accomodation/Accomodation";
import NotFound from "../../pages/notFound/NotFound";

const AppRouter = () => {
	const basename = process.env.NODE_ENV === "production" ? "/Kasa" : "/"; // handle local or github-pages environment dynamically. "Kasa" = repository name

	return (
		<BrowserRouter basename={basename}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/accomodation/:id" element={<Accomodation />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
