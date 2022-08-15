import dataNavbar from "../../dataNavbar";
import React, {useState} from "react";

export default function Navbar() {
	const [navbarHeight, setNavbarHeight] = useState(0);
	const [_navbarHeight, _setNavbarHeight] = useState(0);
	const [menuOpen, setMenuOpen] = useState(false);
	const [listOpen, setListOpen] = useState({
		models: false,
		solutions: false,
		ownership: false,
		motorsport: false,
		dealerships: false,
		museum: false,
		store: false,
	});
	const [sublistOpen, setSublistOpen] = useState({
		aventador: false,
		huracan: false,
		urus: false,
		preOwned: false,
		limited: false,
		concept: false,
		trofeo: false,
		gt3: false,
		drivers: false,
		news: false,
		esports: false,
		motorsportModels: false,
		experience: false,
	});
	const [sublistTypeActive, setSublistTypeActive] = useState({
		aventadorLp: "unactive",
		aventadorLpUltimate: "unactive",
		aventadorSvj: "unactive",
		aventadorSvjRoadster: "unactive",
		huracanTecnica: "unactive",
		huracanSto: "unactive",
		huracanEvo: "unactive",
		huracanSpyder: "unactive",
		huracanRwd: "unactive",
		huracanRwdSpyder: "unactive",
		urus: "unactive",
		urusPearl: "unactive",
		urusGraphite: "unactive",
		limitedCountach: "unactive",
		limitedSian: "unactive",
		limitedSianRoadster: "unactive",
		conceptTerzo: "unactive",
		conceptAsterion: "unactive",
		conceptEstoque: "unactive",
	});

	function beFalse(obj, value = false) {
		return {...Object.keys(obj).reduce((reduced, key) => ({...reduced, [key]: value}), {})};
	}

	function handleOpenMenu() {
		setMenuOpen(!menuOpen);
	}

	function getNavbarHeight(e) {
		if (_navbarHeight === 0) _setNavbarHeight(e.currentTarget.clientHeight);
	}

	function handleSublistTypeActive(e) {
		const id = e.currentTarget.id;
		const copySublistTypeActive = beFalse(sublistTypeActive);

		setSublistTypeActive({
			...copySublistTypeActive,
			[id]: true,
		});
	}

	function handleSublistTypeUnactive() {
		const copySublistTypeActive = beFalse(sublistTypeActive, "unactive");

		setSublistTypeActive({
			...copySublistTypeActive,
		});
	}

	function handleShowList(e) {
		const id = e.currentTarget.id;
		const sublistHeight = e.currentTarget.children[1]?.clientHeight;
		const copyListOpen = beFalse(listOpen);
		const copySublistOpen = beFalse(sublistOpen);
		console.log(id)

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
		if (false) {
			setNavbarHeight(0);
			const copyListOpen = beFalse(listOpen);
			const copySublistOpen = beFalse(sublistOpen);

			setListOpen({
				...copyListOpen,
			});

			setSublistOpen({
				...copySublistOpen,
			});
		}
	}

	function handleKeyDown(e) {
		if (e.keyCode === 16 || e.key === "Shift") {
			e.stopPropagation();
			handleShowList(e);
		}
	}

	function renderSublistTypes(curSubitem) {
		return <ul className="navbar__sublist" data-open={sublistOpen[curSubitem.id]} onMouseLeave={handleSublistTypeUnactive}>
			{curSubitem.types && curSubitem.types.map(curType => (
				<li className="navbar__sublist-item" id={curType.id} onMouseEnter={e => handleSublistTypeActive(e)}>
					<a href="/" data-active={sublistTypeActive[curType.id]}>
						{curType.link}
					</a>
				</li>
			))}
		</ul>
	}

	function renderSublist(curItem) {
		return <ul className="navbar__sublist sublink-1" data-open={listOpen[curItem.id]}>
			{curItem.sublist && curItem.sublist.map(curSubitem => (
				<li className="navbar__sublist-item" id={curSubitem.id} onMouseEnter={e => handleShowList(e)} onKeyDown={e => handleKeyDown(e)}>
					<a href="/" data-open={sublistOpen[curSubitem.id]}>
						<span aria-hidden={true}>{curSubitem.link}</span>
						<span className="sr-only">{`Click to go ${curSubitem.link} page or press shift to open list`}</span>
					</a>

					{renderSublistTypes(curSubitem)}
				</li>
			))}
		</ul>
	}

	function renderList(data) {
		return <ul className="navbar__list navbar__list--primary">
			{(data.map(curItem => (
				<li className="navbar__list-item" id={curItem.id} onMouseEnter={e => handleShowList(e)} onKeyDown={e => handleKeyDown(e)}>
					<a href="/" className="link-2 link-underline f-fluid-1 f-weight-1" data-active={listOpen[curItem.id]}>
						<span aria-hidden={true}>{curItem.link}</span>
						<span className="sr-only">{`Click to go ${curItem.link} page or press shift to open list`}</span>
					</a>

					{renderSublist(curItem)}
				</li>
			)))}
		</ul>
	}

	function test() {
		// const t = dataNavbar.list.map(({id}) => ({[id]: false}));
		// console.log(t);

		const b = dataNavbar.list.map(item => (
			item.sublist
		));
		console.log(b);

		// const a = dataNavbar.list.map(({sublist}) => (sublist.map(({types}) => (types.map(({id}) => ({[id]: false}))))));
		// console.log(a);
	}

	test()


	return (
		<nav className="navbar" style={{"--block-size": navbarHeight}} onMouseEnter={e => getNavbarHeight(e)} onMouseLeave={handleHideList} onFocus={e => getNavbarHeight(e)}>
			<div className="app-container">
				<div className="navbar__container">
					<div className="logo">
						<img src="./media/home/image-logo.webp" alt="Lamborghini logo"/>
					</div>
					{renderList(dataNavbar.list)}
					<ul className="navbar__list navbar__list--secondary">
						<li className="navbar__list-item">
							<button>
								<span className="sr-only">click to open chat with our support team</span>
								<svg aria-hidden="true" width="25" height="25" viewBox="0 0 25 25">
									<use href="media/sprites.svg#icon-chat"/>
								</svg>
							</button>
						</li>
						<li className="navbar__list-item">
							<button>
								<span className="sr-only">click to open search menu</span>
								<svg aria-hidden="true" width="25" height="25" viewBox="0 0 25 25">
									<use href="media/sprites.svg#icon-search"/>
								</svg>
							</button>
						</li>
						<li className="navbar__list-item">
							<button className="btn-hamburger" onClick={handleOpenMenu} aria-expanded={menuOpen} aria-label="click to open site navigation menu">
								<i className="btn-hamburger__line" aria-hidden="true"></i>
								<i className="btn-hamburger__line" aria-hidden="true"></i>
								<i className="btn-hamburger__line" aria-hidden="true"></i>
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}