import React from "react";
import Button from "../components/Button";

export default function Article(props) {
	return (
		<article className={`article ${props.isMain ? "article--main" : ""}`}>
			<a href={props.link}>
				<span className="sr-only">
					read more about {props.title}
				</span>
				<img className="article__image" src={`/media/home/image-article-${props.imgIndex}.webp`} alt={props.alt}/>
			</a>
			<div className="article__content space-initial">
				<header className="article__header">
					<time className="title-date">{props.date}</time>
					<h3 className="title-1"><a href={props.link}><h3 className="title-1">{props.title}</h3></a></h3>
					{props.description && <p className="description-2">{props.description}</p>}
				</header>
				<Button href={props.link} class="btn-primary" content="read more"/>
			</div>
		</article>
	);
}


