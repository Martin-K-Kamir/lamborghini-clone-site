import React, {useRef, useState} from "react";
import Button from "./Button";
import {typewriterAnimation} from "../Utilities";

export default function Models() {
	const itemsRef = useRef(null);
	const [count, setCount] = useState(0);
	const [countA, setCountA] = useState(0);


	function handleSlideLeft() {
		const slide0 = document.getElementById("slide-0");
		const slide1 = document.getElementById("slide-1");
		const slide2 = document.getElementById("slide-2");

		if (countA === 0) {
			itemsRef.current.insertAdjacentHTML("beforeend", slide0.outerHTML);

			setTimeout(() => {
				slide2.classList.remove("active");
				itemsRef.current.children[3].classList.add("active");
			}, 100);

			setTimeout(() => {
				itemsRef.current.children[0].remove()
			}, 500);

			setCount(2)
			setCountA(1)
		}



		if (countA === 1) {
			itemsRef.current.insertAdjacentHTML("beforeend", slide1.outerHTML);

			setTimeout(() => {
				slide0.classList.remove("active");
				itemsRef.current.children[3].classList.add("active");
			}, 100);

			setTimeout(() => {
				itemsRef.current.children[0].remove()
			}, 500);

			setCount(1)
			setCountA(2)
		}

		if (countA === 2) {
			itemsRef.current.insertAdjacentHTML("beforeend", slide2.outerHTML);

			setTimeout(() => {
				slide1.classList.remove("active");
				itemsRef.current.children[3].classList.add("active");
			}, 100);

			setTimeout(() => {
				itemsRef.current.children[0].remove()
			}, 500);

			setCount(0)
			setCountA(0)
		}
	}

	function handleSlideRight() {
		const slide0 = document.getElementById("slide-0");
		const slide1 = document.getElementById("slide-1");
		const slide2 = document.getElementById("slide-2");

		if (count === 0) {
			slide1.classList.add("active");
			slide2.classList.remove("active");
			itemsRef.current.insertAdjacentHTML("afterbegin", slide2.outerHTML);


			setCountA(2)
			setCount(1);
		}

		if (count === 1) {
			slide0.classList.add("active");
			slide1.classList.remove("active");
			itemsRef.current.insertAdjacentHTML("afterbegin", slide1.outerHTML);

			setCountA(1);
			setCount(2);
		}

		if (count === 2) {
			slide2.classList.add("active");
			slide0.classList.remove("active");
			itemsRef.current.insertAdjacentHTML("afterbegin", slide0.outerHTML);

			setCountA(0);
			setCount(0);
		}

		setTimeout(() => {
			itemsRef.current.children[3].remove()
		}, 500);
	}

	return (<section className="slider surface-neutral-6 text-neutral-1">
		<div className="slider__items">
			<div className="slider__slider">
				<div className="slider__slides" ref={itemsRef}>

					<div className="slider__item" id="slide-0" data-active={false}>
						<div className="slider__skew">
							<div className="slider__skew-fix">
								<img src={`./media/home/image-slider-0.webp`} alt=""/>
							</div>
						</div>
					</div>

					<div className="slider__item" id="slide-1" data-active={false}>
						<div className="slider__skew">
							<div className="slider__skew-fix">
								<img src={`./media/home/image-slider-1.webp`} alt=""/>
							</div>
						</div>
					</div>

					<div className="slider__item active" id="slide-2" data-active={true}>
						<div className="slider__skew">
							<div className="slider__skew-fix">
								<img src={`./media/home/image-slider-2.webp`} alt=""/>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
		<div className="slider__container">
			<div className="wrap">
				<h2 className="subtitle-3">Models</h2>
				<Button class="btn-hexagon space-1" handleClick={handleSlideLeft} type="hexa-arrow-left" srOnly="click to go huracan tecnica page"/>
				<Button class="btn-hexagon space-1" handleClick={handleSlideRight} type="hexa-arrow-right" srOnly="click to go huracan tecnica page"/>
			</div>
			<div className="wrap">
				<div className="animation-title-reveal">
					<h3 className="title-3">
						<span className="title">{typewriterAnimation("aventador", 50, 60)}</span>
						<span className="subtitle-1">real emotions shape the future</span>
					</h3>
					<Button href="/" class="btn-hexagon space-2" type="hexa-plus" contenJustify="start" content="explore the model"/>
				</div>
			</div>
		</div>
	</section>);
}
