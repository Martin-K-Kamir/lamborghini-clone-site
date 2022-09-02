import React from "react";
import Button from "../components/Button";
import Article from "../components/Article";


export default function Blog() {
	return (
		<section className="blog">
			<div className="container">
				<div className="blog__container stack space-4">
					<header className="blog__header">
						<p className="subtitle-3">news</p>
						<h2 className="title-3 measure-9">lamborghini world</h2>
					</header>
					<div className="blog__articles">
						<div className="space-initial">
							<Article/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

