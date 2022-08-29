import Button from "./Button";
import React, {useRef, useState} from "react";

export default function Swiper() {
	const reelRef = useRef(null);
	const itemRefOne = useRef(null);
	const itemRefTwo = useRef(null);
	const itemRefThree = useRef(null);
	const [savePos, setSavePos] = useState(0);
	const [savePosCar, setSavePosCar] = useState(1)

	const [mouseDown, setMouseDown] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);


	function test1(e) {
		setMouseDown(true);
		setStartX(e.pageX - reelRef.current.offsetLeft);
		setScrollLeft(reelRef.current.scrollLeft);
	}

	function test2(e) {
		if (!mouseDown) return;
		e.preventDefault();
		const x = e.pageX - reelRef.current.offsetLeft;
		const walk = (x - startX) * 1.5;
		reelRef.current.scrollLeft = scrollLeft - walk;


		const scrollLeftAndWalk = scrollLeft - walk;

		// console.log(scrollLeft - walk)
		// console.log("car1:", (itemRefOne.current.offsetLeft + itemRefOne.current.offsetWidth) / 2)
		// console.log("car2:", (itemRefTwo.current.offsetLeft + itemRefTwo.current.offsetWidth) / 2)

		console.log(scrollLeftAndWalk > itemRefOne.current.offsetLeft + itemRefOne.current.offsetWidth / 2)
		console.log(scrollLeftAndWalk > itemRefTwo.current.offsetLeft + itemRefTwo.current.offsetWidth / 2)

		if (scrollLeftAndWalk < itemRefTwo.current.offsetLeft + itemRefTwo.current.offsetWidth / 2) {
			setSavePos(itemRefOne.current.offsetLeft);
		}

		if (scrollLeftAndWalk > itemRefOne.current.offsetLeft + itemRefOne.current.offsetWidth / 2) {
			setSavePos(itemRefTwo.current.offsetLeft + 40);
		}

		if (scrollLeftAndWalk > itemRefTwo.current.offsetLeft + itemRefTwo.current.offsetWidth / 2) {
			setSavePos(itemRefThree.current.offsetLeft + 40);
		}

		if (scrollLeftAndWalk > itemRefThree.current.offsetLeft + itemRefThree.current.offsetWidth / 2) {
			setSavePos(itemRefThree.current.offsetLeft + 40);
		}
	}

	function test3(e) {
		setMouseDown(false);
		console.log(savePos)
		reelRef.current.scrollTo({
			left: savePos,
			behavior: "smooth"
		})
	}

	return (
		<section className="swiper">
			<div className="swiper__container">
				<h2 className="subtitle-3">Models</h2>
			</div>
			<div className="swiper__reel" ref={reelRef} onMouseDown={e => test1(e)} onMouseMove={e => test2(e)} onMouseLeave={test3} onMouseUp={test3}>
				<div className="swiper__item">
					<img src="./media/home/image-reel-1.webp" ref={itemRefOne} alt=""/>
				</div>
				<div className="swiper__item">
					<img src="./media/home/image-reel-2.webp" ref={itemRefTwo} alt=""/>
				</div>
				<div className="swiper__item">
					<img src="./media/home/image-reel-3.webp" ref={itemRefThree} alt=""/>
				</div>
			</div>
			<div className="swiper__container">
				<h3 className="title-2">
					<span className="title f-weight-4">urus</span>
					<span className="subtitle-1">unlock any road</span>
				</h3>
				<Button href="/" class="btn-primary" content="explore the model"/>
			</div>
		</section>
	);
}

