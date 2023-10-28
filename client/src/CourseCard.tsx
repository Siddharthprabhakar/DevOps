type CourseCardProps = {
    image: string;
    title: string;
    description: string;
};

export function CourseCard({ image, title, description }: CourseCardProps) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt={title} className="w-[300px] h-[200px]" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary btn-outline">Show More Details</button>
                </div>
            </div>
        </div>
    )
}