import Message from "./Message";

export default function ChatWindow() {
  return (
    <div className="space-y-4">
      <Message
        role="assistant"
        text="Hi Reid 👋 I'm Identity. What would you like to create today?"
      />
    </div>
  );
}