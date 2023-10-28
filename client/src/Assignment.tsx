type AssignmentData = {
    title: string,
    status: "completed" | "not completed",
    dueDate: Date
}

const data: AssignmentData[] = [
    {
      title: "Assignment 1: Introduction",
      status: "completed",
      dueDate: new Date(2023, 10, 10),
    },
    {
      title: "Assignment 2: Problem-Solving",
      status: "not completed",
      dueDate: new Date(2023, 10, 25),
    },
    {
      title: "Final Assignment: Capstone Project",
      status: "not completed",
      dueDate: new Date(2023, 11, 15),
    },
];


export function Assignment() {
    return(
        <div>
            {data.map((assignment: AssignmentData, index) => (
                <div key={index} className="card card-side bg-base-100 shadow-xl my-5">
                    <div className="card-body">
                        <h2 className="card-title">
                            <div className="text-primary">{assignment.title}</div>
                        </h2>
                        <p 
                            className={assignment.status === "completed" ? "text-emerald-500" : "text-red-500"}
                        >
                            Status: {assignment.status}
                        </p>
                        <p>Due Date: {assignment.dueDate.toString()}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}