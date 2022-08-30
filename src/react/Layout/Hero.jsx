import Button from "../components/Button";
import React from "react";
import {typewriterAnimation} from "../Utilities";

export default function Hero(props) {
	return (
		<header className="cover surface-neutral-6 text-neutral-1" style={{backgroundImage: `url(${props.image})`}}>
			<div className="cover__container">
					<div className="animation-title-reveal animation-btn-reveal">
						<h1 className="title-3">
							<span className="subtitle-1">{typewriterAnimation(`${props.subtitle}`, 30, 50)}</span>
							<span className="title">{props.title}</span>
						</h1>
						<Button href="/" class="btn-hexagon" size="6.6" type="hexa-arrow-right" srOnly="click to go aventador page"/>
					</div>
			</div>
		</header>
	);
}
