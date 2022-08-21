import Button from "./Button";
import React from "react";

export default function App() {
	const coverImage = "./media/home/image-cover.webp";

	const text = "take all your souls to drive"
	const text2 = text.split("").map((letter, index) => {
		return <span key={index}>{letter}</span>
	});

	console.log(text2);

	return (
		<header className="cover surface-neutral-6 text-neutral-1" style={{backgroundImage: `url(${coverImage})`}}>
			<div className="app-container">
				<div className="cover__container container">
					<h1 className="title-3">
						<span className="subtitle-1">{text2}</span>
						<span>aventador</span>
					</h1>
					<Button href="/" class="btn-hexagon" type="hexa-arrow-right" srOnly="click to go huracan tecnica page"/>
				</div>
			</div>
		</header>
	);
}
