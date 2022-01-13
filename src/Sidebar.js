import React from 'react'

function Sidebar({show}) {
    return (
        <div className={show ? 'sidenav active' : 'sidenav'}>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/dashboard'>Dashboard</a>
                </li>
                <li>
                    <a href='/courses'>Courses</a>
                </li>
                <li>
                    <a href='/quizes'>Quizes</a>
                </li>

            </ul>
        </div>
    )
}

export default Sidebar
