export default function Navbar() {

	return (
		<nav className="navbar">
			<div className="app-container">
				<div className="navbar__container">
					<div className="logo">
						<img src="./media/home/image-logo.webp" alt="Lamborghini logo"/>
					</div>
					<ul className="navbar__list">
						<li className="navbar__list-item link-2 link-underline f-fluid-1 f-weight-1"><a href="/">models</a></li>
						<li className="navbar__list-item link-2 link-underline f-fluid-1 f-weight-1"><a href="/">custom solutions</a></li>
						<li className="navbar__list-item link-2 link-underline f-fluid-1 f-weight-1"><a href="/">ownership</a></li>
						<li className="navbar__list-item link-2 link-underline f-fluid-1 f-weight-1"><a href="/">motorsport</a></li>
						<li className="navbar__list-item link-2 link-underline f-fluid-1 f-weight-1"><a href="/">dealerships</a></li>
						<li className="navbar__list-item link-2 link-underline f-fluid-1 f-weight-1"><a href="/">museum</a></li>
						<li className="navbar__list-item link-2 link-underline f-fluid-1 f-weight-1"><a href="/">store</a></li>
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
							<button className="btn-hamburger" data-active={true}>
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