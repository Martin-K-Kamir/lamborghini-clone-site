export default function App() {
	return (
		<div className="App">
			{/*// Navbar*/}
			<ul className="navbar">
				<li className="navbar__text"><a href="/">Models</a></li>
				<li className="navbar__text"><a href="/">Custom solutions</a></li>
				<li className="navbar__text"><a href="/">ownership</a></li>
				<li className="navbar__text"><a href="/">motorsport</a></li>
			</ul>
			{/*navbar sub*/}
			<ul className="navbar">
				<li className="navbar__subtext"><a href="/">Aventador</a></li>
			</ul>
			{/*search subtitle*/}
			<p className="search__subtext">LAMBORGHINI</p>
			{/*search title*/}
			<p className="search__text">SEARCH IN THE WEBSITE</p>
			{/*navbar extended */}
			<ul className="navbar">
				<li className="navbar__text-extended"><a href="/">Design</a></li>
			</ul>
			{/*navbar extended down title */}
			<p className="navbar__text-extended-title">LANGUAGES</p>
			{/*navbar extended down text */}
			<p className="navbar__text-extended-text">ENGLISH</p>

			{/*Cover*/}
			<p className="cover-subtext">Huracan tecnica</p>
			<p className="cover-text">Take all your souls to drive</p>

			{/*models*/}
			<p className="models__top-text">Models</p>
			<p className="models__top-text-title">Huracán</p>
			<p className="models__top-text-subtitle">TAKE ALL YOUR SOULS TO DRIVE</p>

			{/*Config*/}
			<p className="config__text-top">Configurator</p>
			<p className="config__text-title">Create your urus</p>

			{/*news*/}
			<p className="models__top-text">NEWS</p>
			<p className="models__top-text-title">LAMBORGHINI WORLD</p>

			{/*blog*/}
			<p className="blog_date">5 august 2022</p>
			<p className="blog_title">A NEW CHAPTER FOR LAMBORGHINI’S NFT JOURNEY</p>
			<p className="blog_desc">Automobili Lamborghini’s collaboration with NFT PRO™ and INVNT continues with a new
				chapter.</p>

			<p className="blog_date--small">5 august 2022</p>
			<p className="blog_tag">HURACÁN</p>
			<p className="blog_title">LAMBORGHINI MAGAZINE #30: THE PLAYLIST</p>

			{/*Footer*/}
			<ul className="footer">
				<li className="footer__text"><a href="/">Company</a></li>
				<li className="footer__text"><a href="/">Careers</a></li>
				<li className="footer__text"><a href="/">Contact us</a></li>
				<li className="footer__text"><a href="/">Media center</a></li>
			</ul>
			<p className="footer__desc-sm">The consumption and emissions values in the website refer to your
				geographical IP. This
				value might be unrealistic if you navigate using VPN or if the position of your Internet provider is
				imprecise. If you believe you are incorrectly geolocalized, contact your dealer to get valid consumption
				and emissions information in your area.</p>
			<p className="footer__desc">Copyright © 2022 Automobili Lamborghini S.p.A. a sole shareholder company part of Audi Group. All rights
				reserved. VAT no. IT 00591801204</p>
		</div>
	);
}
