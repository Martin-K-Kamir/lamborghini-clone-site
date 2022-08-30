import React, {useRef, useState} from "react";
import Button from "./Button";
import {typewriterAnimation} from "../Utilities";

export default function Slider(props) {
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);
	const [activeItem, setActiveItem] = useState(3);
	const itemsRef = useRef(null);


	function insertItem(position, item) {
		itemsRef.current.insertAdjacentHTML(position, item.outerHTML);
	}

	function changeActiveItem(increaseOrDecrease) {
		if (increaseOrDecrease === "increase") {
			if (activeItem === 3) {
				setActiveItem(1);
			} else {
				setActiveItem(activeItem + 1);
			}
		}
		if (increaseOrDecrease === "decrease") {
			if (activeItem === 1) {
				setActiveItem(3);
			} else {
				setActiveItem(activeItem - 1);
			}
		}
	}

	function handleSlideLeft() {
		setIsButtonDisabled(true);
		changeActiveItem("increase");

		const itemOne = document.querySelector('[data-index="1"]');
		const itemTwo = document.querySelector('[data-index="2"]');
		const itemThree = document.querySelector('[data-index="3"]');

		function setItemActive(activeItem, unactiveItem) {
			insertItem("beforeend", activeItem);

			setTimeout(() => {
				unactiveItem.dataset.active = "false";
				itemsRef.current.children[3].dataset.active = "true";
			}, 100);
		}

		if (activeItem === 1) setItemActive(itemTwo, itemOne);
		if (activeItem === 3) setItemActive(itemOne, itemThree);
		if (activeItem === 2) setItemActive(itemThree, itemTwo);

		setTimeout(() => {
			itemsRef.current.children[0].remove()
			setIsButtonDisabled(false);
		}, 500);
	}

	function handleSlideRight() {
		setIsButtonDisabled(true);
		changeActiveItem("decrease");

		const itemOne = document.querySelector('[data-index="1"]');
		const itemTwo = document.querySelector('[data-index="2"]');
		const itemThree = document.querySelector('[data-index="3"]');

		function setItemActive(activeItem, unactiveItem) {
			activeItem.dataset.active = "true";
			unactiveItem.dataset.active = "false";
			insertItem("afterbegin", unactiveItem);
		}

		if (activeItem === 1) setItemActive(itemThree, itemOne);
		if (activeItem === 2) setItemActive(itemOne, itemTwo);
		if (activeItem === 3) setItemActive(itemTwo, itemThree);

		setTimeout(() => {
			itemsRef.current.children[3].remove()
			setIsButtonDisabled(false);
		}, 500);
	}

	function renderItems(data) {
		return data.map(item => {
			return (
				<div className="slider__item" key={item.key} data-index={item.index} data-active={item.active}>
					<div className="slider__skew">
						<div className="slider__skew-reverse">
							<img src={item.image} aria-hidden={true} alt="" width={1617} height={1040}/>
						</div>
					</div>
				</div>
			);
		});
	}

	function renderContent(data) {
		return data.map(curContent => {
			if (activeItem === curContent.index) {
				return (
					<div className="animation-title-reveal" key={curContent.key}>
						<h3 className="title-3">
							<span className="title">{typewriterAnimation(`${curContent.title}`, 40, 0)}</span>
							<span className="subtitle-1">{curContent.subtitle}</span>
						</h3>
						<Button href={curContent.link} class="btn-hexagon space-2" type="hexa-plus" content="explore the model"/>
					</div>
				);
			}
		});
	}

	return (
		<section className="slider surface-neutral-6 text-neutral-1">
			<div className="slider__slides">
				<div className="slider__items" ref={itemsRef}>
					{renderItems(props.imagesData)}
				</div>
			</div>
			<div className="slider__container">
				<div className="wrap">
					<h2 className="subtitle-3">Models</h2>
					<Button class="btn-hexagon space-1" handleClick={handleSlideLeft} disabled={isButtonDisabled} type="hexa-arrow-left" srOnly="click to previous slide"/>
					<Button class="btn-hexagon space-1" handleClick={handleSlideRight} disabled={isButtonDisabled} type="hexa-arrow-right"
					        srOnly="click to next slide"/>
				</div>
				<div className="wrap">
					{renderContent(props.contentData)}
				</div>
			</div>
		</section>
	);
}
