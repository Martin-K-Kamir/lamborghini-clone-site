export default function App() {
	return (
		<div className="App">
			<section className="typography">
				<div className="app-container">
					<p className="title-3">Lorem ipsum dolor sit amet.</p>
					<div className="container">
						<p className="title-2">Lorem ipsum dolor sit amet.</p>
						<p className="title-1">Lorem ipsum dolor sit amet.</p>
						<div className="container">
							<p className="title-date">Lorem ipsum dolor sit amet.</p>
							<p className="title-preferences">Lorem ipsum dolor sit amet.</p>
							<p className="break">Subtites</p>
							<p className="subtitle-2">Lorem ipsum dolor sit amet.</p>
							<p className="subtitle-1">Lorem ipsum dolor sit amet.</p>
							<p className="break">Descriptions</p>
							<p className="description-2">Lorem ipsum dolor sit amet.</p>
							<p className="description-1">Lorem ipsum dolor sit amet.</p>
							<p className="break">Links</p>
							<p className="link-2">Lorem ipsum dolor sit amet.</p>
							<p className="link-1">Lorem ipsum dolor sit amet.</p>
							<p className="sublink-1">Lorem ipsum dolor sit amet.</p>
							<p className="break">Buttons</p>
							<button className="btn-primary">Button</button>
							<button className="btn-secondary">Button</button>
							<button className="btn-hexagon">
								<span className="sr-only">click to move right</span>
								<svg aria-hidden="true">
									<use href="media/sprites.svg#icon-hexa-arrow-right"/>
								</svg>
							</button>
							<button className="btn-hexagon">
								<span className="sr-only">click to move left</span>
								<svg aria-hidden="true">
									<use href="media/sprites.svg#icon-hexa-arrow-left"/>
								</svg>
							</button>
							<button className="btn-hexagon">
								<span className="sr-only">click to read more</span>
								<svg aria-hidden="true">
									<use href="media/sprites.svg#icon-hexa-plus"/>
								</svg>
							</button>

							<button className="btn-icon">
								<span className="sr-only">click to open chat with our support team</span>
								<svg aria-hidden="true">
									<use href="media/sprites.svg#icon-chat"/>
								</svg>
							</button>
							<button className="btn-icon">
								<span className="sr-only">click to open search menu</span>
								<svg aria-hidden="true">
									<use href="media/sprites.svg#icon-search"/>
								</svg>
							</button>

							<button className="btn-icon">
								<span className="sr-only">click to open our instagram profile</span>
								<svg aria-hidden="true">
									<use href="media/sprites.svg#icon-instagram"/>
								</svg>
							</button>
							<button className="btn-icon">
								<span className="sr-only">click to open our facebook profile</span>
								<svg aria-hidden="true">
									<use href="media/sprites.svg#icon-facebook"/>
								</svg>
							</button>
							<button className="btn-icon">
								<span className="sr-only">click to open our youtube channel</span>
								<svg aria-hidden="true">
									<use href="media/sprites.svg#icon-youtube"/>
								</svg>
							</button>
							<button className="btn-icon">
								<span className="sr-only">click to open our linkedin profile</span>
								<svg aria-hidden="true">
									<use href="media/sprites.svg#icon-linkedin"/>
								</svg>
							</button>
							<button className="btn-icon">
								<span className="sr-only">click to open our wechat profile</span>
								<svg aria-hidden="true">
									<use href="media/sprites.svg#icon-wechat"/>
								</svg>
							</button>
							<button className="btn-icon">
								<span className="sr-only">click to open our discord community chat</span>
								<svg aria-hidden="true">
									<use href="media/sprites.svg#icon-discord"/>
								</svg>
							</button>
							<button className="btn-icon">
								<span className="sr-only">click to open our slack community chat</span>
								<svg aria-hidden="true">
									<use href="media/sprites.svg#icon-slack"/>
								</svg>
							</button>
							<button className="btn-icon">
								<span className="sr-only">click to open our spotify profile</span>
								<svg aria-hidden="true">
									<use href="media/sprites.svg#icon-spotify"/>
								</svg>
							</button>
							<button className="btn-icon">
								<span className="sr-only">click to open our reddit</span>
								<svg aria-hidden="true">
									<use href="media/sprites.svg#icon-reddit"/>
								</svg>
							</button>
							<button className="btn-icon">
								<span className="sr-only">click to open our snapchat profile</span>
								<svg aria-hidden="true">
									<use href="media/sprites.svg#icon-snapchat"/>
								</svg>
							</button>

							<div className="tabs">
								<button className="tabs__tab" data-active={true}>Aventador</button>
								<button className="tabs__tab">Huracán</button>
								<button className="tabs__tab">Urus</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
