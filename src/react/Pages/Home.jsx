import Hero from "../Layout/Hero";
import Models from "../Layout/Models";
import Configurator from "../Layout/Configurator";
import data from "../../data/dataHome";
import Dealer from "../Layout/Dealer";

export default function Home() {

	return (
		<main>
			<Hero title={data.hero.title} subtitle={data.hero.subtitle} image={data.hero.image}/>
			<Models/>
			<Configurator/>
			<Dealer/>
			<div className="test"></div>
		</main>
	);
}

