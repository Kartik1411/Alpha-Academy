import React from 'react';
import '../styles/right.css';
import { Link } from 'react-router-dom';

function RightSideBar () {

    return(
    <section className="right">
        <ul>
            <li>
                <Link to="/login-teacher" exact className="links"> Login as Teacher </Link>
            </li>
            <li>
                <Link to="/login-student" exact className="links"> Login as Student </Link>
            </li>
            <li> 
                <Link to="/practice" exact className="links"> Practice </Link>
            </li>
            <li> 
                <Link to="/help" exact className="links"> Help </Link> 
            </li>
        </ul>
    </section>
    )
}

export default RightSideBar;