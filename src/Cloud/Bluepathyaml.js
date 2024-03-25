import React from 'react';
import '../Components/Navbar.css';

// export const EResourceImg = process.env.PUBLIC_URL + '/images' + '/EResourcesImg.png';
const Bluepathyaml = () => {
    return (
        <div >
            <p className='subheadCls'>Blue path yaml</p>
            {/* <p> Commit changes, create a new branch, and merge the request using the command line.<br></br><br></br> */}
            <div className='command-container'>
            <div style={{ paddingLeft: '20px' }}>
        <p>
            # Deployment YAML
        </p>
        <code>
            apiVersion: apps/v1
            <br />
            kind: Deployment
            <br />
            metadata:
            <br />
            &nbsp;&nbsp;name: blue-spring-app
            <br />
            &nbsp;&nbsp;namespace: blue
            <br />
            spec:
            <br />
            &nbsp;&nbsp;replicas: 1
            <br />
            &nbsp;&nbsp;selector:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;matchLabels:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;app: spring-app
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color: blue
            <br />
            &nbsp;&nbsp;template:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;metadata:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;labels:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;app: spring-app
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color: blue
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;version: "blue"  # Added version label
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;spec:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;containers:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- name: spring-app
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;image: imranmik/sts-kube
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ports:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- containerPort: 8038
        </code>
        <p>
            # Service YAML
        </p>
        <code>
            apiVersion: v1
            <br />
            kind: Service
            <br />
            metadata:
            <br />
            &nbsp;&nbsp;name: blue-spring-app-service
            <br />
            &nbsp;&nbsp;namespace: blue
            <br />
            spec:
            <br />
            &nbsp;&nbsp;selector:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;app: spring-app
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;color: blue
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;version: "blue"
            <br />
            &nbsp;&nbsp;ports:
            <br />
            &nbsp;&nbsp;- protocol: TCP
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;port: 80
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;targetPort: 8038
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;nodePort: 31003
            <br />
            &nbsp;&nbsp;type: NodePort
        </code>
        <p>
            # Ingress YAML
        </p>
        <code>
            apiVersion: networking.k8s.io/v1
            <br />
            kind: Ingress
            <br />
            metadata:
            <br />
            &nbsp;&nbsp;name: blue-app-ingress
            <br />
            &nbsp;&nbsp;namespace: blue
            <br />
            spec:
            <br />
            &nbsp;&nbsp;ingressClassName: "traefik"
            <br />
            &nbsp;&nbsp;rules:
            <br />
            &nbsp;&nbsp;- host: blue.com
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;http:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;- path: /appdata
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pathType: Prefix
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backend:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;service:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: spring-app-blue-service
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;port:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;number: 80
        </code>
    </div>


            </div>
        </div>
    );
};

export default Bluepathyaml;
