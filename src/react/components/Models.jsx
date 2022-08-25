import React, {useEffect, useState, useRef} from "react";
import Button from "./Button";
import {typewriterAnimation} from "../Utilities";

export default function Models() {
	const [items, setItems] = useState([]);
	const itemsRef = useRef(null);

	function itemHTML(i) {
		return (<div className="slider__item" key={i}>
			<div className="slider__image-wrap">
				<img src={`./media/home/image-slider-${i}.webp`} alt=""/>
			</div>
		</div>)
	}

	useEffect(() => {
		setItems(Array.from({length: 3}, (_, i) => itemHTML(i)));
	}, []);

	function setActiveItem() {
		// itemsRef.current.children[0].removeAttribute('data-active');
		// itemsRef.current.children[1].dataset.active = true;
		Array.from(itemsRef.current.children).forEach((curItem, i) => {
			curItem.dataset.active = i === 1 ? true : false;
		});
	}

	function handleSlideLeft() {
		Array.from(itemsRef.current.children).forEach((curItem, i) => {
			curItem.dataset.active = i === 0 ? true : false;
		});
		setItems(items.concat(items.shift()));
	}

	function handleSlideRight() {
		Array.from(itemsRef.current.children).forEach((curItem, i) => {
			curItem.dataset.active = i === 1 ? true : false;
		});
		setItems([items.pop()].concat(items));
	}

	return (<section className="slider surface-neutral-6 text-neutral-1">
		<div className="slider__items" ref={itemsRef}>
			{items}
		</div>
		<div className="slider__container">
			<div className="stack space-3">
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
		</div>
	</section>);
}
