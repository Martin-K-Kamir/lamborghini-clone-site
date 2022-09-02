import React from "react";
import Button from "../components/Button";

export default function Article() {
	return (
		<article className="article">
			<img className="article__image" src="/media/home/image-article-1.jpg" alt=""/>
			<div className="article__content">
				<header className="article__header">
					<time className="title-date">31 august 2022</time>
					<h3 className="title-1">lamborghini v12 history diablo</h3>
					<p className="description-2">The iconic Lamborghini V12 aspirated engine has been the roaring heart of many legendary vehicles throughout its nearly 60-year
						history.</p>
				</header>
				<Button href="/" class="btn-primary" content="read more"/>
			</div>
		</article>
	);
}

