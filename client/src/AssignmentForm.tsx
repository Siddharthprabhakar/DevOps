import { useState } from "react";
import { useLocation } from "react-router-dom";
import { TeachProps } from "./CourseInfo";

export function AssignmentForm({isTeaching} : TeachProps) {
    const [dueDate, setDueDate] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [showToast, setShowToast] = useState<boolean>(false);
    const location = useLocation();
    const courseId: number = parseInt(location.pathname.slice(-1));
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/assignment/createAssignment', 
                {
                    method: 'POST',
                    headers: { 'Content-Type' : 'application/json'},
                    body: JSON.stringify({
                        courseid: courseId,
                        title: title,
                        status: 'Not Completed',
                        dueDate: dueDate,
                    })
                }
            )

            if (response.status === 200) {
                const responseData = await response.json();
                console.log(responseData);
                
            } else {
                console.error('Assignment creation failed');
            }
        } catch (error) {
            console.log(error);
        }
        setShowToast(true);
    }

    return(
        <div className="relative">
            <div className="flex flex-col">
                <div className="text-lg mb-8">
                Share challenging assignments, projects, and assessments to fuel your students' academic growth. Your guidance shapes their learning experiences, and this section is your canvas for creativity.
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-8 items-center justify-center">
                    <div className="flex gap-8">
                        <div className="text-secondary">
                            Due Date of Assignment:
                        </div>
                        <input
                            className="input input-bordered input-secondary w-full max-w-xs"
                            type="date"
                            onChange={(event) => setDueDate(event.target.value.toString())}
                        />
                    </div>
                    <textarea 
                        className="textarea textarea-secondary" 
                        placeholder="Enter title of assignment here..."
                        onChange={(event) => setTitle(event.target.value.toString())}
                        required
                    >
                    </textarea>
                    <button 
                        className="btn btn-outline btn-secondary btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                        type="submit"
                    >
                        Upload Assignment
                    </button>
                </form>
            </div>
            {!isTeaching ? (
                <div className="absolute inset-0 bg-black opacity-90 z-10 flex flex-col gap-4 items-center justify-center">
                    <p className="text-white text-xl">You cannot upload assignments since you are not teaching this course.</p>
                    <span className="loading loading-dots loading-lg text-secondary"></span>
                </div>
                ) : null }
            { showToast ? (
                <div className="toast toast-end animate-fade-toast opacity-0">
                    <div className="alert alert-success">
                        <span>Assignment Uploaded Successfully!</span>
                    </div>
                </div>
            ): null }
        </div>
    )
}