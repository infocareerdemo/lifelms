import React from 'react';
import '../Components/Navbar.css';


const Githost = () => {
    return (
        <div >
            <p className='subheadCls'>Git Host VsCode :</p>
            <div className='command-container'>
                <span style={{ fontWeight: 'bold', color: 'black' }}>Git Tags To create a repository:</span>
                <ul>
                    <li>git init</li>
                    <li>git add .</li>
                    <li>git status</li>
                    <li>git commit -m "msg"</li>
                    <li>git branch main -m "main"</li>
                    <li>git remote add origin url</li>
                    <li>git push -u origin "main"</li>
                </ul>

                {/* ---------- steps 2 --------------- */}

                <span className='subheadCls'>Create new bramch named as gh-pages</span>
                <span className='stepsCls'>Steps:</span>
                {/* <span className='stepsCls'>Step 2:</span> */}
                <span className='stepsCls'>1.Add Homepage in package.json Example:</span>
                <ul>
                    <li>  "homepage": "https://infocareerdemo.github.io/lifelms",</li>
                </ul>
                <img className='imgCls' src={process.env.PUBLIC_URL + "/hostimg/Examplepackge.png"} alt="Description of the image" />
                <img className='imgCls' src={process.env.PUBLIC_URL + "/hostimg/package1.png"} alt="Description of the image" />
                <span className='stepsCls'>2.Add the scripts in package.json :</span>
                <ul>
                    <li>  "deploy": "gh-pages -d build", </li>
                    <li>  "build": "react-scripts build",</li>
                </ul>
                <img className='imgCls' src={process.env.PUBLIC_URL + "/hostimg/scripts.png"} alt="Description of the image" />

                <span className='stepsCls'>3.Command to deploy :</span>
                <ul>
                    <li>  "npm run deploy", </li>
                </ul>
                <img className='imgCls' src={process.env.PUBLIC_URL + "/hostimg/rundeploy.png"} alt="Description of the image" />
                <span className='stepsCls'>4.After deployed Its shows Published</span>
              
                <img className='imgCls' src={process.env.PUBLIC_URL + "/hostimg/published.png"} alt="Description of the image" />
                <span className='stepsCls'>5.After deploy we can able to see the deployed status in action</span>
               
                <img className='imgCls' src={process.env.PUBLIC_URL + "/hostimg/Actions.png"} alt="Description of the image" />
                <img className='imgCls' src={process.env.PUBLIC_URL + "/hostimg/Pagesstg.png"} alt="Description of the image" />
                
                <ul>
                    <li>  "After the code is deployed in git we can able to access the url", </li>
                </ul>

                
            </div>
        </div>
    );
};

export default Githost;
