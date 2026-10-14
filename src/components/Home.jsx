import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h2>Welcome To Home Page</h2>
        <nav>
            <ul>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <Link to='/register'>Registration</Link>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Home