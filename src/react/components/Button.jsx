import React, {useState} from "react";

export default function Button(props) {
	const [contentJustify, setContentJustify] = useState(props.contentJustify ? props.contentJustify : "end");

	function icon(props) {
		switch (props.type) {
			case "chat":
				return <svg aria-hidden="true" width="25" height="25" viewBox="0 0 27 27">
					<use href="media/sprites.svg#icon-chat"/>
				</svg>;
			case "search":
				return <svg aria-hidden="true" width="25" height="25" viewBox="0 0 27 27">
					<use href="media/sprites.svg#icon-search"/>
				</svg>;
			case "hexa-arrow-right":
				return <svg aria-hidden="true">
					<use href="media/sprites.svg#icon-hexa-arrow-right"/>
				</svg>;
			case "hexa-arrow-left":
				return <svg aria-hidden="true">
					<use href="media/sprites.svg#icon-hexa-arrow-left"/>
				</svg>;
			case "hexa-plus":
				return <svg aria-hidden="true">
					<use href="media/sprites.svg#icon-hexa-plus"/>
				</svg>;
			default:
				return <svg aria-hidden="true">
					<use href="media/sprites.svg#icon-hexa-arrow-right"/>
				</svg>;
		}
	}

	function content(props) {
		return (
			<>
				{props.srOnly && <span className="sr-only">{props.srOnly}</span>}
				{contentJustify === "start" && <span className="f-weight-1 line-height-5 letterspacing-3">{props.content}</span>}
				{icon(props)}
				{contentJustify === "end" && <span className="f-weight-1 line-height-5 letterspacing-3">{props.content}</span>}
			</>
		)
	}

	return (
		<>
			{props.href ?
				<a href={`${props.href}`} className={props.class} style={props.size && {"--btn-size": props.size + "rem"}}>
					{content(props)}
				</a>
				:
				<button className={props.class} style={{"--btn-size": props.size + "rem"}}>
					{content(props)}
				</button>}
		</>
	);
}
