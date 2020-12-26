import React from 'react'
import { Link } from 'react-router-dom'

function Tabbar() {
    return (
        <div>
            <ul class="nav nav-tabs nav-justified">
                <li class="nav-item">
                    <Link className="nav-link" to="/overview">
                        Overview
                    </Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/qna">
                        QnA
                    </Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/notes">
                        Notes
                    </Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/announcements">
                        Announcements
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Tabbar
