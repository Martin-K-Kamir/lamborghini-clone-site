import React from "react";
import Button from "./Button";

export default function Models() {
	return (
		<section className="carousel surface-neutral-6 text-neutral-1">
			<div className="carousel__items">
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
			<div className="cover__container">
				<div className="stack space-3">
					<div className="wrap">
						<div className="space-1">
							<h2 className="subtitle-3">Models</h2>
							<Button href="/" class="btn-hexagon" type="hexa-arrow-left" srOnly="click to go huracan tecnica page"/>
							<Button href="/" class="btn-hexagon" type="hexa-arrow-right" srOnly="click to go huracan tecnica page"/>
						</div>
					</div>
					<div className="wrap">
						<div className="space-2 animation-reveal">
							<h3 className="title-3">
								<span className="title">aventador</span>
								<span className="subtitle-1">real emotions shape the future</span>
							</h3>
							<Button href="/" class="btn-hexagon" type="hexa-plus" srOnly="click to go huracan tecnica page"/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
