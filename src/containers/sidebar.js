import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let sidebar = this.props.sidebarList.map( (item, index) => {
			index++;
			return (
				<li>
					<Link to = {"/course/"+ item.courseId +"/"+ index}>
						<li key={"pagId" + index} className={"sidebar__list-item"}>
							{item.title}
						</li>
					</Link>
				</li>
			)
		});

		return (
			<div className="sidebar">
				<ul>
					{sidebar}
				</ul>
			</div>
		)
	}
}

export default Sidebar;
