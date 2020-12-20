import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './Courses.css';
import Course from '../Course/Course';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    courseClickedHandler = (id, title) => {
        this.props.history.push('/courses/' + id);
        this.props.history.push('/courses/' + id + '/' + title);
    }

    render () {

        let courses = this.state.courses.map( course => {
            return <article 
                        className="Course" 
                        key={course.id}
                        onClick={() => this.courseClickedHandler(course.id, course.title)}>
                    {course.title}
                    </article>;
        });

        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {courses}
                </section>
                <Route path={this.props.match.url + '/:id/:title'} exact component={Course}/>
            </div>
        );
    }
}

export default Courses;