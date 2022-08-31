import {useEffect, useState} from "react";

export default function Tabs(props) {
	const [activeTab, setActiveTab] = useState(0);

	useEffect(() => {
		setActiveTab(props.activeIndex);
	}, []);

	function handleTabClick(index) {
		setActiveTab(index);
		props.handleTabClick(index);
	}

	return (
		<div className="tabs">
			{props.data.map((tab, index) => (
				<button className="tabs__tab" key={tab.key} data-active={index === activeTab} onClick={() => handleTabClick(index)}>{tab.content}</button>
			))}
		</div>
	);
}

