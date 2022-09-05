import React from "react";
import dataFooter from "../../data/dataFooter";


export default function Footer() {

	function renderList(data) {
		return (data.map(curLink => (
			<li className="link-2 link-underline f-size-3 f-weight-2">
				<a href="/" key={curLink.key}>
					{curLink.link}
				</a>
			</li>
		)))
	}

	function renderSocialIcons(data) {
		return (data.map(curIcon => (
			<li className="link-2">
				<a href="/" key={curIcon.key}>
					<span className="sr-only">click to open our {curIcon.name} profile</span>
					<svg aria-hidden="true" width="18" height="18" viewBox="0 0 20 20">
						<use href={`media/sprites.svg#icon-${curIcon.name}`}/>
					</svg>
				</a>
			</li>
		)))
	}

	return (
		<footer className="footer text-neutral-1 surface-neutral-7">
			<div className="footer__container">
				<nav className="footer__navigation">
					<ul className="cluster cluster--half-row space-5">
						{renderList(dataFooter.list)}
					</ul>
				</nav>
				<p className="footer__disclaimer disclaimer description-1 "><span>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa cum eligendi ex fugiat illo impedit laboriosam libero minus, molestias nam, nesciunt odit placeat quas ratione saepe sint sunt voluptates? Cumque fuga impedit quibusdam, quos saepe similique unde vel veniam. At atque mollitia necessitatibus ullam.
				</span></p>
				<p className="footer__description description-2">
					This is fake Lamborghini clone site. I made this website for my educational purposes only.
				</p>
				<ul className="footer__socials cluster space-4">
					{renderSocialIcons(dataFooter.socialIcons)}
				</ul>
			</div>
		</footer>
	);
}


