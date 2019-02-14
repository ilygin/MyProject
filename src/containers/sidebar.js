import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{
					courseId: 1,
					pageId: 1,
					title: "Первая страница"
				},
				{
					courseId: 1,
					pageId: 2,
					title: "Вторая страница"
				},
				{
					courseId: 1,
					pageId: 3,
					title: "Третья странциа"
				}
			]
		};
	}

	render() {
		let sidebar = this.state.items.map( (item, index) => {
			return (
				<li>
					<Link to = {"/course/"+ item.courseId + item.pageId}>
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
