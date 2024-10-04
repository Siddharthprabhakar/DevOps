import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { EnrollProps } from "./CourseInfo";

type QueryData = {
    date: Date,
    description: string,
}

export function Query({isEnrolled} : EnrollProps) {
    const [ queryData, setQueryData ] = useState<QueryData[]>();
    const location = useLocation();
    const courseId: number = parseInt(location.pathname.slice(-1));
    useEffect( () => {
        async function fetchAllQueries() : Promise<any> {
            try {
                const response = await fetch('http://localhost:9090/api/query/getAllQueries', 
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
                    setQueryData(responseData);
                    
                } else {
                    console.error('Query fetching failed');
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllQueries();
    }, []);
    return(
        <div className="relative">
            <div>
                {queryData?.map((query: QueryData, index) => (
                    <div key={index} className="card card-side bg-base-100 shadow-xl my-5">
                        <div className="card-body">
                            <h2 className="card-title">
                                <div className="text-primary">Query {index + 1}</div>
                            </h2>
                            <p>Date of Query: {new Date(query.date).toDateString()}</p>
                            <p>{query.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {!isEnrolled ? (
                <div className="absolute inset-0 bg-black opacity-90 z-10 flex flex-col gap-4 items-center justify-center">
                    <p className="text-white text-xl">You cannot see queries since you are not enrolled for this course.</p>
                    <p className="text-white text-xl">Please go to the Home tab and enroll!</p>
                    <span className="loading loading-dots loading-lg text-secondary"></span>
                </div>
                ) : null }
        </div>
    )
}