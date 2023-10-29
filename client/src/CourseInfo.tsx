import { useEffect, useState } from "react"
import { TabNavItem } from "./TabNavItem"
import { TabContent } from "./TabContent"
import { Home } from "./Home"
import { Material } from "./Material"
import { Assignment } from "./Assignment"
import { Query } from "./Query"
import { Certificate } from "./Certificate"
import { Review } from "./Review"

type CourseInfoProps = {
    courseId: number
};

type CourseInfoData = {
    title: string,
    description: string,
    instructorName: string,
    category: string,
}; 

export function CourseInfo({ courseId }: CourseInfoProps) {
    const [courseInfo, setCourseInfo] = useState<CourseInfoData>();
    useEffect(() => {
        async function fetchCourseInfo() : Promise<any> {
            try {
                const response = await fetch(
                    `http://localhost:8080/api/course/getCourseInfo`, 
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
        fetchCourseInfo();
    }, []);
    
    
    type CourseTab = "home" | "material" | "assignment" | "query" | "certificate" | "review"

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
                <TabNavItem tabType="certificate" tabTitle="Certificate" activeTab={activeTab} setActiveTab={setActiveTab} />
                <TabNavItem tabType="review" tabTitle="Write a Review" activeTab={activeTab} setActiveTab={setActiveTab} />   
            </div>
            <div className="outlet">
                <TabContent tabType="home" activeTab={activeTab}>
                    <Home instructorName={courseInfo?.instructorName} category={courseInfo?.category}/>
                </TabContent>
                <TabContent tabType="material" activeTab={activeTab}>
                    <Material />
                </TabContent>
                <TabContent tabType="assignment" activeTab={activeTab}>
                    <Assignment />
                </TabContent>
                <TabContent tabType="query" activeTab={activeTab}>
                    <Query />
                </TabContent>
                <TabContent tabType="certificate" activeTab={activeTab}>
                    <Certificate title="Test Title" />
                </TabContent>
                <TabContent tabType="review" activeTab={activeTab}>
                    <Review />
                </TabContent>
            </div>
        </div>
    )

}