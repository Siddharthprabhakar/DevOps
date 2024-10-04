import { useState } from "react";
import { EnrollProps } from "./CourseInfo";
import { useLocation } from "react-router-dom";

export function QueryForm({isEnrolled} : EnrollProps) {
    const [description, setDescription] = useState<string>("");
    const [showToast, setShowToast] = useState<boolean>(false);
    const location = useLocation();
    const courseId: number = parseInt(location.pathname.slice(-1));
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const originalDate = new Date();
        const year = originalDate.getFullYear();
        const month = (originalDate.getMonth() + 1).toString().padStart(2, '0'); // Add 1 to month to match the 1-12 format and pad with 0
        const day = originalDate.getDate().toString().padStart(2, '0'); // Pad with 0

        const formattedDate = `${year}-${month}-${day}`;

        try {
            const response = await fetch('http://localhost:9090/api/query/createQuery', 
                {
                    method: 'POST',
                    headers: { 'Content-Type' : 'application/json'},
                    body: JSON.stringify({
                        courseid: courseId,
                        date_of_query: formattedDate,
                        description: description
                    })
                }
            )

            if (response.status === 200) {
                const responseData = await response.json();
                console.log(responseData);
                
            } else {
                console.error('Query creation failed');
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
                Ask, and you shall receive the wisdom of instructors and the collective intelligence of your fellow learners. Your queries pave the way for enlightening discussions and thought-provoking answers.
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-8 items-center justify-center">
                    <textarea 
                        className="textarea textarea-secondary" 
                        placeholder="Describe your query here..."
                        onChange={(event) => setDescription(event.target.value.toString())}
                        required
                    >
                    </textarea>
                    <button 
                        className="btn btn-outline btn-secondary btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                        type="submit"
                    >
                        Submit Query
                    </button>
                </form>
            </div>
            {!isEnrolled ? (
                <div className="absolute inset-0 bg-black opacity-90 z-10 flex flex-col gap-4 items-center justify-center">
                    <p className="text-white text-xl">You cannot write a review since you are not enrolled for this course.</p>
                    <p className="text-white text-xl">Please go to the Home tab and enroll!</p>
                    <span className="loading loading-dots loading-lg text-secondary"></span>
                </div>
                ) : null }
            { showToast ? (
                <div className="toast toast-end animate-fade-toast opacity-0">
                    <div className="alert alert-success">
                        <span>Query Submitted Successfully!</span>
                    </div>
                </div>
            ): null }
        </div>
    )
}