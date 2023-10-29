import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type QueryData = {
    date: Date,
    description: string,
}

export function Query() {
    const [ queryData, setQueryData ] = useState<QueryData[]>();
    const location = useLocation();
    const courseId: number = parseInt(location.pathname.slice(-1));
    useEffect( () => {
        async function fetchAllQueries() : Promise<any> {
            try {
                const response = await fetch('http://localhost:8080/api/query/getAllQueries', 
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
    )
}