import "./InterviewBox.css";
import ChatBox from "./ChatBox";
import InputArea from "./InputArea";

function InterviewBox({
  messages,
  onSend,
  input,
  setInput,
  chatBoxRef,
  isDone,
  newChat,
}) {
  return (
    <div className="interviewBox">
      <div className="interviewHeader">
        <h1>Turners Cars Insurance Adviser</h1>
        <button className="newChatBtn" onClick={newChat}>
          New Chat
        </button>
      </div>

      <ChatBox messages={messages} chatBoxRef={chatBoxRef} />

      <InputArea
        input={input}
        setInput={setInput}
        onSend={onSend}
        isDone={isDone}
      />
    </div>
  );
}

export default InterviewBox;
