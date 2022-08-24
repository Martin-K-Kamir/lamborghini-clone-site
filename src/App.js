import Navbar from "./react/components/Navbar";
import Hero from "./react/components/Hero";
import Models from "./react/components/Models";

export default function App() {

	return (
		<div className="App">
			<Navbar/>
			<main>
				<Hero/>
				<Models/>
				<div className="test"></div>
			</main>
		</div>
	);
}

