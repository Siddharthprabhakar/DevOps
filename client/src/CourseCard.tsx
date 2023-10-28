import { Link } from "react-router-dom"

type CourseCardProps = {
    id: number,
    image: string;
    title: string;
    description: string;
};

export function CourseCard({ id, image, title, description }: CourseCardProps) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt={title} className="w-[300px] h-[200px]" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                <Link to={`/course/${id}`} className="btn btn-primary btn-outline">Show More Details</Link>
                </div>
            </div>
        </div>
    )
}