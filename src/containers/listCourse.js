import React from 'react';
import Course from '../blocks/mainCourse/course';
import {connect} from "react-redux";
import { Link } from 'react-router-dom';

class ListCourses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {courses: []};
    }

    async componentDidMount() {
        try {
            await this.props.fetchCourses();
            this.setState({courses: this.props.courses});
        } catch (e) {
            console.log('Error: ', e);
        // }
        // try {
        //     let countCourse = await
        // }
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
                        <Link to={"/new_course/:id/page/1"} className="col">
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