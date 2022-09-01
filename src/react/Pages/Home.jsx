import Hero from "../Layout/Hero";
import Models from "../Layout/Models";
import Configurator from "../Layout/Configurator";
import data from "../../data/dataHome";
import Section from "../Layout/Section";

export default function Home() {

	return (
		<main>
			<Hero title={data.hero.title} subtitle={data.hero.subtitle} image={data.hero.image}/>
			<Models/>
			<Configurator/>
			<Section className="text-neutral-1 surface-neutral-6" backgroundImage="dealer.jpg" subtitle="dealer locator" titleTop="find your" titleBottom="country dealer"/>
			<div className="test"></div>
		</main>
	);
}

