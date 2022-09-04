import React from "react";
import dataFooter from "../../data/dataFooter";


export default function Footer() {

	function renderList(data) {
		return (data.map(curLink => (
			<li className="link-2 link-underline f-size-3 f-weight-1">
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
			<div className="footer__container stack space-fluid-4">
				<div className="footer__lists">
					<nav className="footer__navigation">
						<ul className="cluster">
							{renderList(dataFooter.list)}
						</ul>
					</nav>
					<ul className="footer__socials cluster space-3">
						{renderSocialIcons(dataFooter.socialIcons)}
					</ul>
				</div>
				<p className="disclaimer description-1"><span>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa cum eligendi ex fugiat illo impedit laboriosam libero minus, molestias nam, nesciunt odit placeat quas ratione saepe sint sunt voluptates? Cumque fuga impedit quibusdam, quos saepe similique unde vel veniam. At atque mollitia necessitatibus ullam.
				</span></p>
				<p className="description-2">
					This is fake Lamborghini clone site.
					<br/>
					Lorem ipsum dolor sit amet.
				</p>
			</div>
		</footer>
	);
}


