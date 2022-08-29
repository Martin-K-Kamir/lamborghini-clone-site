import Menu from '../components/Menu';
import Button from "../components/Button";
import data from "../../data/dataNavigation";
import React, {useState, useRef} from "react";
import useScrollbarSize from "react-scrollbar-size";

export default function Navigation() {
	const {height, width} = useScrollbarSize();
	const [navigationHeight, setNavigationHeight] = useState(0);
	const [menuHeight, setMenuHeight] = useState(0);
	const [navbarHeight, setNavbarHeight] = useState(0);
	const [_navbarHeight, _setNavbarHeight] = useState(0);
	const [menuOpen, setMenuOpen] = useState(false);
	const [listOpen, setListOpen] = useState(getListItems(data.list));
	const [sublistOpen, setSublistOpen] = useState(getSublistItems(data.list));
	const [sublistTypeActive, setSublistTypeActive] = useState(getSublistItemTypes(data.list));

	const menuRef = useRef(null);
	const navigationRef = useRef(null);

	function convertToObject(arr, val = false) {
		return arr.reduce((acc, key) => {
			return {...acc, [key]: val}
		}, {});
	}

	function getNavbarHeight(e) {
		if (_navbarHeight === 0) _setNavbarHeight(e.currentTarget.clientHeight);
	}

	function getListItems(data) {
		return convertToObject(data.map(({id}) => id));
	}

	function getSublistItems(data) {
		return convertToObject(
			data.map(({sublist}) => sublist)
				.filter(i => i !== undefined)
				.map(i => i.map(({id}) => id))
				.flat(2)
		);
	}

	function getSublistItemTypes(data) {
		return convertToObject(
			data.map(({sublist}) => sublist)
				.filter(i => i !== undefined).map(item => item.map(({types}) => types))
				.map(i => i.filter(i => i !== undefined)).flat(2)
				.map(({id}) => id)
			, "unactive"
		);
	}

	function setObjectValue(obj, val = false) {
		return {...Object.keys(obj).reduce((reduced, key) => ({...reduced, [key]: val}), {})};
	}

	function handleClickMenu() {
		setMenuOpen(!menuOpen);
		document.body.dataset.menuOpen = !menuOpen ? "true" : "false";
		document.body.style.setProperty('--scroll-bar-width', width + "px");
		if (!menuOpen) navigationRef.current.scrollTo({top: 0});
		setNavigationHeight(100 + "%");

		setTimeout(() => {
			setMenuHeight(menuOpen ? 0 : menuRef.current.clientHeight + "px");
			setNavigationHeight(menuOpen ? 0 : 100 + "%");
		}, 340);
	}

	function handleSublistTypeActive(e) {
		const id = e.currentTarget.id;
		const copySublistTypeActive = setObjectValue(sublistTypeActive);

		setSublistTypeActive({
			...copySublistTypeActive,
			[id]: true,
		});
	}

	function handleSublistTypeUnactive() {
		const copySublistTypeActive = setObjectValue(sublistTypeActive, "unactive");

		setSublistTypeActive({
			...copySublistTypeActive,
		});
	}

	function handleShowList(e) {
		if (menuOpen) return;

		const id = e.currentTarget.id;
		const sublistHeight = e.currentTarget.children[1] !== undefined ? e.currentTarget.children[1].clientHeight : 0.1;
		const copyListOpen = setObjectValue(listOpen);
		const copySublistOpen = setObjectValue(sublistOpen);

		if (listOpen.hasOwnProperty(id)) {
			setNavbarHeight(`${_navbarHeight + sublistHeight}px`);

			setListOpen({
				...copyListOpen,
				[id]: true,
			});

			setSublistOpen({
				...copySublistOpen,
			});
		}

		if (sublistOpen.hasOwnProperty(id)) {

			setSublistOpen({
				...copySublistOpen,
				[id]: true,
			});
		}
	}

	function handleHideList() {
		setNavbarHeight(0);
		const copyListOpen = setObjectValue(listOpen);
		const copySublistOpen = setObjectValue(sublistOpen);

		setListOpen({
			...copyListOpen,
		});

		setSublistOpen({
			...copySublistOpen,
		});
	}

	function handleShiftDown(e) {
		if (e.keyCode === 16 || e.key === "Shift") {
			e.stopPropagation();
			handleShowList(e);
		}
	}

	function renderSublistTypes(curSubitem) {
		return curSubitem.types && <ul className="navbar__sublist" data-open={sublistOpen[curSubitem.id]} onMouseLeave={handleSublistTypeUnactive}>
			{curSubitem.types.map(curType => (
				<li className="navbar__sublist-item" key={curType.key} id={curType.id} onMouseEnter={e => handleSublistTypeActive(e)}>
					<a href="/" data-active={sublistTypeActive[curType.id]} className={sublistTypeActive[curType.id] ? "text-neutral-1" : "text-neutral-3"}>
						{curType.link}
					</a>
				</li>
			))}
		</ul>
	}

	function renderSublist(curItem) {
		return curItem.sublist && <ul className="navbar__sublist sublink-1" data-open={listOpen[curItem.id]}>
			{curItem.sublist.map(curSubitem => (
				<li className="navbar__sublist-item" key={curSubitem.key} id={curSubitem.id} onMouseEnter={e => handleShowList(e)} onKeyDown={e => handleShiftDown(e)}>
					<a href="/" data-open={sublistOpen[curSubitem.id]} className={sublistOpen[curSubitem.id] ? "text-neutral-1" : "text-neutral-3"}>
						{curSubitem.types ?
							<><span aria-hidden={true}>{curSubitem.link}</span>
								<span className="sr-only">{`Click to go ${curSubitem.link} page or press shift to open list`}</span></>
							: curSubitem.link}
					</a>

					{renderSublistTypes(curSubitem)}
				</li>
			))}
		</ul>
	}

	function renderList(data, limitItems = 7) {
		return (data.map((curItem, i) => (
			(i >= limitItems) ? "" :
				<li className="navbar__list-item" key={curItem.key} id={curItem.id} onMouseEnter={e => handleShowList(e)} onKeyDown={e => handleShiftDown(e)}>
					<a href="/" className="link-2 link-underline f-fluid-1 f-weight-1" data-active={listOpen[curItem.id]}>
						{curItem.sublist ?
							<><span aria-hidden={true}>{curItem.link}</span>
								<span className="sr-only">{`Click to go ${curItem.link} page or press shift to open list`}</span></>
							: curItem.link}
					</a>

					{renderSublist(curItem)}
				</li>
		)))
	}

	return (
		<header className="navigation" data-menu-open={menuOpen} ref={navigationRef} style={{"--block-size": navigationHeight}}>
			<nav className="navbar text-neutral-1 surface-neutral-7" data-disabled={menuOpen} data-menu-open={menuOpen}
			     style={{"--block-size": navbarHeight, "--scroll-bar-width": width + "px"}}
			     onMouseEnter={e => getNavbarHeight(e)} onMouseLeave={handleHideList}
			     onFocus={e => getNavbarHeight(e)}>
				<div className="navbar__container">
					<div className="logo">
						<img src="./media/home/image-logo.webp" alt="Lamborghini logo"/>
					</div>
					<ul className="navbar__list">
						{renderList(data.list)}
					</ul>
					<ul className="navbar__list" onMouseEnter={handleHideList}>
						<li className="navbar__list-item">
							<Button type="chat" size="2.5" srOnly="click to open chat with our support team"/>
						</li>
						<li className="navbar__list-item">
							<Button type="search" size="2.5" srOnly="click to open search menu"/>
						</li>
						<li className="navbar__list-item">
							<button className="btn-hamburger" onClick={handleClickMenu} aria-expanded={menuOpen} aria-label="click to open extended navigation menu">
								<i className="btn-hamburger__line" aria-hidden="true"></i>
								<i className="btn-hamburger__line" aria-hidden="true"></i>
								<i className="btn-hamburger__line" aria-hidden="true"></i>
							</button>
						</li>
					</ul>
				</div>
			</nav>
			<Menu menuOpen={menuOpen} menuRef={menuRef} menuHeight={menuHeight}/>
		</header>
	);
}