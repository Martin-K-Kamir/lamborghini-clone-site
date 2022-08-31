export default function Tabs(props) {

	return (<div className="tabs">
			{props.data.map((item, index) => {
				<button className="tabs__tab" data-active={item.active}>{item.content}</button>
			})}
		</div>);
}

