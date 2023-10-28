import React from "react";
import { useParams } from "react-router-dom";
import { CourseInfo } from "./CourseInfo";

export function CourseContainer() {
    const { id } = useParams();
    const courseId : number = parseInt(id!)
    
    return (
        <React.Fragment>
            <div className="min-h-screen h-full w-full bg-gradient-to-t from-primary to-secondary bg-opacity-75 inset-0 z-0">
                <div className="flex justify-center self-center z-10 h-full w-full mt-12">
                    <div className="p-2 bg-white mx-auto rounded-2xl w-3/4">
                        <CourseInfo id={courseId} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}