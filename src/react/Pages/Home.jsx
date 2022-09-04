import Hero from "../Layout/Hero";
import Models from "../Layout/Models";
import Configurator from "../Layout/Configurator";
import Dealer from "../Layout/Dealer";
import Blog from "../Layout/Blog";
import data from "../../data/dataHome";

export default function Home() {

	return (
		<main>
			<Hero title={data.hero.title} subtitle={data.hero.subtitle} image={data.hero.image}/>
			<Models/>
			<Configurator/>
			<Dealer/>
			<Blog/>
		</main>
	);
}

