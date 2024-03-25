import React from 'react';
import '../Components/Navbar.css';

// export const EResourceImg = process.env.PUBLIC_URL + '/images' + '/EResourcesImg.png';
const Blueandgreendeply = () => {
    return (
        <div >
            <p className='subheadCls'>Blue & Green (Deployment Commands)</p>
            {/* <p> Commit changes, create a new branch, and merge the request using the command line.<br></br><br></br> */}
            <div className='command-container'>
                <div>
                    <h2>Blue Deployment(localhost)</h2>
                    <hr />
                    <p>
                        # Go to the Blue-Traefik.yaml file location, open the terminal
                    </p>
                    <p>
                        # To deploy Blue and its service, ingress(traefik), use below command
                    </p>
                    <code>kubectl apply -f Blue-Traefik.yaml</code>
                    <p>
                        # If you deployed successfully the result will be shown like 3 files are created(deployment, service, ingress)
                    </p>
                    <p>
                        # To expose Blue deployment use below url in your browser
                    </p>
                    <a href="http://blue.localhost/appdata/api/get">http://blue.localhost/appdata/api/get</a>
                    <p>
                        If success, the result will be shown : result from get api
                    </p>
                </div>
                <hr />
                <div>
                    <h2>Green Deployment(localhost)</h2>
                    <hr />
                    <p>
                        # Go to the Green-Traefik.yaml file location, open the terminal
                    </p>
                    <p>
                        # To deploy Green and its service, ingress(traefik), use below command
                    </p>
                    <code>kubectl apply -f Green-Traefik.yaml</code>
                    <p>
                        # If you deployed successfully the result will be shown like 3 files are created(deployment, service, ingress)
                    </p>
                    <p>
                        # To expose Green deployment use below url in your browser
                    </p>
                    <a href="http://green.localhost/appdata/api/green">http://green.localhost/appdata/api/green</a>
                    <p>
                        If success, the result will be shown : result from get GREEN api2024-03-06T08:19:16.250977622
                    </p>
                </div>
                <hr />
                <div>
                    <h2>Blue Deployment(without localhost)</h2>
                    <hr />
                    <p>
                        # Go to the Blue-path.yaml file location, open the terminal
                    </p>
                    <p>
                        # To deploy Blue and its service, ingress(traefik), use below command
                    </p>
                    <code>kubectl apply -f Blue-path.yaml</code>
                    <p>
                        # If you deployed successfully the result will be shown like 3 files are created(deployment, service, ingress)
                    </p>
                    <p>Use below command to see the ip details</p>
                    <code>ifconfig</code>
                    <p>
                        # To expose Blue deployment(without localhost), use below command to open the hosts file
                    </p>
                    <code>sudo nano /etc/hosts</code>
                    <p>
                        # Go to the End of section, next to that use below command
                    </p>
                    <code>192.168.3.75    blue.com</code>
                    <p>
                        Note: Above IP address(192.168.3.75) will be shown in "ifconfig" command, so give IP address accordingly if wifi/data is connected
                    </p>
                    <p>
                        # After successfully configured in hosts, use below URL in your browser
                    </p>
                    <a href="http://blue.com/appdata/api/get">http://blue.com/appdata/api/get</a>
                    <p>
                        If success, the result will be shown : result from get api
                    </p>
                </div>
                <hr />
                <div>
                    <h2>Green Deployment(without localhost)</h2>
                    <hr />
                    <p>
                        # Go to the Green-path.yaml file location, open the terminal
                    </p>
                    <p>
                        # To deploy Green and its service, ingress(traefik), use below command
                    </p>
                    <code>kubectl apply -f Green-path.yaml</code>
                    <p>
                        # If you deployed successfully the result will be shown like 3 files are created(deployment, service, ingress)
                    </p>
                    <p>Use below command to see the ip details</p>
                    <code>ifconfig</code>
                    <p>
                        # To expose Green deployment(without localhost), use below command to open the hosts file
                    </p>
                    <code>sudo nano /etc/hosts</code>
                    <p>
                        # Go to the End of section, next to that use below command
                    </p>
                    <code>192.168.3.75    green.com</code>
                    <p>
                        Note: Above IP address(192.168.3.75) will be shown in "ifconfig" command, so give IP address accordingly if wifi/data is connected
                    </p>
                    <p>
                        # After successfully configured in hosts, use below URL in your browser
                    </p>
                    <a href="http://green.com/appdata/api/green">http://green.com/appdata/api/green</a>
                    <p>
                        If success, the result will be shown : result from get GREEN api2024-03-06T08:19:16.250977622
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blueandgreendeply;
