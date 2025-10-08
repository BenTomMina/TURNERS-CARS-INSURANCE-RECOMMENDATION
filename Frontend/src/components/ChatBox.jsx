import "./ChatBox.css";
import ReactMarkdown from "react-markdown";

function ChatBox({ messages, chatBoxRef }) {
  return (
    <div className="chatBox" ref={chatBoxRef}>
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`chatMessage ${msg.role === "me" ? "me" : "interviewer"}`}
        >
          {msg.role === "interviewer" ? (
            <ReactMarkdown>{msg.text}</ReactMarkdown>
          ) : (
            <p>{msg.text}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default ChatBox;
