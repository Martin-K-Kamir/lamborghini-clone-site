export default function Menu(props) {


	return (
		<div className="menu text-neutral-1 surface-neutral-6" data-menu-open={props.menuOpen}>
			<div className="app-container">
				<div className="menu__container">
					<ul className="menu__grid" role="list">
						<li className="menu__item"><a className="link-2 link-underline letterspacing-4" href="/">models</a></li>
						<li className="menu__item"><a className="link-2 link-underline letterspacing-4" href="/">custom solutions</a></li>
						<li className="menu__item"><a className="link-2 link-underline letterspacing-4" href="/">ownership</a></li>
						<li className="menu__item"><a className="link-2 link-underline letterspacing-4" href="/">motorsport</a></li>
						<li className="menu__item"><a className="link-2 link-underline letterspacing-4" href="/">dealership</a></li>
						<li className="menu__item"><a className="link-2 link-underline letterspacing-4" href="/">museum</a></li>
						<li className="menu__item"><a className="link-2 link-underline letterspacing-4" href="/">store</a></li>
						<li className="menu__item"><a className="link-2 link-underline letterspacing-4" href="/">design</a></li>
						<li className="menu__item"><a className="link-2 link-underline letterspacing-4" href="/">innovation & excellence</a></li>
						<li className="menu__item"><a className="link-2 link-underline letterspacing-4" href="/">sustainability</a></li>
						<li className="menu__item"><a className="link-2 link-underline letterspacing-4" href="/">driving programs</a></li>
						<li className="menu__item"><a className="link-2 link-underline letterspacing-4" href="/">lounge</a></li>
						<li className="menu__item"><a className="link-2 link-underline letterspacing-4" href="/">club</a></li>
						<li className="menu__item"><a className="link-2 link-underline letterspacing-4" href="/">history</a></li>
						<li className="menu__item"><a className="link-2 link-underline letterspacing-4" href="/">news</a></li>
					</ul>
					<div className="divider" aria-hidden={true}><div className="divider__line divider__line--overflowing"></div></div>
					<div className="menu__grid">
						<div className="menu__item">
							<h2 className="title-preferences text-neutral-3">languages</h2>
							<div className="cluster">
								<a href="/" className="link-1">english</a>
								<a href="/" className="link-1">italian</a>
								<a href="/" className="link-1">french</a>
								<a href="/" className="link-1">spanish</a>
								<a href="/" className="link-1">german</a>
								<a href="/" className="link-1">chinese</a>
								<a href="/" className="link-1">japanese</a>
							</div>
						</div>
						<div className="menu__item">
							<h2 className="title-preferences text-neutral-3">social</h2>
							<div className="cluster">
								<a href="/" className="link-2">
									<span className="sr-only">click to open our instagram profile</span>
									<svg aria-hidden="true" width="24" height="24" viewBox="0 0 20 20">
										<use href="media/sprites.svg#icon-instagram"/>
									</svg>
								</a>
								<a href="/" className="link-2">
									<span className="sr-only">click to open our facebook profile</span>
									<svg aria-hidden="true" width="24" height="24" viewBox="0 0 20 20">
										<use href="media/sprites.svg#icon-facebook"/>
									</svg>
								</a>
								<a href="/" className="link-2">
									<span className="sr-only">click to open our youtube channel</span>
									<svg aria-hidden="true" width="24" height="24" viewBox="0 0 20 20">
										<use href="media/sprites.svg#icon-youtube"/>
									</svg>
								</a>
								<a href="/" className="link-2">
									<span className="sr-only">click to open our linkedin profile</span>
									<svg aria-hidden="true" width="24" height="24" viewBox="0 0 20 20">
										<use href="media/sprites.svg#icon-linkedin"/>
									</svg>
								</a>
								<a href="/" className="link-2">
									<span className="sr-only">click to open our wechat profile</span>
									<svg aria-hidden="true" width="24" height="24" viewBox="0 0 20 20">
										<use href="media/sprites.svg#icon-wechat"/>
									</svg>
								</a>
								<a href="/" className="link-2">
									<span className="sr-only">click to open our discord community chat</span>
									<svg aria-hidden="true" width="24" height="24" viewBox="0 0 20 20">
										<use href="media/sprites.svg#icon-discord"/>
									</svg>
								</a>
								<a href="/" className="link-2">
									<span className="sr-only">click to open our slack community chat</span>
									<svg aria-hidden="true" width="24" height="24" viewBox="0 0 20 20">
										<use href="media/sprites.svg#icon-slack"/>
									</svg>
								</a>
								<a href="/" className="link-2">
									<span className="sr-only">click to open our spotify profile</span>
									<svg aria-hidden="true" width="24" height="24" viewBox="0 0 20 20">
										<use href="media/sprites.svg#icon-spotify"/>
									</svg>
								</a>
								<a href="/" className="link-2">
									<span className="sr-only">click to open our reddit</span>
									<svg aria-hidden="true" width="24" height="24" viewBox="0 0 20 20">
										<use href="media/sprites.svg#icon-reddit"/>
									</svg>
								</a>
								<a href="/" className="link-2">
									<span className="sr-only">click to open our snapchat profile</span>
									<svg aria-hidden="true" width="24" height="24" viewBox="0 0 20 20">
										<use href="media/sprites.svg#icon-snapchat"/>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}