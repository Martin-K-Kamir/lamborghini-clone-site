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
			{curSubitem.types.map(curType => (
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
			{curItem.sublist.map(curSubitem => (
				<li className="navbar__sublist-item" id={curSubitem.id} onMouseEnter={e => handleShowList(e)} onKeyDown={e => handleKeyDown(e)}>
					<a href="/" data-open={sublistOpen[curSubitem.id]}>
						<span aria-hidden={true}>{curSubitem.link}</span>
						<span className="sr-only">{`Click to go ${curSubitem.link} page or press shift to open list`}</span>

						{curSubitem.sublist && renderSublistTypes(curSubitem)}
					</a>
				</li>
			))}
		</ul>
	}

	function renderList(data) {
		return <ul className="navbar__list">
			{(data.map(curItem => (
				<li className="navbar__list-item" id={curItem.id} onMouseEnter={e => handleShowList(e)} onKeyDown={e => handleKeyDown(e)}>
					<a href="/" className="link-2 link-underline f-fluid-1 f-weight-1" data-active={listOpen[curItem.id]}>
						<span aria-hidden={true}>{curItem.link}</span>
						<span className="sr-only">{`Click to go ${curItem.link} page or press shift to open list`}</span>
					</a>

					{curItem.sublist && renderSublist(curItem)}
				</li>
			)))}
		</ul>
	}


	return (
		<nav className="navbar" style={{"--block-size": navbarHeight}} onMouseEnter={e => getNavbarHeight(e)} onMouseLeave={handleHideList} onFocus={e => getNavbarHeight(e)}>
			<div className="app-container">
				<div className="navbar__container">
					<div className="logo">
						<img src="./media/home/image-logo.webp" alt="Lamborghini logo"/>
					</div>
					<ul className="navbar__list navbar__list--primary">
						<li className="navbar__list-item" id="models" onMouseEnter={e => handleShowList(e)} onKeyDown={e => handleKeyDown(e)}>
							<a href="/" className="link-2 link-underline f-fluid-1 f-weight-1" data-active={listOpen.models}>
								<span aria-hidden={true}>models</span> <span className="sr-only">Click to go models page or press shift to open list</span>
							</a>

							<ul className="navbar__sublist sublink-1" data-open={listOpen.models}>
								<li className="navbar__sublist-item" id="aventador" onMouseEnter={e => handleShowList(e)} onKeyDown={e => handleKeyDown(e)}>
									<a href="/" data-open={sublistOpen.aventador}>
										<span aria-hidden={true}>aventador</span>
										<span className="sr-only">Click to go aventador page or press shift to open list</span>
									</a>

									<ul className="navbar__sublist" data-open={sublistOpen.aventador} onMouseLeave={handleSublistTypeUnactive}>
										<li className="navbar__sublist-item" id="aventadorLp" onMouseEnter={e => handleSublistTypeActive(e)}>
											<a href="/" data-active={sublistTypeActive.aventadorLp}>
												AVENTADOR LP 780-4
											</a>
										</li>
										<li className="navbar__sublist-item" id="aventadorLpUltimate" onMouseEnter={e => handleSublistTypeActive(e)}>
											<a href="/" data-active={sublistTypeActive.aventadorLpUltimate}>
												AVENTADOR LP 780-4 ULTIMATE
											</a>
										</li>
										<li className="navbar__sublist-item" id="aventadorSvj" onMouseEnter={e => handleSublistTypeActive(e)}>
											<a href="/" data-active={sublistTypeActive.aventadorSvj}>
												AVENTADOR SVJ
											</a>
										</li>
										<li className="navbar__sublist-item" id="aventadorSvjRoadster" onMouseEnter={e => handleSublistTypeActive(e)}>
											<a href="/" data-active={sublistTypeActive.aventadorSvjRoadster}>
												AVENTADOR SVJ ROADSTER
											</a>
										</li>
									</ul>
								</li>
								<li className="navbar__sublist-item" id="huracan" onMouseEnter={e => handleShowList(e)}>
									<a href="/" data-open={sublistOpen.huracan}>huracán</a>
									<ul className="navbar__sublist" data-open={sublistOpen.huracan} onMouseLeave={handleSublistTypeUnactive}>
										<li className="navbar__sublist-item" id="huracanTecnica" onMouseEnter={e => handleSublistTypeActive(e)}>
											<a href="/" data-active={sublistTypeActive.huracanTecnica}>
												HURACÁN TECNICA
											</a>
										</li>
										<li className="navbar__sublist-item" id="huracanSto" onMouseEnter={e => handleSublistTypeActive(e)}>
											<a href="/" data-active={sublistTypeActive.huracanSto}>
												HURACÁN STO
											</a>
										</li>
										<li className="navbar__sublist-item" id="huracanEvo" onMouseEnter={e => handleSublistTypeActive(e)}>
											<a href="/" data-active={sublistTypeActive.huracanEvo}>
												HURACÁN EVO
											</a>
										</li>
										<li className="navbar__sublist-item" id="huracanSpyder" onMouseEnter={e => handleSublistTypeActive(e)}>
											<a href="/" data-active={sublistTypeActive.huracanSpyder}>
												HURACÁN SPYDER
											</a>
										</li>
										<li className="navbar__sublist-item" id="huracanRwd" onMouseEnter={e => handleSublistTypeActive(e)}>
											<a href="/" data-active={sublistTypeActive.huracanRwd}>
												HURACÁN RWD
											</a>
										</li>
										<li className="navbar__sublist-item" id="huracanRwdSpyder" onMouseEnter={e => handleSublistTypeActive(e)}>
											<a href="/" data-active={sublistTypeActive.huracanRwdSpyder}>
												HURACÁN RWD SPYDER
											</a>
										</li>
									</ul>
								</li>
								<li className="navbar__sublist-item" id="urus" onMouseEnter={e => handleShowList(e)}>
									<a href="/" data-open={sublistOpen.urus}>urus</a>
									<ul className="navbar__sublist" data-open={sublistOpen.urus}>
										<li className="navbar__sublist-item"><a href="/">URUS</a></li>
										<li className="navbar__sublist-item"><a href="/">URUS PEARL CAPSULE</a></li>
										<li className="navbar__sublist-item"><a href="/">URUS GRAPHITE CAPSULE</a></li>
									</ul>
								</li>
								<li className="navbar__sublist-item" id="preOwned" onMouseEnter={e => handleShowList(e)}>
									<a href="/" data-open={sublistOpen.preOwned}>pre-owned</a>
								</li>
								<li className="navbar__sublist-item" id="limited" onMouseEnter={e => handleShowList(e)}>
									<a href="/" data-open={sublistOpen.limited}>limited series</a>
									<ul className="navbar__sublist" data-open={sublistOpen.limited}>
										<li className="navbar__sublist-item"><a href="/">COUNTACH LPI 800-4</a></li>
										<li className="navbar__sublist-item"><a href="/">SIÁN FKP 37</a></li>
										<li className="navbar__sublist-item"><a href="/">SIÁN ROADSTER</a></li>
									</ul>
								</li>
								<li className="navbar__sublist-item" id="concept" onMouseEnter={e => handleShowList(e)}>
									<a href="/" data-open={sublistOpen.concept}>concept</a>
									<ul className="navbar__sublist" data-open={sublistOpen.concept}>
										<li className="navbar__sublist-item"><a href="/">TERZO MILLENNIO</a></li>
										<li className="navbar__sublist-item"><a href="/">ASTERION</a></li>
										<li className="navbar__sublist-item"><a href="/">ESTOQUE</a></li>
									</ul>
								</li>
							</ul>
						</li>
						<li className="navbar__list-item" id="solutions" onMouseEnter={e => handleShowList(e)} onKeyDown={e => handleKeyDown(e)}>
							<a href="/" className="link-2 link-underline f-fluid-1 f-weight-1" data-active={listOpen.solutions}>custom solutions</a>
							<ul className="navbar__sublist sublink-1" data-open={listOpen.solutions}>
								<li className="navbar__sublist-item"><a href="/">customization</a></li>
								<li className="navbar__sublist-item"><a href="/">accessories</a></li>
								<li className="navbar__sublist-item"><a href="/">financial services</a></li>
								<li className="navbar__sublist-item"><a href="/">warranty extension</a></li>
							</ul>
						</li>
						<li className="navbar__list-item" id="ownership" onMouseEnter={e => handleShowList(e)} onKeyDown={e => handleKeyDown(e)}>
							<a href="/" className="link-2 link-underline f-fluid-1 f-weight-1" data-active={listOpen.ownership}>ownership</a>
							<ul className="navbar__sublist sublink-1" data-open={listOpen.ownership}>
								<li className="navbar__sublist-item"><a href="/">connectivity</a></li>
								<li className="navbar__sublist-item"><a href="/">customer app</a></li>
								<li className="navbar__sublist-item"><a href="/">mobility program</a></li>
								<li className="navbar__sublist-item"><a href="/">classics</a></li>
								<li className="navbar__sublist-item"><a href="/">service</a></li>
								<li className="navbar__sublist-item"><a href="/">recall campaign</a></li>
							</ul>
						</li>
						<li className="navbar__list-item" id="motorsport" onMouseEnter={e => handleShowList(e)} onKeyDown={e => handleKeyDown(e)}>
							<a href="/" className="link-2 link-underline f-fluid-1 f-weight-1" data-active={listOpen.motorsport}>motorsport</a>
							<ul className="navbar__sublist sublink-1" data-open={listOpen.motorsport}>
								<li className="navbar__sublist-item" id="trofeo" onMouseEnter={e => handleShowList(e)}>
									<a href="/">super trofeo</a>
									<ul className="navbar__sublist" data-open={sublistOpen.trofeo}>
										<li className="navbar__sublist-item"><a href="/">SUPER TROFEO EUROPE</a></li>
										<li className="navbar__sublist-item"><a href="/">SUPER TROFEO AMERICA</a></li>
										<li className="navbar__sublist-item"><a href="/">SUPER TROFEO FINAL</a></li>
										<li className="navbar__sublist-item"><a href="/">CALENDAR AND RESULTS</a></li>
									</ul>
								</li>
								<li className="navbar__sublist-item" id="gt3" onMouseEnter={e => handleShowList(e)}>
									<a href="/">gt3</a>
								</li>
								<li className="navbar__sublist-item" id="motorsportModels" onMouseEnter={e => handleShowList(e)}>
									<a href="/">motorsport models</a>
									<ul className="navbar__sublist" data-open={sublistOpen.motorsportModels}>
										<li className="navbar__sublist-item"><a href="/">HURACÁN GT3 EVO2</a></li>
										<li className="navbar__sublist-item"><a href="/">HURACÁN SUPER TROFEO EVO2</a></li>
										<li className="navbar__sublist-item"><a href="/">SC18 ALSTON</a></li>
										<li className="navbar__sublist-item"><a href="/">ESSENZA SCV12</a></li>
										<li className="navbar__sublist-item"><a href="/">SC20</a></li>
										<li className="navbar__sublist-item"><a href="/">HERITAGE</a></li>
									</ul>
								</li>
								<li className="navbar__sublist-item" id="drivers" onMouseEnter={e => handleShowList(e)}>
									<a href="/">drivers</a>
								</li>
								<li className="navbar__sublist-item" id="news" onMouseEnter={e => handleShowList(e)}>
									<a href="/">motorsport news</a>
								</li>
								<li className="navbar__sublist-item" id="experience" onMouseEnter={e => handleShowList(e)}>
									<a href="/">experience</a>
									<ul className="navbar__sublist" data-open={sublistOpen.experience}>
										<li className="navbar__sublist-item"><a href="/">LAMBORGHINI PILOTA</a></li>
										<li className="navbar__sublist-item"><a href="/">SUPER TROFEO VIP PROGRAM</a></li>
									</ul>
								</li>
								<li className="navbar__sublist-item" id="esports" onMouseEnter={e => handleShowList(e)}>
									<a href="/">esports</a>
								</li>
							</ul>
						</li>
						<li className="navbar__list-item" id="dealerships" onMouseEnter={e => handleShowList(e)}>
							<a href="/" className="link-2 link-underline f-fluid-1 f-weight-1">dealerships</a>
						</li>
						<li className="navbar__list-item" id="museum" onMouseEnter={e => handleShowList(e)}>
							<a href="/" className="link-2 link-underline f-fluid-1 f-weight-1">museum</a>
						</li>
						<li className="navbar__list-item" id="store" onMouseEnter={e => handleShowList(e)}>
							<a href="/" className="link-2 link-underline f-fluid-1 f-weight-1">store</a>
						</li>
					</ul>
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