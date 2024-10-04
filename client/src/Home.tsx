import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";

type HomeProps = {
    instructorName: string | undefined,
    category: string | undefined,
    isEnrolled: boolean | undefined,
    setIsEnrolled: React.Dispatch<React.SetStateAction<boolean | undefined>>,
}

type ReviewData = {
    date_of_review: Date,
    description: string,
    rating: number,
}

export function Home({ instructorName, category, isEnrolled, setIsEnrolled } : HomeProps) {
    // Retrieve user details from localStorage
    const storedUserString = sessionStorage.getItem("user");
    const storedUser = storedUserString ? JSON.parse(storedUserString) : null;
    const [showToast, setShowToast] = useState<boolean>(false);
    const [reviewData, setReviewData] = useState<ReviewData[]>();
    const location = useLocation();
    const navigate = useNavigate();
    const courseId: number = parseInt(location.pathname.slice(-1));

    useEffect( () => {
        async function fetchAllReviews() : Promise<any> {
            try {
                const response = await fetch(
                    `http://localhost:9090/api/review/getAllReviews`, 
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
                    setReviewData(responseData);
                    
                } else {
                    console.error('Review fetching failed');
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllReviews();
    }, []);

    const handleEnroll = async () => {
        if(!storedUser) {
            navigate("/login");
        }
        else {
            try {
                const response = await fetch('http://localhost:9090/api/course/createEnrollment', 
                    {
                        method: 'POST',
                        headers: { 'Content-Type' : 'application/json'},
                        body: JSON.stringify({
                            courseid: courseId,
                            studentid: storedUser.roleid,
                        })
                    }
                )

                if (response.status === 200) {
                    const responseData = await response.json();
                    console.log(responseData);
                    
                } else {
                    console.error('Enrollment creation failed');
                }
            } catch (error) {
                console.log(error);
            }
            setIsEnrolled(true);
            setShowToast(true);
        }
    }

    return(
        <div>
            <div className="flex gap-4 items-center">
                <div className="flex flex-col">
                    <p className="text-2xl mb-2">Course Instructor</p>
                    <p className="mb-2">{instructorName}</p>
                    <p className="text-2xl mb-2">Course Category</p>
                    <p className="mb-2">{category}</p>
                </div>
                {!isEnrolled ? (
                    <div 
                        className="btn btn-primary btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                        onClick={handleEnroll}
                    >
                        Enroll for Course
                    </div>
                ) : null}
            </div>
            <p className="text-2xl">Course Reviews</p>
            {reviewData?.map((review: ReviewData, index) => (
                <div key={index} className="card card-side bg-base-100 shadow-xl my-5">
                    <div className="card-body">
                        <h2 className="card-title">
                            <div className="rating">
                                {Array.from({ length: 5 }).map((_, starIndex) => (
                                    <input
                                        disabled
                                        type="radio"
                                        name={`rating-${index}`}
                                        className="mask mask-star"
                                        checked={starIndex + 1 === review.rating}
                                    />
                                ))}
                            </div>
                            <div className="text-primary">{review.rating}.0</div>
                        </h2>
                        <p>Date of Review: {new Date(review.date_of_review).toDateString()}</p>
                        <p>{review.description}</p>
                    </div>
                </div>
            ))}
            { showToast ? (
                <div className="toast toast-end animate-fade-toast opacity-0">
                    <div className="alert alert-success">
                        <span>Enrolled Successfully!</span>
                    </div>
                </div>
            ): null }
        </div>
    )
}