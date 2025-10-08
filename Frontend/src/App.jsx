import { useState, useEffect, useRef } from "react";
import "./App.css";
import StartForm from "./components/StartForm";
import InterviewBox from "./components/InterviewBox";

function App() {
  const [interviewStart, setInterviewStart] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isDone, setIsDone] = useState(false);

  const chatBoxRef = useRef(null);

  const BACKEND_URL = "http://localhost:5000/adviser";

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleStart = async (e) => {
    e.preventDefault();
    setInterviewStart(true);

    // 🔹 Start Interview
    try {
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          history: [],
        }),
      });

      const data = await res.json();
      if (data.response) {
        setMessages([{ role: "interviewer", text: data.response }]);
      }
    } catch (err) {
      setMessages([
        { role: "interviewer", text: "Error connecting to server" },
      ]);
    }
  };
  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "me", text: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          history: newMessages,
        }),
      });
      const data = await res.json();
      if (data.response) {
        setMessages([
          ...newMessages,
          { role: "interviewer", text: data.response },
        ]);
        if (data.done) setIsDone(true);
      }
    } catch (err) {
      setMessages([
        ...newMessages,
        { role: "interviewer", text: "Error connecting to server." },
      ]);
    }
  };

  const newChat = async () => {
    setInterviewStart(false);
    setMessages([]);
    setInput("");
    setIsDone(false);
  };

  return (
    <div className="appBody">
      <div className="appContainer">
        {!interviewStart ? (
          <StartForm onStart={handleStart} />
        ) : (
          <InterviewBox
            messages={messages}
            onSend={handleSend}
            input={input}
            setInput={setInput}
            chatBoxRef={chatBoxRef}
            isDone={isDone}
            newChat={newChat}
          />
        )}
      </div>
    </div>
  );
}

export default App;
