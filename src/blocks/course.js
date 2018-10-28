import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Course extends Component {
    render() {
        const { course_name, id} = this.props;
        let link = "/course/" + id;
        return (
            <Link to={link} className="link-course">
                <li className="card mb-2 mr-2 ml-2">
                    <div className="card-body">
                        <h3 className="card-title">{course_name}</h3>
                        <p className="card-text">Небольшое описание курса, перечисляющее основные темы.</p>
                    </div>
                </li>
            </Link>
        )
    }
}