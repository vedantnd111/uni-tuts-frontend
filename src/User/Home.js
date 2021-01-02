import React, { useState, useEffect } from 'react';
import { isAuthenticated } from '../auth';
import { fetchStandard, fetchSubjectsByStandard } from './apiUser';
import book1 from '../core/book1.jpg';
import Courses from './Courses';
import { Link } from 'react-router-dom';

function Home() {
    const { user, token } = isAuthenticated();
    const [standards, setStandards] = useState([]);
    const [error, setError] = useState(false);
    const [subjects, setSubjects] = useState([]);

    const loadStandards = () => {
        fetchStandard()
            .then(data => {
                if (data.error) {
                    setError(data.error);
                }
                else {
                    setStandards(data);
                }
            })
    };
    const loadSubjects = () => {
        fetchSubjectsByStandard(user.standard, user._id, token)
            .then(data => {
                if (data.error) {
                    setError(data.error);
                }
                else {
                    setSubjects(data);
                }
            })

    };

    useEffect(() => {
        loadStandards();
        if (isAuthenticated() && isAuthenticated().user.role === 0) {

            loadSubjects();
        }
    });

    return (
        <div>
            <div class="parallax-container">
                <div class="parallax"><img className="book-img" alt="book" src={book1} /></div>
                <div className="text-on-img1">
                    <h1 className="header first1">Learning course online</h1>
                    <Link class="waves-effect waves-light btn-large" to={{ pathname: "/courses", error: error, standards: standards, subjects: subjects }}><i class="material-icons right">arrow_forward</i>Go to Courses</Link>
                </div>

            </div>
            <div class="section white">
                <div className="row container">
                    <h2 class="header section-heading">Discover our Courses</h2>
                    <p class="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
                </div>
                <Courses error={error} standards={standards} subjects={subjects} />
            </div>

            <div class="parallax-container">
                <div class="parallax"><img alt="book" src={book1} /></div>
            </div>
            <div class="section white container">
                <div class="row container">
                    <h2 class="header section-heading">Instructors</h2>
                    <p class="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
                </div>
            </div>

        </div>



    )
}

export default Home
