import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { EnrollProps } from "./CourseInfo";

type MaterialData = {
    title: string,
    content: string,
}


export function Material({isEnrolled} : EnrollProps) {
    const [ materialData, setMaterialData ] = useState<MaterialData[]>();
    const location = useLocation();
    const courseId: number = parseInt(location.pathname.slice(-1));
    useEffect( () => {
        async function fetchAllMaterials() : Promise<any> {
            try {
                const response = await fetch('http://localhost:9090/api/material/getAllMaterials', 
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
                    setMaterialData(responseData);
                    
                } else {
                    console.error('Review fetching failed');
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllMaterials();
    }, []);
    return(
        <div className="relative">
            <div>
                    {materialData?.map((material: MaterialData, index) => (
                        <div key={index} className="card card-side bg-base-100 shadow-xl my-5">
                            <div className="card-body">
                                <h2 className="card-title">
                                    <div className="text-primary">{material.title}</div>
                                </h2>
                                <p>{material.content}</p>
                            </div>
                        </div>
                    ))}
            </div>
            {!isEnrolled ? (
                <div className="absolute inset-0 bg-black opacity-90 z-10 flex flex-col gap-4 items-center justify-center">
                    <p className="text-white text-xl">You cannot access course materials since you are not enrolled for this course.</p>
                    <p className="text-white text-xl">Please go to the Home tab and enroll!</p>
                    <span className="loading loading-dots loading-lg text-secondary"></span>
                </div>
                ) : null }
        </div>
    )
}