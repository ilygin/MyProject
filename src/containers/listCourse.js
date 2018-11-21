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
            let countCourseJson = await fetch("http://localhost:3000/api/count_courses");
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
        return (
            <div className = "col-sm" >
                <fieldset className="form-row mb-1">
                    <form className="form-group mb-1 d-flex">
                        <input className="form-control mr-1 col-9 courseName" type="text" placeholder="Поиск" />
                        <Link to={"/new_course/" + this.state.lastCourseId + "/titlePage/0"} className="col">
                            <button className={"btn btn-outline-secondary"} type="submit">Создать курс</button>
                        </Link>
                    </form>
                </fieldset>
                <ul className="card-deck d-flex flex-column">
                    {list}
                </ul>
            </div>
        )
    }
}
function mapStateToProps (state) {
    return {
        courses: state.courses.items
    }
}

export default connect(mapStateToProps)(ListCourses);