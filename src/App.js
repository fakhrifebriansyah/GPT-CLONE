import { useState } from 'react';
import { sendMessageToOpenAI } from './openai';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    const response = await sendMessageToOpenAI(input);
    setMessages([
      ...messages,
      {text: input, isUser: true},
      {text: response, isUser: false}
    ]);
    setInput("");
    console.log(response);
  };


  return (
    <div className="App">
      <div class="chat">
        {messages.map((message, index) => (
          <div key={index} className={message.isUser ? "user-message" : "bot-message"}>{message.text}</div>
        ))}
      </div>
      

      <div class="input-container">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default App;
