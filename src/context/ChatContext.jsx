/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (messageContent) => {
    const newMessage = {
      id: uuid(),
      content: messageContent,
      upvotes: 0,
    };
    // Updatinng the messages locally
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Implement the logic to send the message to the server

    return newMessage;
  };

  const upvoteMessage = async (messageId) => {
    // Update the upvotes locally
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === messageId ? { ...msg, upvotes: msg.upvotes + 1 } : msg
      )
    );

    // Implement logic to send upvote to the server
  };

  const dismissMessage = (messageId) => {
    setMessages((prevMessages) =>
      prevMessages.filter((message) => message.id !== messageId)
    );
  };

  const contextValue = {
    messages,
    sendMessage,
    upvoteMessage,
    dismissMessage,
  };

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};

export { ChatContext, ChatProvider };
