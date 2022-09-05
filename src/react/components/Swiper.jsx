import Button from "./Button";
import React, {useRef, useState} from "react";

export default function Swiper(props) {
	const [scrollToItem, setScrollToItem] = useState(0);
	const [activeItem, setActiveItem] = useState(0);
	const [mouseDown, setMouseDown] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);
	const [itemsCollapsed, setItemsCollapsed] = useState(40);

	const reelRef = useRef(null);
	const itemsListRef = useRef([]);

	function itemBreakpoint(index, breakpoint = 50) {
		const itemWidth = itemsListRef.current[index].offsetLeft + itemsListRef.current[index].offsetWidth;
		const itemBreakpoint = itemWidth / 100 * breakpoint;
		return itemWidth - itemBreakpoint;
	}

	function handleActiveReel(e) {
		setMouseDown(true);
		setStartX(e.pageX - reelRef.current.offsetLeft);
		setScrollLeft(reelRef.current.scrollLeft);
	}

	function handleDraggingReel(e) {
		if (!mouseDown) return;
		e.preventDefault();
		const x = e.pageX - reelRef.current.offsetLeft;
		const walk = (x - startX) * 1.5;
		const scrollBy = scrollLeft - walk;
		reelRef.current.scrollLeft = scrollBy;

		// temp
		if (scrollBy < itemBreakpoint(0)) {
			setScrollToItem(itemsListRef.current[0].offsetLeft);
			setActiveItem(0)
		}

		if (scrollBy < itemBreakpoint(1) && scrollBy > itemBreakpoint(0)) {
			setScrollToItem(itemsListRef.current[1].offsetLeft + itemsCollapsed);
			setActiveItem(1)
		}

		if (scrollBy < itemBreakpoint(2) && scrollBy > itemBreakpoint(1)) {
			setScrollToItem(itemsListRef.current[2].offsetLeft + itemsCollapsed);
			setActiveItem(2)
		}
	}

	function handleLeavingReel() {
		setMouseDown(false);
		reelRef.current.scrollTo({
			left: scrollToItem,
			behavior: "smooth"
		})
	}

	function renderItems(data) {
		return data.map((item, i) => {
			return (
				<div className="swiper__item" key={item.key} ref={(ref) => (itemsListRef.current[i] = ref)}>
					<img src={item.image} alt={item.alt}/>
				</div>
			);
		});
	}

	function renderContent(data) {
		return data.map(item => {
			if (activeItem === item.index) {
				return (
					<div className="animation-title-fade" key={item.key}>
						<h3 className="title-2">
							<span className="title f-weight-4">{item.title}</span>
							<span className="subtitle-1">{item.subtitle}</span>
						</h3>
						<Button href="/" class="btn-primary" content={item.btnContent}/>
						{item.btnContent2 && <Button href="/" class="btn-primary" content={item.btnContent2}/>}
					</div>
				);
			}
		});
	}

	return (
		<section className="swiper display-at[screen-lg]" style={{"--collapse-by": itemsCollapsed}}>
			<div className="swiper__container">
				<h2 className="subtitle-3">Models</h2>
			</div>
			<div className="swiper__reel" data-active={mouseDown} ref={reelRef} onMouseDown={e => handleActiveReel(e)} onMouseMove={e => handleDraggingReel(e)}
			     onMouseLeave={handleLeavingReel} onMouseUp={handleLeavingReel}>
				{renderItems(props.imagesData)}
			</div>
			<div className="swiper__container">
				{renderContent(props.contentData)}
			</div>
		</section>
	);
}

