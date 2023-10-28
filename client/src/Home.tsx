type ReviewData = {
    rating: number,
    date: Date,
    description: string,
}

const data: ReviewData[] = [
    {
        rating: 3,
        date: new Date('2023-10-21'),
        description: "The course had some valuable content, but I expected more in-depth explanations. It's a decent starting point for beginners, but it left me wanting more."
    },
    {
        rating: 4,
        date: new Date('2023-10-21'),
        description: "I found the course to be quite informative and well-structured. The instructor's explanations were clear, and I learned a lot. However, there's still room for improvement to make it perfect."
    },
    {
        rating: 5,
        date: new Date('2023-10-23'),
        description: "This course is an absolute gem! The material is comprehensive, and the instructor's teaching style is engaging. I was pleasantly surprised by the quality of content and the support from the community. Highly recommended!"
    },
]

export function Home() {
    return(
        <div>
            <p className="text-2xl mb-5">Description</p>
            <p className="text-2xl mb-5">Instructor</p>
            <p className="text-2xl">Course Reviews</p>
            {data.map((review: ReviewData, index) => (
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
                        <p>Date of Review: {review.date.toString()}</p>
                        <p>{review.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}