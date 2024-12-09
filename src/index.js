import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./style/style.scss";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Header from "./components/header/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/about" element={<About />} /> */}
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
