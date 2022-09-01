import React from "react";
import Button from "../components/Button";


export default function Section(props) {
	const styles = {
		"backgroundImage": `url(/media/home/image-${props.backgroundImage})`,
		"backgroundPosition": "center",
		"backgroundSize": "cover",
		"backgroundRepeat": "no-repeat",
	}

	return (
		<section className={props.className} style={styles}>
			<div className="container">
				<span className="subtitle-3">{props.subtitle}</span>
				<h2 className="title-2 f-weight-4">
					<span className="title">{props.titleTop}</span>
					<span className="title">{props.titleBottom}</span>
				</h2>
				<Button href="/" class="btn-hexagon" size="5.5" type="hexa-arrow-right" srOnly="click to go aventador page"/>
			</div>
		</section>
	);
}

