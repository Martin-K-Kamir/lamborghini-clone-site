import Navbar from "./react/components/Navbar";
import Hero from "./react/components/Hero";

export default function App() {

	return (
		<div className="App">
			<Navbar/>
			<main>
				<Hero/>

				<div className="test"></div>
			</main>
		</div>
	);
}

// section budou mít padding, které budu modifikovat pomocí space props utility
// text elementy budou mít předem nastavené spacingy, které se dají upravovat pomocí space props utility
