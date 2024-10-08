import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { EnrollProps } from "./CourseInfo";

type CertificateData = {
    courseTitle: string,
    studentName: string;
    issueDate: Date;
    instructorName: string;
    certificateID: string;
};
  

export function Certificate({isEnrolled} : EnrollProps) {
    // Retrieve user details from localStorage
    const storedUserString = sessionStorage.getItem("user");
    const storedUser = storedUserString ? JSON.parse(storedUserString) : null;
    const [ certData, setCertData ] = useState<CertificateData>();
    const location = useLocation();
    const courseId: number = parseInt(location.pathname.slice(-1));
    useEffect( () => {
        async function fetchCertificate() : Promise<any> {
            try {
                const response = await fetch('http://localhost:9090/api/certificate/getCertificate', 
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
                    if (storedUser) {
                        setCertData({
                            courseTitle: responseData.course_title,
                            studentName: storedUser.name,
                            issueDate: responseData.issue_date,
                            instructorName: responseData.instructor_name,
                            certificateID: responseData.certificate_id,
                        });
                    }
                    else {
                        setCertData({
                            courseTitle: responseData.course_title,
                            studentName: "Not Logged In!",
                            issueDate: responseData.issue_date,
                            instructorName: responseData.instructor_name,
                            certificateID: responseData.certificate_id,
                        });
                    }
                } 
                else {
                    console.error('Query fetching failed');
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchCertificate();
    }, []);
    return(
        <div className="relative">
            <div className="mockup-window border bg-amber-100 min-h-[50vh]">
                <h2 className="text-2xl text-center font-semibold">Certificate of Completion</h2>
                <div className="px-2 py-8 text-lg">
                    <p>This is to certify that</p>
                    <p className="font-semibold">{certData?.studentName}</p>
                    <p>has successfully completed the course</p>
                    <p className="font-semibold">{certData?.courseTitle}</p>
                    <p>awarded on this</p>
                    <p className="font-semibold">{certData? new Date(certData.issueDate).toDateString() : null}</p>
                    <p>by instructor</p>
                    <p className="font-semibold">{certData?.instructorName}</p>
                    <p>Certificate ID: <span className="font-semibold">{certData?.certificateID}</span></p>
                </div>
            </div>
            {!isEnrolled ? (
                <div className="absolute inset-0 bg-black opacity-90 z-10 flex flex-col gap-4 items-center justify-center">
                    <p className="text-white text-xl">You cannot access the certificate since you are not enrolled for this course.</p>
                    <p className="text-white text-xl">Please go to the Home tab and enroll!</p>
                    <span className="loading loading-dots loading-lg text-secondary"></span>
                </div>
                ) : null}
        </div>
    )
}