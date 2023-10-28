import React from "react"
import programming from "./assets/programming.jpg"
import circuits from "./assets/circuits.jpg"
import maths from "./assets/maths-fundamentals.jpg"
import finance from "./assets/finance.jpg"
import mech from "./assets/mech.jpg"
import { CourseCard } from "./CourseCard"

type CourseData = {
    image: string,
    title: string,
    description: string,
}
/* TODO: read from Course Table */
const data : CourseData[] = [
    {
        image: programming,
        title: "Computer Programming",
        description: "Learn programming in C++",
    },
    {
        image: circuits,
        title: "Electrical Circuits",
        description: "Understanding circuit analysis",
    },
    {
        image: maths,
        title: "Mathematics Fundamentals",
        description: "Basic mathematical concepts",
    },
    {
        image: finance,
        title: "Finance for Beginners",
        description: "Introduction to financial concepts",
    },
    {
        image: mech,
        title: "Mechanical Engineering Basics",
        description: "Introduction to mechanical engineering",
    },
]
export function Catalog() {
    return(
        <React.Fragment>
            <div className="mt-8 flex items-center justify-center">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-8">
                    {data.map(
                        (course : CourseData)  => (
                            <CourseCard
                                image={course.image}
                                title={course.title}
                                description={course.description}
                            />
                            )
                        )
                    } 
                </div>
            </div>
        </React.Fragment>
    )
}