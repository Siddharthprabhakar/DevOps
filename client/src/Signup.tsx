import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

type CategoryData = {
    name: string
};

export function Signup() {
    const [ userRole, setUserRole ] = useState("");
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ expertise, setExpertise ] = useState("");
    const [ qualification, setQualification ] = useState("");
    const [ educationLevel, setEducationLevel ] = useState("");
    const [ categoryData, setCategoryData ] = useState<CategoryData[]>();
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchAllCategories() {
            try {
                const response = await fetch('http://localhost:8080/api/category/getAllCategories', 
                {
                    method: 'GET',
                    headers: { 'Content-Type' : 'application/json'},
                })
                if (response.status === 200) {
                    const responseData = await response.json();
                    console.log(responseData);
                    setCategoryData(responseData);
                } else {
                    console.error('Category fetching failed');
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllCategories();
    },[]);

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        console.log(userRole);
        async function createStudent () {
            try {
                const response = await fetch('http://localhost:8080/api/user/createStudent', 
                {
                    method: 'POST',
                    headers: { 'Content-Type' : 'application/json'},
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        password: password,
                        education_level: educationLevel
                    })
                })
                if (response.status === 200) {
                    const responseData = await response.json();
                    console.log(responseData);
                    sessionStorage.setItem("user", JSON.stringify(responseData));
                    navigate("/");
                } else {
                    console.error('Student creation failed');
                }
            } catch (error) {
                console.log(error);
            }
        }
            
        async function createInstructor(){
            try {
                const response = await fetch('http://localhost:8080/api/user/createInstructor', 
                {
                    method: 'POST',
                    headers: { 'Content-Type' : 'application/json'},
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        password: password,
                        qualification: qualification,
                        expertise: expertise
                    })
                })
                if (response.status === 200) {
                    const responseData = await response.json();
                    console.log(responseData);
                    sessionStorage.setItem("user", JSON.stringify(responseData));
                    navigate("/");
                } else {
                    console.error('Instructor creation failed');
                }
            } catch (error) {
                console.log(error);
            }
        }
        if(userRole == "student")
            createStudent();
        else if(userRole == "instructor")
            createInstructor();
    }

    return(
        <React.Fragment>
           <div className="absolute bg-gradient-to-b from-primary to-secondary bg-opacity-75 inset-0 z-0">
                <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                    <div className="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                        <div className="self-start hidden lg:flex flex-col  text-white">
                            <h1 className="mb-3 font-bold text-5xl">Welcome!</h1>
                            <p className="pr-3">
                                Join our community of learners and start your quest for new horizons. 
                                Sign up today and embark on your path to enlightenment. 
                                Your future starts here.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center self-center  z-10">
                        <div className="p-12 bg-white mx-auto rounded-2xl w-100">
                            <div className="mb-4">
                                <h3 className="font-semibold text-2xl text-gray-800">Sign Up</h3>
                                <p className="text-gray-500">Please enter your details.</p>
                            </div>
                            <form className="space-y-5" onSubmit={handleSubmit}>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 tracking-wide">
                                        Name
                                    </label>
                                    <input 
                                        className=" w-full text-base px-4 py-2 border border-gray-300 
                                        rounded-lg focus:outline-none focus:border-secondary" 
                                        type="text" 
                                        placeholder="Enter your full name" 
                                        onChange={(event) => setName(event.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 tracking-wide">
                                        Email
                                    </label>
                                    <input 
                                        className=" w-full text-base px-4 py-2 border border-gray-300 
                                        rounded-lg focus:outline-none focus:border-secondary" 
                                        type="email" 
                                        placeholder="mail@gmail.com" 
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                        Password
                                    </label>
                                    <input 
                                        className="w-full content-center text-base px-4 py-2 border border-gray-300 
                                        rounded-lg focus:outline-none focus:border-secondary" 
                                        type="password" 
                                        placeholder="Enter your password" 
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                        Confirm Password
                                    </label>
                                    <input 
                                        className="w-full content-center text-base px-4 py-2 border border-gray-300 
                                        rounded-lg focus:outline-none focus:border-secondary" 
                                        type="password" 
                                        placeholder="Confirm your password"
                                    />
                                </div>
                                <div className="space-y-2 flex gap-4 items-center justify-center">
                                    <div className="text-sm font-medium text-gray-700 tracking-wide">
                                        Are you a student or an instructor?
                                    </div> 
                                    <label className="cursor-pointer flex gap-2 items-center">
                                        <span className="label-text">Student</span> 
                                        <input 
                                            type="radio" 
                                            name="radio-10" 
                                            value="student"
                                            className="radio radio-accent" 
                                            onClick={() => setUserRole("student")}
                                        />
                                    </label>
                                    <label className="cursor-pointer flex gap-2 items-center">
                                        <div className="label-text">Instructor</div> 
                                        <input 
                                            type="radio" 
                                            name="radio-10" 
                                            value="instructor" 
                                            className="radio radio-accent" 
                                            onClick={() => setUserRole("instructor")} 
                                        />
                                    </label>
                                </div>
                                {userRole === "student" ? (
                                    <div className="space-y-2 flex gap-4 items-center justify-center">
                                        <select 
                                            className="select select-ghost w-full max-w-xs border border-gray-300 focus:outline-none focus:border-secondary"  
                                            onChange={(event) => setEducationLevel(event.target.value)}
                                        >
                                            <option disabled selected>Select your highest education level</option>
                                            <option value="High School">High School(12th or 10th)</option>
                                            <option value="Undergraduate">Undergraduate</option>
                                            <option value="Graduate">Graduate</option>
                                        </select>
                                    </div>
                                ) : userRole === "instructor" ? (
                                    <div className="space-y-2 flex gap-4 items-center justify-center">
                                        <select 
                                            className="select select-ghost w-full max-w-xs border border-gray-300 focus:outline-none focus:border-secondary"  
                                            onChange={(event) => setExpertise(event.target.value)}
                                        >
                                            <option disabled selected>Select your Expertise</option>
                                            {categoryData?.map((category: CategoryData) => (
                                                <option value={category.name.toString()}>{category.name}</option>
                                            ))}
                                        </select>
                                        <select 
                                            className="select select-ghost w-full max-w-xs border border-gray-300 focus:outline-none focus:border-secondary"  
                                            onChange={(event) => setQualification(event.target.value)}
                                        >
                                            <option disabled selected>Select your {expertise} related degree</option>
                                            <option value="B.Sc.">B.Sc.</option>
                                            <option value="M.Sc.">M.Sc.</option>
                                            <option value="Ph.D.">Ph.D.</option>
                                        </select>
                                    </div>
                                ) : null}
                                <div className="flex flex-col gap-4 items-center">
                                    <button type="submit" className="mt-3 w-full flex justify-center bg-secondary hover:bg-secondary-focus text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-300">
                                        Sign Up
                                    </button>
                                    <Link to="/login" className="link link-hover link-secondary">Already have an account?</Link>
                                    <Link to="/" className="link link-hover link-secondary">Go to Home</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}