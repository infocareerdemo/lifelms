import React from 'react';
import '../Components/Navbar.css';

// export const EResourceImg = process.env.PUBLIC_URL + '/images' + '/EResourcesImg.png';
const Gittag = () => {
    return (
        <div >
            <p className='subheadCls'>Git Tag Release:</p>
            {/* <p> Commit changes, create a new branch, and merge the request using the command line.<br></br><br></br> */}
                <div className='command-container'>
                    {/* <span className='stepsCls'>Step 1:</span> */}
                    <span style={{ fontWeight: 'bold', color: 'black' }}>Git Tag:</span>
                    <ul>
                        <li>Git tag is a release point.</li>
                        <li><span className='subheadCls'>Two Types:</span><br></br>
                            1.Annotated tag<br></br>
                            2.Light weighted tag
                        </li>
                        <li><span className='subheadCls'>Annotated tag:</span><br></br>
                            It is stored the object like author email, date, release notes, author details etc.….</li>
                        <li>Light weighted tag:<br></br>
                            Its store the specific data
                        </li>
                    </ul>
                    {/* ---------- steps 2 --------------- */}
                    
                    <span className='subheadCls'>Create new tag and release version:</span>
                    <span className='stepsCls'>Steps:</span>
                    <ul>
                        <li>git tag(check the tag)</li>
                        <li>git tag -a version1.0 -m “This msg for version1.0”(create new annotated tag)</li>
                        <li>git push origin version1.0(push the created tag in repository)</li>
                    </ul>

                    {/* <span className='stepsCls'>Step 2:</span> */}
                    <span className='stepsCls'>1.Check the tag in this repository:</span>
                    <img className='imgCls' src={process.env.PUBLIC_URL + "/tagimg/checkthetaglst.png"} alt="Description of the image" />
                    {/* <img className='imgCls' src="/createrep2.jpg.png" alt="Description of the image" /> */}

                    <span className='stepsCls'>2.Create tag in this repository :</span>
                    <img className='imgCls' src={process.env.PUBLIC_URL + "/tagimg/createtags.png"}  alt="Description of the image" />
                   

                     <span className='stepsCls'>3.Check the tag :</span>
                    <img className='imgCls' src={process.env.PUBLIC_URL + "/tagimg/chktagf.png"}  alt="Description of the image" /> 

                    <span className='stepsCls'>4.Push the tag to the GitHub repository :</span>
                    <img className='imgCls' src= {process.env.PUBLIC_URL + "/tagimg/puhtag.png"} alt="Description of the image" /> 

                    <span className='stepsCls'> 5.Check the tag in the GitHub repository :</span>
                    <img className='imgCls' src={process.env.PUBLIC_URL + "/tagimg/chktag.png"} alt="Description of the image" /> 
                    <img className='imgCls' src={process.env.PUBLIC_URL + "/tagimg/lastimg.png"} alt="Description of the image" /> 
                
                </div>
            {/* <p>Java Basic list</p>
      <p>Java Basic list</p>
      <p>Java Basic list</p>
      <p>Java Basic list</p> */}
        </div>
    );
};

export default Gittag;
