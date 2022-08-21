import Navbar from "./react/components/Navbar";
import Cover from "./react/components/Cover";

export default function App() {

	return (
		<div className="App">
			<Navbar/>
			<main>
				<Cover/>
				<div className="test"></div>
			</main>
		</div>
	);
}
