export default {
	hero: {
		title: "aventador",
		subtitle: "real emotions shape the future",
		image: "./media/home/image-cover.webp",
	},
	sliderImages: [
		{
			key: "01",
			index: 1,
			active: false,
			image: "./media/home/image-slider-1.webp",
			alt: "huracan tecnica"
		},
		{
			key: "02",
			index: 2,
			active: false,
			image: "./media/home/image-slider-2.webp",
			alt: "urus"
		},
		{
			key: "03",
			index: 3,
			active: true,
			image: "./media/home/image-slider-3.webp",
			alt: "aventador"
		},
	],
	sliderContent: [
		{
			key: "01",
			index: 1,
			title: "huracán",
			subtitle: "take all your souls to drive",
			link: "/",
		},
		{
			key: "02",
			index: 2,
			title: "urus",
			subtitle: "unlock any road",
			link: "/"
		},
		{
			key: "03",
			index: 3,
			title: "aventador",
			subtitle: "real emotions shape the future",
			link: "/"
		},
	],
	swiperImages: [
		{
			key: "01",
			image: "/media/home/image-reel-1.webp",
			alt: "urus"
		},
		{
			key: "02",
			image: "/media/home/image-reel-2.webp",
			alt: "huracan tecnica"
		},
		{
			key: "03",
			image: "/media/home/image-reel-3.webp",
			alt: "avenatdor"
		},
	],
	swiperContent: [
		{
			key: "01",
			index: 0,
			title: "urus",
			subtitle: "unlock any road",
			link: "/",
			btnContent: "explore the model"

		},
		{
			key: "02",
			index: 1,
			title: "aventador",
			subtitle: "real emotions shape the future",
			link: "/",
			btnContent: "explore the model",
			btnContent2: "open car configurator"
		},
		{
			key: "03",
			index: 2,
			title: "huracán",
			subtitle: "take all your souls to drive",
			link: "/",
			btnContent: "explore the model",
			btnContent2: "open car configurator"
		},
	],
	configTabs: [
		{
			key: "01",
			content: "aventador",
		},
		{
			key: "02",
			content: "huracán",
		},
		{
			key: "03",
			content: "urus",
		}
	],
	articles: [
		{
			key: "01",
			alt: "lamborghini and ducati",
			title: "the ducati streetfighter v4 lamborghini is here",
			description: "Automobili Lamborghini and Ducati renewed their collaboration with the Ducati Streetfighter V4 Lamborghini, an exclusive masterpiece inspired by the Huracán STO.",
			link: "/",
			date: "2 september 2022",
			isMain: true,
		},
		{
			key: "02",
			alt: "lamborghini diablo",
			title: "lamborghini v12 history: diablo",
			link: "/",
			date: "31 august 2022",
		},
		{
			key: "03",
			alt: "urus",
			title: "urus performante: sketching in action",
			link: "/",
			date: "30 august 2022",
		},
	]
}