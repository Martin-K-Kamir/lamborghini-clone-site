import data from "../../data/dataHome";
import {typewriterAnimation} from "../Utilities";
import React from "react";
import Button from "../components/Button";
import Tabs from "../components/Tabs";
import {useEffect, useState} from "react";


export default function Configurator() {
	const [activeTab, setActiveTab] = useState(0);

	const surfaceStyles = {
		"backgroundImage": `url(/media/home/image-tab-${activeTab + 1}.webp)`,
		"backgroundPosition": "center",
		"backgroundSize": "contain",
		"backgroundRepeat": "no-repeat",
		"transition": "background-image 100ms ease-out"
	}

	function handleTabClick(index) {
		setActiveTab(index);
	}

	function renderContent(data) {
		return data.map((item, i) => {
			if (activeTab === i) {
				return <div className="animation-title-reveal animation-btn-reveal" key={item.key}>
					<h2 className="title-2 f-weight-4">
						<span className="subtitle-3">{typewriterAnimation('configurator', 40, 0)}</span>
						<span className="title">create your</span>
						<span className="title">{item.content}</span>
					</h2>
					<Button href="/" class="btn-hexagon" size="5.5" type="hexa-arrow-right" srOnly={`click to go ${item.content} page`}/>
				</div>
			}
		})
	}

	return (
		<section className="none[screen-md]" style={surfaceStyles}>
			<div className="container">
				<div className="stack space-4">
					<header className="wrap">
						{renderContent(data.configTabs)}
					</header>
					<div className="wrap">
						<Tabs data={data.configTabs} activeIndex={activeTab} handleTabClick={handleTabClick}/>
					</div>
				</div>
			</div>
		</section>
	);
}

