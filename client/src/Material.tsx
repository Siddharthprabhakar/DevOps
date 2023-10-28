type MaterialData = {
    title: string,
    content: string,
}

const data: MaterialData[] = [
    {
      title: "Introduction to the Course",
      content: "Welcome to the course! In this section, you will learn the basics of the subject.",
    },
    {
      title: "Module 1: Getting Started",
      content: "Dive into the first module and start your journey to mastering the subject.",
    },
    {
      title: "Final Project",
      content: "Put your knowledge to the test with a hands-on final project. Good luck!",
    },
];

export function Material() {
    return(
        <div>
            {data.map((material: MaterialData, index) => (
                <div key={index} className="card card-side bg-base-100 shadow-xl my-5">
                    <div className="card-body">
                        <h2 className="card-title">
                            <div className="text-primary">{material.title}</div>
                        </h2>
                        <p>{material.content}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}