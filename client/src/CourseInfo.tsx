import programming from "./assets/programming.jpg"
import circuits from "./assets/circuits.jpg"
import maths from "./assets/maths-fundamentals.jpg"
import finance from "./assets/finance.jpg"
import mech from "./assets/mech.jpg"
import React from "react"

type CourseInfoProps = {
    id: number
};

type CourseData = {
    id: number,
    image: string,
    title: string,
    description: string,
};

/* TODO: read from Course Table */
const data : CourseData[] = [
    {
        id: 1,
        image: programming,
        title: "Computer Programming",
        description: "Learn programming in C++",
    },
    {
        id: 2,
        image: circuits,
        title: "Electrical Circuits",
        description: "Understanding circuit analysis",
    },
    {
        id: 3,
        image: maths,
        title: "Mathematics Fundamentals",
        description: "Basic mathematical concepts",
    },
    {
        id: 4,
        image: finance,
        title: "Finance for Beginners",
        description: "Introduction to financial concepts",
    },
    {
        id: 5,
        image: mech,
        title: "Mechanical Engineering Basics",
        description: "Introduction to mechanical engineering",
    },
]

export function CourseInfo({ id }: CourseInfoProps) {
    
    const requiredCourse = data.find((course) => course.id === id)
    return (
        <React.Fragment>
            <h1 
                className="mt-4 pb-8 text-5xl font-bold text-slate-900">
                {requiredCourse?.title}
            </h1>
            <p className="mb-8 text-slate-700">{requiredCourse?.description}</p>
        </React.Fragment>
    )

}