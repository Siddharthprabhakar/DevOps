type QueryData = {
    date: Date,
    description: string,
}

const data: QueryData[] = [
    {
      date: new Date(2023, 10, 1),
      description: "Query regarding the first module content.",
    },
    {
      date: new Date(2023, 10, 15),
      description: "Seeking clarification on assignment deadlines.",
    },
    {
      date: new Date(2023, 11, 5),
      description: "Question about the final project requirements.",
    },
];

export function Query() {
    return(
        <div>
            {data.map((query: QueryData, index) => (
                <div key={index} className="card card-side bg-base-100 shadow-xl my-5">
                    <div className="card-body">
                        <h2 className="card-title">
                            <div className="text-primary">Query {index + 1}</div>
                        </h2>
                        <p>Date of Query: {query.date.toString()}</p>
                        <p>{query.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}