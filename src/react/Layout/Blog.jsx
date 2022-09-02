import React from "react";
import data from "../../data/dataHome";
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
						<div className="stack space-2">
							{data.articles.map((article, index) => (
								<div className="wrap">
									<Article title={article.title} description={article.description} date={article.date}
									         isMain={article.isMain} link={article.link} imgIndex={index + 1}/>
								</div>
							))}
						</div>
					</div>
					<span className="display-at[screen-md] inline-center space-5">
						<Button href="/" class="btn-secondary" content="view all"/>
					</span>
				</div>
			</div>
		</section>
	);
}

