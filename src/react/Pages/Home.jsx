import Hero from "../Layout/Hero";
import Models from "../Layout/Models";
import data from "../../data/dataHome";

export default function Home() {

	return (
		<main>
			<Hero title={data.hero.title} subtitle={data.hero.subtitle} image={data.hero.image}/>
			<Models/>
			<div className="test"></div>
		</main>
	);
}

