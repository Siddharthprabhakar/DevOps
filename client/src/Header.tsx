import React from "react"
import { Link } from "react-router-dom"

export function Header() {
    // Retrieve user details from localStorage
    const storedUserString = sessionStorage.getItem("user");
    const storedUser = storedUserString ? JSON.parse(storedUserString) : null;
    console.log(storedUser);
    const handleLogout = () => {
        sessionStorage.clear();
    }
    return (
        <React.Fragment>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>                        </label>
                        <ul 
                            tabIndex={0} 
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/catalog">Course Catalog</Link>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">EduFlex</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/catalog">Course Catalog</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    {storedUser === null ? (
                        <React.Fragment>
                            <Link to="/signup" className="btn btn-outline btn-primary">Sign Up</Link>
                            <Link to="/login" className="btn btn-primary">Login</Link>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <div className="avatar placeholder">
                                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                    <span className="text-md">{storedUser ? storedUser.name.split(' ').map((word: string) => word[0]).join('') : null}</span>
                                </div>
                            </div>
                            <Link to="/"
                                onClick={handleLogout}
                                className="btn btn-outline btn-error"
                            >
                                Sign Out
                            </Link>

                        </React.Fragment>
                    )}
                </div>
            </div>
        </React.Fragment>
    )
}