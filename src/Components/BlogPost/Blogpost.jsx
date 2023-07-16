import React, { useState, useEffect } from "react";
import ApiData from "./ApiData"
import "./Blogpost.css"
export default function BlogPost() {
    const [apiData, setApiData] = useState([])


    const ApiCall = () => {
        const url = "https://jsonplaceholder.typicode.com/posts"
        fetch(url, { method: "GET" })
            .then((res) => res.json())
            .then(data => {
                if (data) {
                    setApiData(data)
                }
            }).catch((err) => {
                console.log(err);
            })

    }
    useEffect(() => {
        ApiCall()
    }, [])
    return (
        <>
            <div className="container">
                <div className="row">
                <h3 style={{textAlign:"ceter",color:"white" , height:"100px" ,backgroundColor:"orangered", lineHeight:"100px" ,justifyContent:"center",display:"flex"}}> React Accordion </h3>
                    {apiData.map((item, index) => (
                        <div key={index} className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <ApiData {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
