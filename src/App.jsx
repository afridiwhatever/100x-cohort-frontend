// src/App.js
import { ChatProvider } from "./context/ChatContext.jsx";
import ChatApp from "./components/ChatApp.jsx";

const App = () => {
  return (
    <div className="min-h-screen w-screen bg-gray-900 box-border">
      <ChatProvider>
        <ChatApp />
      </ChatProvider>
    </div>
  );
};

export default App;
