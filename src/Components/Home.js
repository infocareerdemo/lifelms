import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Javabasic from '../Java/Javabasic';
import JavaIntroduction from '../Java/JavaIntroduction';
import JavaConculsion from '../Java/JavaConculsion';
import JavaOpps from '../Java/JavaOpps.js';
import Basicpython from "../Python/Basicpython.js";
import Gitbranch from "../Git/Gitbranch.js";
import Gittag from "../Git/Gittag.js";

const Home = () => {

    const location = useLocation();
    const params = location.state;
    const [topicName, setTopicName] = useState("")
    const [courseName, setCourseName] = useState("")

    useEffect(() => {
        if (params != null) {
            setTopicName(params.topicName)
            setCourseName(params.courseName)
        }
        else {
            setTopicName("Java Basic")
            setCourseName("java")
        }
    }, [params])


    return (
        <div className="page-wrapper">
            <div>
                <text style={{ fontWeight: "600" }}>
                    Course Name : {courseName}
                </text>
            </div>
            <div className="topic_content">
                {
                    courseName === "java" ? <>
                        {
                            topicName === "Java Basic" ? <Javabasic /> :
                                topicName === "Java Indroduction" ? <JavaIntroduction /> :
                                    topicName === "Consultion" ? <JavaConculsion /> :
                                        topicName === "Java Opps" ? <JavaOpps /> : <></>
                        }
                    </> :
                        courseName === "python" ? <>
                            {
                                topicName === "Item A" ? <Basicpython /> :
                                    <></>
                            }
                        </>
                            :
                            courseName === "Git" ? <>
                                {
                                    topicName === "Git Branch" ? <Gitbranch /> :
                                    topicName === "Git Tag Release" ? <Gittag /> :
                                        <></>
                                }
                            </>
                                : <></>
                }
            </div>
        </div>
    )
}

export default Home;