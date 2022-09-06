import React, { useState, useEffect , useRef } from "react";
import { db, auth } from "../firebase";
import SendMessage from "./SendMessage";
import SignOut from "./SignOut";
import '../App.css';

function Chat() {
  const scroll = useRef()
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
        // console.log("yahan dekkho ", setMessages)
      });
  }, []);

  return (
    <>
      <SignOut />
      {messages.map(({ uid, text, photoURL }) => (
        <div className="msgs">
        <div>
          <div
            key={uid}
            className={`msg ${uid === auth.currentUser.uid ? "sent" : "received"}`}
          >
            <img src={photoURL} alt="profilePic" />
            <p>{text}</p>
          </div>
        </div>
        </div>
      ))}
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </>
  );
}

export default Chat;
