import React, { useEffect, useState } from "react"
import image from "./assets/programming.jpg"
import { CourseCard } from "./CourseCard"


type CourseData = {
    courseid: number,
    categoryid: number,
    title: string,
    description: string
}


export function Catalog() {
    const [courseData, setCourseData] = useState<CourseData[]>([]);
    useEffect( () => {
        async function fetchAllCourses() : Promise<any> {
            try {
                const response = await fetch(
                    'http://localhost:8080/api/course/getAllCourses', 
                    {
                        method: 'GET',
                        headers: { 'Content-Type' : 'application/json'},
                    }
                )

                if (response.status === 200) {
                    const responseData = await response.json();
                    setCourseData(responseData);
                    
                } else {
                    console.error('Course fetching failed');
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllCourses();
    }, []);
    
    return(
        <React.Fragment>
            <div className="mt-8 flex items-center justify-center">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-8">
                    {courseData.map(
                        (course : CourseData)  => (
                            <CourseCard
                                id={course.courseid}
                                image={image}
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