import Navigation from "./react/components/Navigation";
import Hero from "./react/components/Hero";
import Models from "./react/components/Models";

export default function App() {

	return (
		<div className="App">
			<Navigation/>
			<main>
				<Hero/>
				<Models/>
				<div className="test"></div>
			</main>
		</div>
	);
}

