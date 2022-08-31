import data from "../../data/dataHome";
import {typewriterAnimation} from "../Utilities";
import React from "react";
import Button from "../components/Button";

export default function Configurator() {
	return (
		<section>
			<div className="container">
				<div className="stack space-4">
					<div className="wrap">
						<div className="animation-title-reveal animation-btn-reveal">
							<h2 className="title-2 f-weight-4">
								<span className="subtitle-3">{typewriterAnimation('configurator', 60, 50)}</span>
								<span className="title">create your</span>
								<span className="title">huracán</span>
							</h2>
							<Button href="/" class="btn-hexagon" size="5.5" type="hexa-arrow-right" srOnly="click to go aventador page"/>
						</div>
					</div>
					<div className="wrap">
						<div className="tabs">
							<button className="tabs__tab" data-active={true}>Aventador</button>
							<button className="tabs__tab">Huracán</button>
							<button className="tabs__tab">Urus</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

