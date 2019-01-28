import React from 'react';
import Course from '../blocks/mainPage/course';
import {connect} from "react-redux";
import { Link } from 'react-router-dom';

class ListCourses extends React.Component {
	constructor(props) {
		super(props);
		this.state = {courses: [], lastCourseId: -1};
	}

	async componentDidMount() {
		try {
			await this.props.fetchCourses();
			this.setState({courses: this.props.courses});
		} catch (e) {
			console.log('Error: ', e);
		}
		try {
			let countCourseJson = await fetch("http://77.222.54.255/api/count_courses");
				try {
					const countCourseResult = await countCourseJson.json();

					(countCourseResult[0]["count(`id`)"] > 0) ?
						this.setState({lastCourseId: countCourseResult[0]["count(`id`)"] + 1}) :
						console.log("Ошибка в подсчете кол-ва курсов");
				} catch (e) {
					console.log(e);
				}
		} catch (e) {
			console.log('Error: ', e);
		}
	}

	render() {
		const list = this.state.courses.map(item =>
			<Course key={item.id.toString()} course_name={item.course_name} id={item.id}/>
		);
		
		const {isAuth} = this.props;
		console.log(this.props);
		const buttonCreateCourse =  isAuth ? (
			<Link to={"/createNewCourse/" + this.state.lastCourseId + "/titlePage/0"}>
				<button className={"search-block__button"} type="submit">Создать курс</button>
			</Link>
		) : false;

		return (
			<div>
				<div className="left-container__search-block">
					<input className="search-block__input" type="text" placeholder="Поиск" />
					{buttonCreateCourse}
				</div>

				<ul className="left-container__list-courses">
					{list}
				</ul>
			</div>
		)
	}
}
function mapStateToProps (state) {
	return {
		courses: state.courses.items,
		isAuth: state.loginUser.isAuth
	}
}

export default connect(mapStateToProps)(ListCourses);
