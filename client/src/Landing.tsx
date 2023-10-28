import React from "react"
import heroImage from "./assets/Is-online-learning-as-good-as-face-to-face-learning-edited.jpg"
import { Link } from "react-router-dom"

export function Landing() {
    return (
        <React.Fragment>
            <div className="hero min-h-screen" style={{backgroundImage: `url(${heroImage})`}}>
                <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                        <h1 
                            className="mb-8 text-5xl font-bold text-transparent bg-clip-text 
                            bg-gradient-to-r from-blue-500 to-purple-500">
                            Welcome to EduFlex!
                        </h1>
                        <p className="mb-8">Unlock the doors to boundless knowledge with our immersive e-learning platform. 
                        Embark on a journey of discovery and empower your mind with limitless possibilities.</p>
                        <Link to="/signup" className="btn btn-primary mb-6">Get Started as a Student</Link>
                        <Link to="/signup" className="btn btn-primary">Get Started as an Instructor</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}