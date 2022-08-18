
export default function Button(props) {

	return (
		<>
			{props.href ?
				<a href={`${props.href}`} className={}>{props.content}</a>
				:
				<button>{props.content}</button>}
		</>
	);
}
