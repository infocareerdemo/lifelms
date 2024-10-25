import { useEffect, useRef, useState } from "react";
import { Client } from "@stomp/stompjs";

const MsWebSocket = () => {
  const stompClientRef = useRef(null);
  const [notificationMsg, setNotificationMsg] = useState([]);

  const [totalOrderDetailsArray, setTotalOrderDetailsArray] = useState([]);
  const [locationOrderDetailsArray, setLocationOrderDetailsArray] = useState(
    []
  );
  const [totalCount, setTotalCount] = useState();

  const [userId] = useState(localStorage.getItem("userId"));

  const [role] = useState(localStorage.getItem("roleId"));

  
  useEffect(() => {
    const socketUrl = `http://192.168.3.107:7003/ws`;
    const stompClient = new Client({
      brokerURL: socketUrl,
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => onConnected(stompClient),
      onStompError: onError,
    });

    stompClient.activate();
    stompClientRef.current = stompClient;

    return () => {
      if (stompClientRef.current) {
        stompClientRef.current.deactivate();
      }
    };
  }, []);

  const onConnected = (stompClient) => {
    console.log("Connected to server");

    stompClient.subscribe("/topic/message", (message) => {
        console.log(message)
      try {
        // if (role !== 1) {
        setNotificationMsg(message.body);
        // }
      } catch (error) {
        console.log(error);
      }
    });

    const userQueue = `/user/${userId}/queue/notifications`;
    stompClient.subscribe(userQueue, (message) => {
      try {
        setNotificationMsg(message.body);
      } catch (error) {
        console.log("Error parsing JSON:", error);
      }
    });

    stompClient.subscribe("/topic/orders", (message) => {
      const data = JSON.parse(message.body);

      console.log(data, "jhjhjh");

      setTotalCount(data.totalOrdersCount || 0);
      setTotalOrderDetailsArray(data.totalOrderDetails || []);
      setLocationOrderDetailsArray(
        Object.keys(data.locationOrderDetails || {}).map((key) => ({
          name: key,
          value: data.locationOrderDetails[key],
        }))
      );
    });
  };

  const onError = (error) => {
    console.log("Connection error:", error);
  };

  return (
    <div>
      <div>
        <h2>Product List</h2>
        <ul>
          {/* {notificationMsg.map((product, index) => (
            <li key={index}>
              <strong>{product.name}</strong>: {product.description}
            </li>
          ))} */}
          {notificationMsg}
        </ul>
      </div>
    </div>
  );
};

export default MsWebSocket;
