import React from "react";
import dataFooter from "../../data/dataFooter";


export default function Footer() {

	function renderList(data) {
		return (data.map(curLink => (
			<li className="link-2 link-underline f-fluid-1 f-weight-1">
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
					<ul className="footer__socials cluster">
						{renderSocialIcons(dataFooter.socialIcons)}
					</ul>
				</div>
				<p className="disclaimer description-1"><span>The consumption and emissions values in the website refer to your geographical IP. This value might be unrealistic
					if you
					navigate
					using VPN or if the position of your Internet provider is imprecise. If you believe you are incorrectly geolocalized, contact your dealer to get valid
					consumption and emissions information in your area.</span></p>
				<p className="description-2">
					Copyright © 2022 Automobili Lamborghini S.p.A. a sole shareholder company part of Audi Group.
					<br/>
					All rights reserved. VAT no. IT
				</p>
			</div>
		</footer>
	);
}


