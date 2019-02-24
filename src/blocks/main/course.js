import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Course extends Component {
    render() {
        const { course_name, id} = this.props;
        let link = "/course/" + id + "/1";
        return (
            <Link to={link} className="link-course">
                <li className="list-courses__item">
                    <h3 className="card-title">{course_name}</h3>
                </li>
            </Link>
        )
    }
}