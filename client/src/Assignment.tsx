import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { EnrollProps } from "./CourseInfo";

type AssignmentData = {
    title: string,
    status: "Completed" | "Not Completed",
    dueDate: Date
}

export function Assignment({isEnrolled} : EnrollProps) {
    const [ assignmentData, setAssignmentData ] = useState<AssignmentData[]>();
    const location = useLocation();
    const courseId: number = parseInt(location.pathname.slice(-1));
    useEffect( () => {
        async function fetchAllAssignments() : Promise<any> {
            try {
                const response = await fetch('http://localhost:8080/api/assignment/getAllAssignments', 
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
                    setAssignmentData(responseData);
                    
                } else {
                    console.error('Review fetching failed');
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllAssignments();
    }, []);
    return(
        <div className="relative">
            <div>
                {assignmentData?.map((assignment: AssignmentData, index) => (
                    <div key={index} className="card card-side bg-base-100 shadow-xl my-5">
                        <div className="card-body">
                            <h2 className="card-title">
                                <div className="text-primary">{assignment.title}</div>
                            </h2>
                            <p 
                                className={assignment.status === "Completed" ? "text-emerald-500" : "text-red-500"}
                            >
                                Status: {assignment.status}
                            </p>
                            <p>Due Date: {new Date(assignment.dueDate).toDateString()}</p>
                        </div>
                    </div>
                ))}
            </div>
            {!isEnrolled ? (
                <div className="absolute inset-0 bg-black opacity-90 z-10 flex flex-col gap-4 items-center justify-center">
                    <p className="text-white text-xl">You cannot access course assignments since you are not enrolled for this course.</p>
                    <p className="text-white text-xl">Please go to the Home tab and enroll!</p>
                    <span className="loading loading-dots loading-lg text-secondary"></span>
                </div>
                ) : null }
        </div>
    )
}