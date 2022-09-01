import React from "react";
import Button from "../components/Button";


export default function Dealer() {
	return (
		<section className="text-neutral-1 surface-neutral-6" style={styles}>
			<div className="container">
				<span className="subtitle-3">dealer locator</span>
				<h2 className="title-1 f-weight-4">
					<span className="title">find your</span>
					<span className="title">country dealer</span>
				</h2>
				<Button href="/" class="btn-hexagon" size="5.5" type="hexa-arrow-right" srOnly="click to go dealer locator page"/>
			</div>
		</section>
	);
}

