"use client"
import React, { useEffect, useState } from "react";
import style from "./chat.module.css";

interface IMsgDataTypes {
  roomId: String | number;
  user: String;
  msg: String;
  time: String;
}

const ChatNext = ({ socket, username, roomId }: any) => {
  const [currentMsg, setCurrentMsg] = useState("");
  const [chat, setChat] = useState<IMsgDataTypes[]>([]);

  const sendData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentMsg !== "") {
      const msgData: IMsgDataTypes = {
        roomId,
        user: username,
        msg: currentMsg,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_msg", msgData);
      setCurrentMsg("");
    }
  };

//   const sendisTyping = async (e: any) => {
//     if (e.target.value.trim() !== "") {
//       const msgData: IMsgDataTypes = {
//         roomId,
//         user: username,
//         msg: "is typing...",
//         time:
//           new Date(Date.now()).getHours() +
//           ":" +
//           new Date(Date.now()).getMinutes(),
//       };
//       await socket.emit("send_msg", msgData);
//     }
//   }


  useEffect(() => {
    socket.on("receive_msg", (data: IMsgDataTypes) => {
      setChat((pre) => [...pre, data]);
    });
  }, [socket]);


  return (
    // <div className={style.chat_div}>
    <div className=" text-slate-200 bg-slate-800  w-full lg:w-6/12 fixed bottom-0 right-0 p-5 z-50 ">
      {/* <div className={style.chat_border}> */}
        <div>
        <div style={{ marginBottom: "1rem" }}>
          <p>
            Name: <b>{username}</b> and Room Id: <b>{roomId}</b>
          </p>
        </div>
        <div>
          {chat.map(({ roomId, user, msg, time }, key) => (
            <div
              key={key}
              className={
                user == username
                  ? style.chatProfileRight
                  : style.chatProfileLeft
              }
            >
              <span
                className={style.chatProfileSpan}
                style={{ textAlign: user == username ? "right" : "left" }}
              >
                {user.charAt(0)}
              </span>
              <h3 style={{ textAlign: user == username ? "right" : "left" }}>
                {msg}
              </h3>
            </div>
          ))}
        </div>
        <div>
          <form onSubmit={(e) => sendData(e)} className="flex justify-between">
            <input
            //   className={style.chat_input}
              className="w-10/12 p-2 rounded-md bg-slate-900 text-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              type="text"
              value={currentMsg}
              placeholder="Type your message.."
              onChange={(e) => setCurrentMsg(e.target.value)}
            //   onFocus={(e) => sendisTyping(e)}
            />
            <button className={style.chat_button}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatNext;