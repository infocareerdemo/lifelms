import React from 'react';
import '../Components/Navbar.css';


const Gitbranch = () => {
    return (
        <div >
            <p className='subheadCls'>Git Branch: </p>
            <p> Commit changes, create a new branch, and merge the request using the command line.<br></br><br></br>
                <div className='command-container'>
                    <span className='stepsCls'>Step 1:</span>
                    <span style={{ fontWeight: 'bold', color: 'black' }}>Git Clone and Commit the code</span>
                    <ul>
                        <li>git clone</li>
                        <li>git branch</li>
                        <li>git status</li>
                        <li>git add .</li>
                        <li>git commit -m “commit msg”</li>
                        <li>git pull</li>
                        <li>git push</li>
                    </ul>
                    {/* ---------- steps 2 --------------- */}
                    <span className='stepsCls'>Step 2:</span>
                    <span className='subheadCls'>Push the code in new branch request  and Merge Request : </span>
                    <ul>
                        <li>git branch</li>
                        <li>git branch dev (new branch name)</li>
                        <li>git checkout dev (new-branch-name)</li>
                        <li>git status</li>
                        <li>git add</li>
                        <li>git commit-m "Your commit message here"</li>
                        <li>git push-u origin dev (new-branch-name)</li>
                        <li>git checkout main</li>
                        <li>git merge dev (new-branch-name)</li>
                        <li>git push origin main</li>
                    </ul>

                    {/* <span className='stepsCls'>Step 2:</span> */}
                    <span className='stepsCls'>1.Create a repository on GitHub.</span>
                    <img className='imgCls' src="branchimgs/createrep1.jpg.png" alt="Description of the image" />
                    <img className='imgCls' src="branchimgs/createrep2.jpg.png" alt="Description of the image" />

                    <span className='stepsCls'>2.Create a new Spring Boot project or use an existing project.</span>

                    <img className='imgCls' src="branchimgs/createrep3.jpg.png" alt="Description of the image" />

                    <span className='stepsCls'>3.Commit the project to the GitHub repository.</span>
                    <img className='imgCls' src="branchimgs/createrep4.jpg.png" alt="Description of the image" />

                    
                    <span className='stepsCls'>4.Check the branch status :</span>
                    <img className='imgCls' src="branchimgs/createrep5.jpg.png" alt="Description of the image" />

                    <span className='stepsCls'>5.Create new branch :</span>
                    <img className='imgCls' src="branchimgs/createrep6.jpg.png" alt="Description of the image" />

                    <span className='stepsCls'>6.Checkout new branch :</span>
                    <img className='imgCls' src="branchimgs/checkoutnew1.png" alt="Description of the image" />
                    <img className='imgCls' src="branchimgs/checkoutnew2.png" alt="Description of the image" />

                    <span className='stepsCls'>7.Added new method code in this project :8.Check the Git status :</span>
                    <img className='imgCls' src="branchimgs/addednewmethod.png" alt="Description of the image" />

                    <span className='stepsCls'>8.Check the Git status :</span>
                    <img className='imgCls' src="branchimgs/gitstatus.png" alt="Description of the image" />

                    <span className='stepsCls'>9.Commit the code to a new branch :</span>
                    <img className='imgCls' src="branchimgs/cmdthecode.png" alt="Description of the image" />

                    <span className='stepsCls'>10.Check the status of the new branch in the GitHub repository :</span>
                    <img className='imgCls' src="branchimgs/tenthnewbranch.png" alt="Description of the image" />
                    <img className='imgCls' src="branchimgs/tenthnewbranch2.png" alt="Description of the image" />

                    <span className='stepsCls'>11.Check the head branch status :</span>
                    <img className='imgCls' src="branchimgs/elevanthtopic.png" alt="Description of the image" />

                    <span className='stepsCls'>12.Check the new branch status :</span>
                    <img className='imgCls' src="branchimgs/twelthimg.png" alt="Description of the image" />

                    <span className='stepsCls'>13.git checkout head and check the branch :</span>
                    <img className='imgCls' src="branchimgs/onethree.png" alt="Description of the image" />
                    <img className='imgCls' src="branchimgs/onethreedotone.png" alt="Description of the image" />

                    <span className='stepsCls'>14.The code changes are merged from the new branch(dev) to the 'head' branch :</span>
                    <img className='imgCls' src="branchimgs/onefour.png" alt="Description of the image" />

                    <span className='stepsCls'>15.Push the code from the new branch(dev) to the head branch :</span>
                    <img className='imgCls' src="branchimgs/onefive.png" alt="Description of the image" />

                    <span className='stepsCls'>16.You can check the final code in the Git repository; the branch merge has been completed :</span>
                    <img className='imgCls' src="branchimgs/onesix.png" alt="Description of the image" />


                    
                



{/* 
                    <span className='stepsCls'>9.Commit the code to a new branch :</span>
                    <img className='imgCls' src="/cmdthecode.png" alt="Description of the image" />

                    <span className='stepsCls'>9.Commit the code to a new branch :</span>
                    <img className='imgCls' src="/cmdthecode.png" alt="Description of the image" /> */}

                
               
                    
                </div>

            </p>

            {/* <p>Java Basic list</p>
      <p>Java Basic list</p>
      <p>Java Basic list</p>
      <p>Java Basic list</p> */}
        </div>
    );
};

export default Gitbranch;
