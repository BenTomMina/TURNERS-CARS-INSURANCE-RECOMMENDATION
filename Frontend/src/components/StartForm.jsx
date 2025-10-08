import "./StartForm.css";

function StartForm({ onStart }) {
  return (
    <form className="startForm" onSubmit={onStart}>
      <h1>Turners Insurance Adviser</h1>
      <button type="submit">Start Chat</button>
    </form>
  );
}

export default StartForm;
