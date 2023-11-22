import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EducationStyle.css";
import { educationData } from "./EducationData";
import { useState } from "react";

function EducationSection() {
    const [edulist, setedudata] = useState(educationData);

    return (
        <div
            className="portfolio"
            style={{ backgroundColor: "whitesmoke"}}
        >
            <h1 className="portf">Portfolio</h1>
            <div
                className="row"
                style={{ margin: "50px", justifyContent: "space-evenly" }}
            >
                {edulist.map((edu, index) => {
                    return (
                        <>
                            <div
                                className="col-4"
                                style={{
                                    width: "300px",
                                    height: "300px",
                                    backgroundColor: index % 2 === 0 ? "#333" : "#968B8B",
                                }}
                            >
                                <h2 className="portf-h2">{edu.design}</h2>
                                <hr />
                            </div>
                        </>
                    );
                })}

                {/* <div className="col-4"  style={{width:"300px" , height:"300px", backgroundColor:"#968B8B"}}>
                <h2 className="portf-h2">WEP DESIGN</h2>
                <hr/>
            </div>
            <div className="col-4"  style={{width:"300px" , height:"300px", backgroundColor:"#333"}}>
                <h2 className="portf-h2">MOBILE DESIGN</h2>
                <hr/>
            </div>
            <div className="col-4"  style={{width:"300px" , height:"300px", backgroundColor:"#968B8B"}}>
                <h2 className="portf-h2">LOGO DESIGN</h2>
                <hr/>
            </div> */}
            </div>
            <div
                className="row"
                style={{
                    margin: "50px",
                    justifyContent: "space-evenly",
                    paddingBottom: "50px",
                }}
            >

                {edulist.map((develop, index) => {
                    return(
                        <>
                    <div
                        className="col-4"
                        style={{ width: "300px", height: "300px", backgroundColor: index % 2 === 0 ? "#968B8B" : "#333", }}
                    >
                        <h2 className="portf-h2">{develop.develp}</h2>
                    </div>
                    </>
                    );
                })}

                
                {/* <div
          className="col-4"
          style={{ width: "300px", height: "300px", backgroundColor: "#333" }}
        >
          <h2 className="portf-h2">WEP APPLICATION DEVELOPMENT</h2>
        </div>
        <div
          className="col-4"
          style={{
            width: "300px",
            height: "300px",
            backgroundColor: "#968B8B",
          }}
        >
          <h2 className="portf-h2">MOBILE APPLICATION DEVELOPMENT</h2>
        </div>
        <div
          className="col-4"
          style={{ width: "300px", height: "300px", backgroundColor: "#333" }}
        >
          <h2 className="portf-h2">PWA DEVELOPMENT</h2>
        </div> */}
            </div>
        </div>
    );
}

export default EducationSection;
