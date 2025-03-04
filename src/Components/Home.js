import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Javabasic from "../Java/Javabasic";
import JavaIntroduction from "../Java/JavaIntroduction";
import JavaConculsion from "../Java/JavaConculsion";
import JavaOpps from "../Java/JavaOpps.js";
import Basicpython from "../Python/Basicpython.js";
import Gitbranch from "../Git/Gitbranch.js";
import Gittag from "../Git/Gittag.js";
import Githost from "../Git/Githost.js";
import Buleandgreencmd from "../Cloud/Buleandgreencmd.js";
import Blueandgreendeply from "../Cloud/Blueandgreendeply.js";
import Bluepathyaml from "../Cloud/Bluepathyaml.js";
import NavbarComp from "./NavbarComp.js";
import MSWebSocket from "../ms/ms.js";
import MsWebSocket from "../ms/ms.js";
// import ExternalUrlAccesLocal from "../React/ExternalUrlAccesLocal.js";

const Home = () => {
  const location = useLocation();
  const params = location.state;
  const [topicName, setTopicName] = useState("");
  const [courseName, setCourseName] = useState("");

  useEffect(() => {
    if (params != null) {
      console.log(params)
      setTopicName(params.topicName);
      setCourseName(params.courseName);
    } else {
      setTopicName("Web Socket");
      setCourseName("Micro Service");
    }
  }, [params]);

  return (
    <div>
      <NavbarComp />
      <div className="page-wrapper">
        <div className="topic_content">
          <div>
            <text style={{ fontWeight: "600" }}>
              Course Name : {courseName}
            </text>
          </div>
          {courseName === "Micro Service" ? (
            <>{topicName === "Web Socket" && <MsWebSocket />}</>
          ) : courseName === "python" ? (
            <>{topicName === "Item A" ? <Basicpython /> : <></>}</>
          ) : courseName === "Git" ? (
            <>
              {topicName === "Git Branch" ? (
                <Gitbranch />
              ) : topicName === "Git Tag Release" ? (
                <Gittag />
              ) : topicName === "Git Host VsCode" ? (
                <Githost></Githost>
              ) : (
                <></>
              )}
            </>
          ) : courseName === "Cloud" ? (
            <>
              {topicName === "Blue & Green(Deployment Commands)" ? (
                <Buleandgreencmd />
              ) : topicName === "Blue&Green(deployment)" ? (
                <Blueandgreendeply />
              ) : topicName === "Bluepathyaml" ? (
                <Bluepathyaml></Bluepathyaml>
              ) : (
                <></>
              )}
            </>
          ) : (
            //  :
            //  courseName === "React" ? <>
            //      {
            //          topicName === "Server Link Access In Local" ? <ExternalUrlAccesLocal /> :

            //              <></>
            //      }
            //  </>

            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
