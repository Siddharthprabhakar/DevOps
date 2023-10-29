import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type MaterialData = {
    title: string,
    content: string,
}

export function Material() {
    const [ materialData, setMaterialData ] = useState<MaterialData[]>();
    const location = useLocation();
    const courseId: number = parseInt(location.pathname.slice(-1));
    useEffect( () => {
        async function fetchAllMaterials() : Promise<any> {
            try {
                const response = await fetch('http://localhost:8080/api/material/getAllMaterials', 
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
                    setMaterialData(responseData);
                    
                } else {
                    console.error('Review fetching failed');
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllMaterials();
    }, []);
    return(
        <div>
            {materialData?.map((material: MaterialData, index) => (
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