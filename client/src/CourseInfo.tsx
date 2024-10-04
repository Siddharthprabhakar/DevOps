import { useEffect, useState } from "react"
import { TabNavItem } from "./TabNavItem"
import { TabContent } from "./TabContent"
import { Home } from "./Home"
import { Material } from "./Material"
import { Assignment } from "./Assignment"
import { Query } from "./Query"
import { Certificate } from "./Certificate"
import { ReviewForm } from "./ReviewForm"
import { QueryForm } from "./QueryForm"
import React from "react"
import { AssignmentForm } from "./AssignmentForm"
import { MaterialForm } from "./MaterialForm"

type CourseInfoProps = {
    courseId: number
};

type CourseInfoData = {
    title: string,
    description: string,
    instructorName: string,
    category: string,
}; 

export type EnrollProps = {
    isEnrolled: boolean | undefined
}

export type TeachProps = {
    isTeaching: boolean | undefined
}

export function CourseInfo({ courseId }: CourseInfoProps) {
    // Retrieve user details from localStorage
    const storedUserString = sessionStorage.getItem("user");
    const storedUser = storedUserString ? JSON.parse(storedUserString) : null;
    const [ courseInfo, setCourseInfo ] = useState<CourseInfoData>();
    const [ isEnrolled, setIsEnrolled ] = useState<boolean>();
    const [ isTeaching, setIsTeaching ] = useState<boolean>();
    useEffect(() => {
        async function fetchCourseInfo() : Promise<any> {
            try {
                const response = await fetch(
                    `http://localhost:9090/api/course/getCourseInfo`, 
                    {
                        method: 'POST',
                        headers: { 'Content-Type' : 'application/json'},
                        body: JSON.stringify({
                            id: courseId
                        })
                    }
                )

                if (response.status === 200) {
                    const responseData = await response.json();
                    setCourseInfo({
                        title: responseData.course_title,
                        description: responseData.course_description,
                        instructorName: responseData.instructor_name,
                        category: responseData.category_name,
                    });
                } else {
                    console.error('Course info fetching failed');
                }
            } catch (error) {
                console.log(error);
            }
        }
        async function isStudentEnrolled() : Promise<any> {
            try {
                const response = await fetch(
                    `http://localhost:9090/api/course/isStudentEnrolled`, 
                    {
                        method: 'POST',
                        headers: { 'Content-Type' : 'application/json'},
                        body: JSON.stringify({
                            courseid: courseId,
                            studentid: storedUser.roleid,
                        })
                    }
                )

                if (response.status === 200) {
                    const responseData = await response.json();
                    if(storedUser.rolename == "student")
                        setIsEnrolled(responseData)
                    else
                        setIsEnrolled(true)
                } else {
                    console.error('Enrollment info fetching failed');
                }
            } catch (error) {
                console.log(error);
            }
        }
        async function isInstructorTeaching() : Promise<any> {
            try {
                const response = await fetch(
                    `http://localhost:9090/api/course/isInstructorTeaching`, 
                    {
                        method: 'POST',
                        headers: { 'Content-Type' : 'application/json'},
                        body: JSON.stringify({
                            courseid: courseId,
                            instructorid: storedUser.roleid,
                        })
                    }
                )

                if (response.status === 200) {
                    const responseData = await response.json();
                    if(storedUser.rolename == "instructor")
                        setIsTeaching(responseData)
                    else
                        setIsTeaching(true)
                } else {
                    console.error('Teachin info fetching failed');
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchCourseInfo();
        isStudentEnrolled();
        isInstructorTeaching();
    }, []);
    
    
    type CourseTab = "home" | "material" | "assignment" | "query" | "certificate" | "reviewform" | "queryform" | "assignmentform" | "materialform"

    const [activeTab, setActiveTab] = useState<CourseTab>("home")

    return (
        <div className="px-8 py-2">
            <h1 
                className="mt-4 pb-8 text-5xl font-bold text-slate-900">
                {courseInfo?.title}
            </h1>
            <p className="mb-8 text-slate-700">{courseInfo?.description}</p>
            <div className="tabs items-center justify-evenly tabs-boxed">
                <TabNavItem tabType="home" tabTitle="Home" activeTab={activeTab} setActiveTab={setActiveTab} />
                <TabNavItem tabType="material" tabTitle="Course Material" activeTab={activeTab} setActiveTab={setActiveTab} /> 
                <TabNavItem tabType="assignment" tabTitle="Assignments" activeTab={activeTab} setActiveTab={setActiveTab} />
                <TabNavItem tabType="query" tabTitle="Queries" activeTab={activeTab} setActiveTab={setActiveTab} />
                {storedUser?.rolename == "instructor" ? (
                    <React.Fragment>
                        <TabNavItem tabType="assignmentform" tabTitle="Upload Course Assignment" activeTab={activeTab} setActiveTab={setActiveTab} />
                        <TabNavItem tabType="materialform" tabTitle="Upload Course Material" activeTab={activeTab} setActiveTab={setActiveTab} />
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <TabNavItem tabType="certificate" tabTitle="Certificate" activeTab={activeTab} setActiveTab={setActiveTab} />
                        <TabNavItem tabType="reviewform" tabTitle="Write a Review" activeTab={activeTab} setActiveTab={setActiveTab} />
                        <TabNavItem tabType="queryform" tabTitle="Write a Query" activeTab={activeTab} setActiveTab={setActiveTab} />
                    </React.Fragment>
                )}  
            </div>
            <div className="outlet">
                <TabContent tabType="home" activeTab={activeTab}>
                    <Home setIsEnrolled={setIsEnrolled} isEnrolled={isEnrolled} instructorName={courseInfo?.instructorName} category={courseInfo?.category}/>
                </TabContent>
                <TabContent tabType="material" activeTab={activeTab}>
                    <Material isEnrolled={isEnrolled} />
                </TabContent>
                <TabContent tabType="assignment" activeTab={activeTab}>
                    <Assignment isEnrolled={isEnrolled} />
                </TabContent>
                <TabContent tabType="query" activeTab={activeTab}>
                    <Query isEnrolled={isEnrolled} />
                </TabContent>
                <TabContent tabType="certificate" activeTab={activeTab}>
                    <Certificate isEnrolled={isEnrolled} />
                </TabContent>
                {storedUser?.rolename == "instructor" ? (
                    <React.Fragment>
                        <TabContent tabType="assignmentform" activeTab={activeTab}>
                            <AssignmentForm  isTeaching={isTeaching} />
                        </TabContent>
                        <TabContent tabType="materialform" activeTab={activeTab}>
                            <MaterialForm isTeaching={isTeaching} />
                        </TabContent>
                    </React.Fragment>
                ): (
                    <React.Fragment>
                        <TabContent tabType="reviewform" activeTab={activeTab}>
                            <ReviewForm isEnrolled={isEnrolled} />
                        </TabContent>
                        <TabContent tabType="queryform" activeTab={activeTab}>
                            <QueryForm isEnrolled={isEnrolled} />
                        </TabContent>
                    </React.Fragment>
                )}
            </div>
        </div>
    )

}