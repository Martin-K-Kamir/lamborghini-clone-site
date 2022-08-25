import React, {useEffect, useState, useRef} from "react";
import Button from "./Button";
import {typewriterAnimation} from "../Utilities";

export default function Models() {
	const [items, setItems] = useState([]);
	const itemsRef = useRef(null);

	function itemHTML(i, isActive) {
		return (<div className="slider__item" key={i} id={i} data-active={isActive ? true : false}>
			<div className="slider__skew">
				<div className="slider__skew-fix">
					<img src={`./media/home/image-slider-${i}.webp`} alt=""/>
				</div>
			</div>
		</div>)
	}

	useEffect(() => {
		// setItems(Array.from({length: 3}, (_, i) => itemHTML(i)));
		setItems([itemHTML(0, false), itemHTML(1, false), itemHTML(2, true)]);
	}, []);

	function setActiveItem() {
		// itemsRef.current.children[0].removeAttribute('data-active');
		// itemsRef.current.children[1].dataset.active = true;
		Array.from(itemsRef.current.children).forEach((curItem, i) => {
			curItem.dataset.active = i === 1 ? true : false;
		});
	}

	function handleSlideLeft() {
		setItems([itemHTML(0, false), itemHTML(1, false), itemHTML(2, true)]);
		console.log(items);
		// setItems(items.concat(items.shift()));
	}

	function handleSlideRight() {
		setItems([
			itemHTML(2, false),
			itemHTML(0, false),
			itemHTML(1, true),
			itemHTML(2, false)
		]);

		setTimeout(() => {
			setItems([
			itemHTML(2, false),
			itemHTML(0, false),
			itemHTML(1, true),
		]);
		}, 500)
		// setItems([items.pop()].concat(items));
	}

	return (<section className="slider surface-neutral-6 text-neutral-1">
		<div className="slider__items" ref={itemsRef}>
			<div className="slider__slider">
				<div className="slider__slides">
					{items}
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
