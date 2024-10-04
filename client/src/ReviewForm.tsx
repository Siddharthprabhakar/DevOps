import { useState } from "react";
import { EnrollProps } from "./CourseInfo";
import { useLocation } from "react-router-dom";

export function ReviewForm({isEnrolled} : EnrollProps) {
    const [rating, setRating] = useState<number>(0);
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
            const response = await fetch('http://localhost:9090/api/review/createReview', 
                {
                    method: 'POST',
                    headers: { 'Content-Type' : 'application/json'},
                    body: JSON.stringify({
                        courseid: courseId,
                        date_of_review: formattedDate,
                        description: description,
                        rating: rating
                    })
                }
            )

            if (response.status === 200) {
                const responseData = await response.json();
                console.log(responseData);
                
            } else {
                console.error('Review creation failed');
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
                Help future learners make informed decisions as they embark on their educational journey. Your review is a compass that can guide fellow students towards success. Whether it's highlighting the outstanding instructors, shedding light on the course content, or recounting your personal milestones, your words can inspire and inform.
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-8 items-center justify-center">
                    <select 
                        className="select select-secondary w-full max-w-xs"
                        onChange={(event) => setRating(parseInt(event.target.value))}  
                    >
                        <option disabled selected>What would you rate this course?</option>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                    <textarea 
                        className="textarea textarea-secondary" 
                        placeholder="Enter your review description here..."
                        onChange={(event) => setDescription(event.target.value.toString())}
                        required
                    >
                    </textarea>
                    <button 
                        className="btn btn-outline btn-secondary btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                        type="submit"
                    >
                        Submit Review
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
                        <span>Review Submitted Successfully!</span>
                    </div>
                </div>
            ): null }
        </div>
    )
}