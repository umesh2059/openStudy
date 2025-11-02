import React, { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';

export default function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] =useState(false);
 

  const handleSend = async () => {
    if (input.trim() && !isLoading) {
      const userMessage = {
        id: messages.length + 1,
        type: 'question',
        text: input,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, userMessage]);
      const question = input;
      setInput('');
      setIsLoading(true);
      
      try {
        const response = await fetch("http://127.0.0.1:8000/ask", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: question })
        });
        
        const data = await response.json();
        
        const answer = {
          id: messages.length + 2,
          type: 'answer',
          text: data.answer || data.error || 'Sorry, I could not process your request.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, answer]);
      } catch (error) {
        const errorMessage = {
          id: messages.length + 2,
          type: 'answer',
          text: 'Sorry, I am having trouble connecting to the server. Please make sure the backend is running.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-black bg-opacity-30 backdrop-blur-lg border-b border-purple-500 border-opacity-30 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">AI Assistant</h1>
            <p className="text-sm text-purple-300">Always here to help</p>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'answer' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`flex gap-3 max-w-2xl ${
                message.type === 'answer' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              {/* Avatar */}
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                  message.type === 'question'
                    ? 'bg-gradient-to-br from-blue-500 to-cyan-500'
                    : 'bg-gradient-to-br from-purple-500 to-pink-500'
                }`}
              >
                {message.type === 'question' ? (
                  <User className="w-5 h-5 text-white" />
                ) : (
                  <Bot className="w-5 h-5 text-white" />
                )}
              </div>

              {/* Message Bubble */}
              <div
                className={`flex flex-col ${
                  message.type === 'answer' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`px-4 py-3 rounded-2xl transform transition-all duration-300 hover:scale-105 ${
                    message.type === 'question'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-tl-none shadow-lg shadow-blue-500/50'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-tr-none shadow-lg shadow-purple-500/50'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
                <span className="text-xs text-purple-300 mt-1 px-2">
                  {message.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="bg-black bg-opacity-30 backdrop-blur-lg border-t border-purple-500 border-opacity-30 px-4 py-4">
        <div className="max-w-4xl mx-auto flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your question..."
            className="flex-1 bg-slate-800 bg-opacity-50 text-white placeholder-purple-300 px-4 py-3 rounded-xl border border-purple-500 border-opacity-30 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all"
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/50 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Thinking...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}