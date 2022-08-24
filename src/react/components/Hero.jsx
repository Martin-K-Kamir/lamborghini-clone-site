import Button from "./Button";
import React from "react";

export default function Hero() {
	const heroImage = "./media/home/image-cover.webp";

	function typewriterEffect(string, duration, delay) {
		return string.split("").map((letter, index) => {
			return <span style={{animationDelay: (duration * index) + delay + "ms"}} key={index}>{letter}</span>
		});
	}

	return (
		<header className="cover surface-neutral-6 text-neutral-1" style={{backgroundImage: `url(${heroImage})`}}>
			<div className="cover__container">
					<div className="animation-title-reveal animation-btn-reveal">
						<h1 className="title-3">
							<span className="subtitle-1">{typewriterEffect("real emotions shape the future", 30, 50)}</span>
							<span className="title">aventador</span>
						</h1>
						<Button href="/" class="btn-hexagon" size="6.6" type="hexa-arrow-right" srOnly="click to go huracan tecnica page"/>
					</div>
			</div>
		</header>
	);
}
