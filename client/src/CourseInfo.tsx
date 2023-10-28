import programming from "./assets/programming.jpg"
import circuits from "./assets/circuits.jpg"
import maths from "./assets/maths-fundamentals.jpg"
import finance from "./assets/finance.jpg"
import mech from "./assets/mech.jpg"
import { useState } from "react"
import { TabNavItem } from "./TabNavItem"
import { TabContent } from "./TabContent"
import { Home } from "./Home"
import { Material } from "./Material"
import { Assignment } from "./Assignment"
import { Query } from "./Query"
import { Certificate } from "./Certificate"
import { Review } from "./Review"

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
    
    type CourseTab = "home" | "material" | "assignment" | "query" | "certificate" | "review"

    const requiredCourse = data.find((course) => course.id === id)
    const [activeTab, setActiveTab] = useState<CourseTab>("home")

    return (
        <div className="px-8 py-2">
            <h1 
                className="mt-4 pb-8 text-5xl font-bold text-slate-900">
                {requiredCourse?.title}
            </h1>
            <p className="mb-8 text-slate-700">{requiredCourse?.description}</p>
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
                    <Home />
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
                    <Certificate title={requiredCourse?.title} />
                </TabContent>
                <TabContent tabType="review" activeTab={activeTab}>
                    <Review />
                </TabContent>
            </div>
        </div>
    )

}