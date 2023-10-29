import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

type HomeProps = {
    instructorName: string | undefined,
    category: string | undefined,
}

type ReviewData = {
    date: Date,
    description: string,
    rating: number,
}

export function Home({ instructorName, category} : HomeProps) {
    const [reviewData, setReviewData] = useState<ReviewData[]>();
    const location = useLocation();
    const courseId: number = parseInt(location.pathname.slice(-1));
    useEffect( () => {
        async function fetchAllReviews() : Promise<any> {
            try {
                const response = await fetch(
                    `http://localhost:8080/api/review/getAllReviews`, 
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

    return(
        <div>
            <p className="text-2xl mb-2">Course Instructor</p>
            <p className="mb-2">{instructorName}</p>
            <p className="text-2xl mb-2">Course Category</p>
            <p className="mb-2">{category}</p>
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
                        <p>Date of Review: {review.date?.toString()}</p>
                        <p>{review.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}