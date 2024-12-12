import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./style/style.scss";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Accomodation from "./pages/accomodation/Accomodation";
import NotFound from "./pages/notFound/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/accomodation/:id" element={<Accomodation />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
