import Slider from "../components/Slider";
import Swiper from "../components/Swiper";
import data from "../../data/dataHome";

export default function Models() {
	return (
		<>
			<Slider imagesData={data.sliderImages} contentData={data.sliderContent}/>
			<Swiper imagesData={data.swiperImages} contentData={data.swiperContent}/>
		</>
	);
}

