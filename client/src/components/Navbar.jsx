import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-4">
            <div className="navbar-start">
                <span className="text-3xl font-bold text-primary tracking-wide">
                    Question <span className="text-secondary">Bank</span>
                </span>
            </div>

            <div className="navbar-end space-x-2">
                <Link to="/" className="btn btn-outline">
                    All Posts
                </Link>
                <Link to="/create" className="btn btn-primary">
                    Create Post
                </Link>
            </div>
        </div>
    )
}

export default Navbar
