import Slider from "../components/Slider";
import Swiper from "../components/Swiper";
import data from "../../data/dataHome";
import {useBreakpoint} from "../Hooks"

export default function Models() {
	const points = useBreakpoint()

	// TODO LATER
	// console.log(points)
	return (
		<>
			<Slider imagesData={data.sliderImages} contentData={data.sliderContent}/>
			<Swiper imagesData={data.swiperImages} contentData={data.swiperContent}/>
		</>
	);
}

