import React from "react";

export default function Button(props) {

	function content(props) {
		switch (props.type) {
			case "chat":
				return <>
					<svg aria-hidden="true" width="25" height="25" viewBox="0 0 27 27">
						<use href="media/sprites.svg#icon-chat"/>
					</svg>
				</>;
			case "search":
				return <>
					<svg aria-hidden="true" width="25" height="25" viewBox="0 0 27 27">
						<use href="media/sprites.svg#icon-search"/>
					</svg>
				</>;
			case "hexa-arrow-right":
				return <>
					<svg aria-hidden="true">
						<use href="media/sprites.svg#icon-hexa-arrow-right"/>
					</svg>
				</>;
			case "hexa-arrow-left":
				return <>
					<svg aria-hidden="true">
						<use href="media/sprites.svg#icon-hexa-arrow-left"/>
					</svg>
				</>;
			case "hexa-plus":
				return <>
					<svg aria-hidden="true">
						<use href="media/sprites.svg#icon-hexa-plus"/>
					</svg>
				</>;
			default:
				return props.content;
		}
	}

	return (
		<>
			{props.href ?
				<a href={`${props.href}`} className={props.class} style={props.size && {"--btn-size": props.size + "rem"}}>
					{props.srOnly && <span className="sr-only">{props.srOnly}</span>}
					{content(props)}
				</a>
				:
				<button className={props.class} style={{"--btn-size": props.size + "rem"}}>
					{props.srOnly && <span className="sr-only">{props.srOnly}</span>}
					{content(props)}
				</button>}
		</>
	);
}
