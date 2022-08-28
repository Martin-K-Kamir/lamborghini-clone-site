import Navigation from "./react/components/Navigation";
import Hero from "./react/components/Hero";
import Slider from "./react/components/Slider";

import dataHome from "./dataHome";

export default function App() {

	return (
		<div className="App">
			<Navigation/>
			<main>
				<Hero/>
				<Slider imagesData={dataHome.modelsImages} contentData={dataHome.modelsContent}/>
				<div className="test"></div>
			</main>
		</div>
	);
}

