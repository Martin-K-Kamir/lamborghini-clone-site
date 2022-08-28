import Button from "./Button";
import React from "react";
import {typewriterAnimation} from "../Utilities";

export default function Hero() {
	const heroImage = "./media/home/image-cover.webp";

	return (
		<header className="cover surface-neutral-6 text-neutral-1" style={{backgroundImage: `url(${heroImage})`}}>
			<div className="cover__container">
					<div className="animation-title-reveal animation-btn-reveal">
						<h1 className="title-3">
							<span className="subtitle-1">{typewriterAnimation("real emotions shape the future", 30, 50)}</span>
							<span className="title">aventador</span>
						</h1>
						<Button href="/" class="btn-hexagon" size="6.6" type="hexa-arrow-right" srOnly="click to go aventador page"/>
					</div>
			</div>
		</header>
	);
}
