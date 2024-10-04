import { useState } from "react";
import { useLocation } from "react-router-dom";
import { TeachProps } from "./CourseInfo";

export function MaterialForm({isTeaching} : TeachProps) {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [showToast, setShowToast] = useState<boolean>(false);
    const location = useLocation();
    const courseId: number = parseInt(location.pathname.slice(-1));
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:9090/api/material/createMaterial', 
                {
                    method: 'POST',
                    headers: { 'Content-Type' : 'application/json'},
                    body: JSON.stringify({
                        courseid: courseId,
                        title: title,
                        content: content
                    })
                }
            )

            if (response.status === 200) {
                const responseData = await response.json();
                console.log(responseData);
                
            } else {
                console.error('Material creation failed');
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
                Here, you have the platform to share valuable resources, lecture notes, and supplementary materials with your eager students. Enhance the educational journey by providing additional insights and guidance.
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-8 items-center justify-center">
                <textarea 
                        className="textarea textarea-secondary" 
                        placeholder="Enter title of course material here..."
                        onChange={(event) => setTitle(event.target.value.toString())}
                        required
                    >
                    </textarea>
                    <textarea 
                        className="textarea textarea-secondary" 
                        placeholder="Enter content of course material here..."
                        onChange={(event) => setContent(event.target.value.toString())}
                        required
                    >
                    </textarea>
                    <button 
                        className="btn btn-outline btn-secondary btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                        type="submit"
                    >
                        Upload Material
                    </button>
                </form>
            </div>
            {!isTeaching ? (
                <div className="absolute inset-0 bg-black opacity-90 z-10 flex flex-col gap-4 items-center justify-center">
                    <p className="text-white text-xl">You cannot upload course materials since you are not teaching this course.</p>
                    <span className="loading loading-dots loading-lg text-secondary"></span>
                </div>
                ) : null }
            { showToast ? (
                <div className="toast toast-end animate-fade-toast opacity-0">
                    <div className="alert alert-success">
                        <span>Material Uploaded Successfully!</span>
                    </div>
                </div>
            ): null }
        </div>
    )
}