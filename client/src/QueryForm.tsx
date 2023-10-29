import { EnrollProps } from "./CourseInfo";

export function QueryForm({isEnrolled} : EnrollProps) {
    return(
        <div className="relative">
            <div className="min-h-[30vh]">
                <p>Query Form Tab works!</p>
            </div>
            {!isEnrolled ? (
                <div className="absolute inset-0 bg-black opacity-90 z-10 flex flex-col gap-4 items-center justify-center">
                    <p className="text-white text-xl">You cannot write a query since you are not enrolled for this course.</p>
                    <p className="text-white text-xl">Please go to the Home tab and enroll!</p>
                    <span className="loading loading-dots loading-lg text-secondary"></span>
                </div>
                ) : null }
        </div>
    )
}