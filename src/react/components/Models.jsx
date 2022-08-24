import React from "react";
import Button from "./Button";

export default function Models() {
	return (
		<section className="carousel surface-neutral-6 text-neutral-1">
			<div className="carousel__reel">
				<div className="carousel__item">
					<img src="" alt=""/>
				</div>
				<div className="carousel__item">
					<img src="" alt=""/>
				</div>
				<div className="carousel__item">
					<img src="" alt=""/>
				</div>
			</div>
			<div className="container">
				<div className="stack space-3">
					<div className="wrap">
							<h2 className="subtitle-3">Models</h2>
							<Button href="/" class="btn-hexagon space-1" type="hexa-arrow-left" srOnly="click to go huracan tecnica page"/>
							<Button href="/" class="btn-hexagon space-1" type="hexa-arrow-right" srOnly="click to go huracan tecnica page"/>
					</div>
					<div className="wrap">
						<div className="animation-title-reveal">
							<h3 className="title-3">
								<span className="title">aventador</span>
								<span className="subtitle-1">real emotions shape the future</span>
							</h3>
							<Button href="/" class="btn-hexagon space-2" type="hexa-plus" contenJustify="start" content="explore the model"/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
