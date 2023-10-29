import React, { useEffect, useState } from "react"
import image from "./assets/programming.jpg"
import { CourseCard } from "./CourseCard"


type TeachCourseData = {
    courseid: number,
    categoryid: number,
    title: string,
    description: string
}


export function TeachCatalog() {
    const [courseData, setCourseData] = useState<TeachCourseData[]>([]);
    // Retrieve user details from localStorage
    const storedUserString = sessionStorage.getItem("user");
    const storedUser = storedUserString ? JSON.parse(storedUserString) : null;
    useEffect( () => {
        async function fetchTeachingCourses() : Promise<any> {
            try {
                const response = await fetch('http://localhost:8080/api/course/getTeachingCourses', 
                    {
                        method: 'POST',
                        headers: { 'Content-Type' : 'application/json'},
                        body: JSON.stringify({
                            instructorid: storedUser.roleid
                        })
                    }
                )

                if (response.status === 200) {
                    const responseData = await response.json();
                    setCourseData(responseData);
                    
                } else {
                    console.error('Taught course fetching failed');
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchTeachingCourses();
    }, []);
    
    return(
        <React.Fragment>
            <div className="mt-8 flex items-center justify-center">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-8">
                    {courseData.map(
                        (course : TeachCourseData)  => (
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