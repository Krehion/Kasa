import "../../style/components/_collapse.scss";
import arrow from "../../assets/arrow.svg";
import { useState } from "react";

function Collapse({ title, content }) {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="collapse">
			<div className="collapse__title" onClick={() => setToggle(!toggle)}>
				<h3>{title}</h3>
				<img className={toggle ? "arrow arrow--up" : "arrow arrow--down"} src={arrow} alt="show content" />
			</div>
			<div className={toggle ? "collapse__content" : "collapse__content--hidden"}>
				{Array.isArray(content)
					? content.map((item, index) => {
							return <p key={index}>{item}</p>;
					  })
					: content}
			</div>
		</div>
	);
}

export default Collapse;
