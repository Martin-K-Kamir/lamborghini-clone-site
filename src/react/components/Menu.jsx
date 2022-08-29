import React, {useState, useEffect} from "react";
import dataNavigation from "../../data/dataNavigation";


export default function Menu(props) {
	const [langActive, setLangActive] = useState(getLangs(dataNavigation.languages));

	useEffect(() => {
		setLangActive(prevState => ({...prevState, en: true}));
	}, []);

	function convertToObject(arr, val = false) {
		return arr.reduce((acc, key) => {
			return {...acc, [key]: val}
		}, {});
	}

	function getLangs(data) {
		return convertToObject(data.map(({id}) => id));
	}

	function renderSocialIcons(data) {
		return (data.map(curIcon => (<a href="/" className="link-2" key={curIcon.key}>
				<span className="sr-only">click to open our {curIcon.name} profile</span>
				<svg aria-hidden="true" width="24" height="24" viewBox="0 0 20 20">
					<use href={`media/sprites.svg#icon-${curIcon.name}`}/>
				</svg>
			</a>)))
	}

	function renderLangs(data) {
		return (data.map(curLang => (<a href="/" className={`link-1 ${langActive[curLang.id] ? "text-neutral-3" : ""}`} id={curLang.id} key={curLang.key}>
				<span className="sr-only">go to</span>{curLang.content}<span className="sr-only">page</span>
			</a>)))
	}

	function renderList(data) {
		return (data.map(curItem => (<li className="menu__item" key={curItem.key}>
				<a className="link-2 link-underline letterspacing-4" href="/">{curItem.link}</a>
				{curItem.sublist && <svg className="icon icon-at-end" aria-hidden="true" width="7.728" height="16.077" viewBox="0 0 7.728 16.077">
					<use href={`media/sprites.svg#icon-arrow-right`}/>
				</svg>}
			</li>)))
	}

	return (<div className="menu text-neutral-1 surface-neutral-7" aria-hidden={!props.menuOpen} data-menu-open={props.menuOpen} style={{"--block-size": props.menuHeight}}>
				<div className="menu__container" ref={props.menuRef}>
					<ul className="menu__grid" role="list">
						{renderList(dataNavigation.list)}
					</ul>
					<div className="divider" aria-hidden={true}>
						<div className="divider__line divider__line--overflowing"></div>
					</div>
					<div className="menu__grid">
						<div className="menu__item">
							<p className="title-preferences text-neutral-3">languages</p>
							<div className="cluster" role="group" aria-label="languages">
								{renderLangs(dataNavigation.languages)}
							</div>
						</div>
						<div className="menu__item">
							<p className="title-preferences text-neutral-3">social</p>
							<div className="cluster" role="group" aria-label="social links">
								{renderSocialIcons(dataNavigation.socialIcons)}
							</div>
						</div>
					</div>
				</div>
		</div>);
}