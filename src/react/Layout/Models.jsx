import Slider from "../components/Slider";
import Swiper from "../components/Swiper";
import data from "../../data/dataHome";
import {useBreakpoint} from "../Hooks"

export default function Models() {
	const points = useBreakpoint()

	// console.log(points)
	return (
		<>
			<Slider imagesData={data.modelsImages} contentData={data.modelsContent}/>
			<Swiper/>
		</>
	);
}

