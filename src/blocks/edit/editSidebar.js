import React from 'react';
import { Link } from 'react-router-dom';

class NewSidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}
	async componentDidMount() {
		try {
			await this.props.fetchCourseData(this.props.courseId);
			console.log(this.props)
			let sidebarList = [];
			sidebarList = this.props.items.courseDataItems.map((item)=>{
				return {
					title: item.title,
					isUnit: !!item.isUnit,
					courseId: item.courseId,
					numberPage: item.numberPage,
					isActive: false
				}
			});
			if (sidebarList !== undefined && sidebarList[0] !== undefined) {
				sidebarList[this.props.activeItem].isActive = true;
			}

			if (sidebarList[0] === undefined) {
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
				this.setState({sidebarList})
			}
		}catch(e) {
			console.log('Error: ', e);
		}
	}

	onButtonAdd(type) {
		let currentItems = this.state.items;
		let activeItemIndex = this.state.activeItem;
		currentItems[activeItemIndex].active = false;
		let newElement = {title: type==="unit" ? "Новая глава" : "Новый раздел",
			type,
			active: true
		};
		let newItems = [...currentItems.slice(0, activeItemIndex+1),
					newElement,
					...currentItems.slice(activeItemIndex+1)];
		this.setState({
		items: newItems,
		activeItem: activeItemIndex+1
		});
	}
	//
	onEditItemActive(updateActiveItem) {
		let updateItems = this.state.items;
		let currentActiveItem = this.state.activeItem;
		updateItems[currentActiveItem].active = false;
		updateItems[updateActiveItem].active = true;
		this.setState({
			items: updateItems,
			activeItem: updateActiveItem
		})
	}

	render() {
		console.log('_________________');
		console.log(this.state);
		console.log('_________________');

//		debugger;
		// let sidebarList = this.state.items.map( (item, index) => {
		// 	index++;
		// 	let type = item.isUnit ? "unit" :
		// 				item.numberPage === 0 ? "titlePage" : "section";
		// 	return (
		// 		<li>
		// 			<Link to = { "/editCourse/"+ item.courseId +"/"+ type + "/" + item.numberPage }>
		// 				<li key={"pagId" + index} className={"sidebar__list-item"}>
		// 					{item.title}
		// 				</li>
		// 			</Link>
		// 			{
		// 				item.isActive ?
		// 					(<div className="sidebar__button-container">
		// 						<button onClick={this.onButtonAdd.bind(this, "unit")} 
		// 							  type="button" 
		// 							  className="button-container__btn">
									
		// 							Добавить главу
		// 						</button>
		// 						<button onClick={this.onButtonAdd.bind(this, "section")} 
		// 							  type="button" 
		// 							  className="button-container__btn">
									
		// 							Добавить раздел
		// 						</button>
		// 					</div>) :
		// 					false
		// 			}
		// 		</li>
		// 	)
		// });

		// let newSidebar = this.state.items.map( (item, index) => {

		// 	let liClassName = (item.type === "unit"||item.type === "titlePage") ?
		// 						("sidebar__list-item") :
		// 						("list-item-padding sidebar__list-item");

		// 	return (
		// 		<li>
		// 			<Link to = { "/editNewCourse/"+ item.courseId +"/"+ item.type + "/" + item.numberPage}>

		// 				<li key={"pagId" + index}
		// 					onClick={this.onEditItemActive.bind(this, index)} 
		// 					className={liClassName}
		// 				>
		// 					{
		// 						(item.type === "unit"||item.type === "titlePage") ?
		// 							item.title :
		// 							String.fromCharCode(8226) + " " + item.title 
		// 					}
		// 				 </li>
		// 			</Link>

		// 			{
		// 				item.active ?
		// 				(<div className="sidebar__button-container">
		// 					<button onClick={this.onButtonAdd.bind(this, "unit")} type="button" className="button-container__btn">
		// 						Добавить главу
		// 					</button>
		// 					<button onClick={this.onButtonAdd.bind(this, "section")} type="button" className="button-container__btn">
		// 						Добавить раздел
		// 					</button>
		// 				</div>) : false}
		// 		</li>
		// 	)}
		// );

		return (
			<div className="sidebar">
				<ul>
					
				</ul>
			</div>
		)
	}
}

export default NewSidebar;
