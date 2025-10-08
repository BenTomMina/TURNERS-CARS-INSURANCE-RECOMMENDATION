import "./InputArea.css";

function InputArea({ input, setInput, onSend, isDone }) {
  return (
    <form className="inputArea" onSubmit={onSend}>
      <textarea
        placeholder={!isDone ? "Response..." : "Please start a new chat..."}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={3}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            onSend(e);
          }
        }}
        disabled={isDone}
      />
      <button type="submit" disabled={isDone}>
        Send
      </button>
    </form>
  );
}

export default InputArea;
