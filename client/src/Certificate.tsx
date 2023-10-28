type CertificateProps = { title: string | undefined }
type CertificateData = {
    studentName: string;
    issueDate: Date;
    instructorName: string;
    certificateID: string;
};
  
const data: CertificateData = {
    studentName: "John Doe",
    issueDate: new Date("2023-10-25"),
    instructorName: "Jane Smith",
    certificateID: "ABC123XYZ",
}

export function Certificate({ title } : CertificateProps) {
    return(
        <div className="mockup-window border bg-amber-100 min-h-[50vh]">
            <h2 className="text-2xl text-center font-semibold">Certificate of Completion</h2>
            <div className="px-2 py-8 text-lg">
                <p>This is to certify that</p>
                <p className="font-semibold">{data.studentName}</p>
                <p>has successfully completed the course</p>
                <p className="font-semibold">{title}</p>
                <p>awarded on this</p>
                <p className="font-semibold">{data.issueDate.toString()}</p>
                <p>by instructor</p>
                <p className="font-semibold">{data.instructorName}</p>
                <p>Certificate ID: <span className="font-semibold">{data.certificateID}</span></p>
            </div>
        </div>
    )
}