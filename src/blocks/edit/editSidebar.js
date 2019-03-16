import React from 'react';
import { Link } from 'react-router-dom';

class NewSidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			activeItem: 0
		};
	}
	async componentDidMount() {
		try {
			await this.props.fetchCourseData(this.props.courseId);
		}catch(e) {
			console.log('Error: ', e);
		}
		let items = [];
		items = this.props.items.courseDataItems.map((item)=>{
			return {
				title: item.title,
				isUnit: !!item.isUnit,
				courseId: item.courseId,
				numberPage: item.numberPage,
				isActive: false
			}
		});

		if (items !== undefined && items[0] !== undefined ) {
			items[this.props.activeItem].isActive = true;
		}

		if (items[0] === undefined) {
			this.setState({
				items: [{
					title: "Титульный лист",
					type: "titlePage",
					isActive: true,
					numberPage: 0,
					courseId: this.props.courseId,
					isUnit: false,

				}],
				activeItem: 0
			});
		}else {
			this.setState({items})
		}
	}

	onButtonAdd(type) {
		let currentItems = this.state.items;
		let activeItemIndex = this.state.activeItem;
		currentItems[activeItemIndex].isActive = false;
		let newElement = {
			title: type ==="unit" ? "Новая глава" : "Новый раздел",
			type,
			isActive: true,
			courseId: this.props.courseId,
			isUnit: type ==="unit",
		};
		let newItems = [...currentItems.slice(0, activeItemIndex+1),
					newElement,
					...currentItems.slice(activeItemIndex+1)];
		this.setState({
			items: newItems,
			activeItem: activeItemIndex+1
		});
	}

	onEditItemActive(updateActiveItem) {
		let updateItems = this.state.items;
		let currentActiveItem = this.state.activeItem;

		updateItems[currentActiveItem].isActive = false;
		updateItems[updateActiveItem].isActive = true;
		debugger
		this.setState({
			items: updateItems,
			activeItem: updateActiveItem
		})
	}

	render() {
		let sidebarList = this.state.items.map( (item, index) => {

			let type = item.isUnit ? "unit" :
						item.numberPage === 0 ? "titlePage" : "section";
			let liClassName = (item.type === "unit"||item.type === "titlePage") ?
						("sidebar__list-item") :
 						("list-item-padding sidebar__list-item");
			return (
				<li>
					<Link to = { "/editCourse/"+ item.courseId +"/"+ type + "/" + index }>
						<li 	key={"pagId" + index} 
							className={"sidebar__list-item"}
							onClick={this.onEditItemActive.bind(this, index)}
							className={liClassName}>
							{item.title}
						</li>
					</Link>
					{
						
						item.isActive ?
							(<div className="sidebar__button-container">
								<button onClick={this.onButtonAdd.bind(this, "unit")} 
									  type="button" 
									  className="button-container__btn">
									
									Добавить главу
								</button>
								<button onClick={this.onButtonAdd.bind(this, "section")} 
									  type="button" 
									  className="button-container__btn">
									
									Добавить раздел
								</button>
							</div>) :
							false
					}
				</li>
			)
		});

		return (
			<div className="sidebar">
				<ul>
					{sidebarList}
				</ul>
			</div>
		)
	}
}

export default NewSidebar;
