/* eslint-disable no-unused-vars */
// src/components/ChatApp.js

import React, { useContext, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import Message from "./Message";

const ChatApp = () => {
  const { messages, sendMessage, upvoteMessage, dismissMessage } =
    useContext(ChatContext);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() !== "") {
      await sendMessage(newMessage);
      setNewMessage("");
    }
  };

  const handleUpvote = (messageId) => {
    upvoteMessage(messageId);
  };

  const handleDismiss = (messageId) => {
    dismissMessage(messageId);
  };

  return (
    <div className="">
      <div className="max-w-7xl mx-auto ">
        <h1 className="text-center text-4xl font-bold pt-16 mb-4 text-white">
          100x Devs Cohort QnA
        </h1>

        <div className="flex ">
          {/* Left column for messages with less than 3 upvotes */}
          <div className="flex-1 p-4">
            <div>
              {messages
                .filter((message) => message.upvotes < 3)
                .map((message) => (
                  <Message
                    key={message.id}
                    message={message}
                    onUpvote={handleUpvote}
                    handleDismiss={handleDismiss}
                  />
                ))}
            </div>
          </div>

          {/* Middle column for messages with 3 or more upvotes */}
          <div className="flex-1 p-4">
            <div>
              {messages
                .filter(
                  (message) => message.upvotes >= 3 && message.upvotes < 10
                )
                .map((message) => (
                  <Message
                    key={message.id}
                    message={message}
                    onUpvote={handleUpvote}
                    onDismiss={handleDismiss}
                  />
                ))}
            </div>
          </div>

          {/* Right column for messages with 10 or more upvotes */}
          <div className="flex-1 p-4">
            <div>
              {messages
                .filter((message) => message.upvotes >= 10)
                .map((message) => (
                  <div key={message.id} className="mb-4">
                    <Message
                      message={message}
                      onUpvote={handleUpvote}
                      onDismiss={handleDismiss}
                    />

                    <button
                      className=" ml-4 bg-red-500 text-white px-4 py-2 rounded mt-2 focus:outline-none hover:bg-red-600"
                      onClick={() => handleDismiss(message.id)}
                    >
                      Dismiss
                    </button>
                  </div>
                ))}
            </div>
          </div>

          {/* Form for sending chats */}
        </div>
        <form className="flex-1 p-4" onSubmit={handleSendMessage}>
          <div className="mb-4">
            <label
              htmlFor="newMessage"
              className="block text-lg text-white font-medium text-gray-700"
            >
              What&apos;s Your Doubt?
            </label>
            <input
              type="text"
              id="newMessage"
              name="newMessage"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="mt-1 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-600"
          >
            Ask!
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatApp;
