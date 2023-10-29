import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type AssignmentData = {
    title: string,
    status: "Completed" | "Not Completed",
    dueDate: Date
}

export function Assignment() {
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
    )
}