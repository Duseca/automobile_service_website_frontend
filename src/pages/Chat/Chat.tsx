import { useState } from "react";
import HeaderFooterLayout from "../../layouts/HeaderFooterLayout"
interface Message {
  sender: "me" | "them";
  content: string;
  time?: string;
}

interface ChatUser {
  id: number;
  avatar: string;
  name: string;
  online?: boolean;
  lastSeen?: string;
  lastMessage?: string;
  messages: Message[];
}
const Chat = () => {
  const dummyUsers: ChatUser[] = [
    {
      id: 1,
      name: "Alice",
      avatar: "https://i.pravatar.cc/100?img=1",
      online: true,
      lastSeen: "2m ago",
      lastMessage: "Hi Alice!",
      messages: [
        { sender: "them", content: "Hey there!", time: "10:00 AM" },
        { sender: "me", content: "Hi Alice!", time: "10:02 AM" },
      ],
    },
    {
      id: 2,
      name: "Bob",
      avatar: "https://i.pravatar.cc/100?img=2",
      online: false,
      lastSeen: "1h ago",
      lastMessage: "Hey Bob, how are you?",
      messages: [
        { sender: "them", content: "Hello!", time: "09:15 AM" },
        { sender: "me", content: "Hey Bob, how are you?", time: "09:20 AM" },
      ],
    },
  ];

  const [users, setUsers] = useState<ChatUser[]>(dummyUsers);
  const [selectedUserId, setSelectedUserId] = useState<number>(
    dummyUsers[0].id
  );
  const [newMessage, setNewMessage] = useState("");

  const selectedUser = users.find((user) => user.id === selectedUserId);

  const handleSend = () => {
    if (!newMessage.trim()) return;

    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === selectedUserId
          ? {
              ...user,
              messages: [
                ...user.messages,
                { sender: "me", content: newMessage, time: "Now" },
              ],
              lastMessage: newMessage,
              lastSeen: "Now",
            }
          : user
      )
    );
    setNewMessage("");
  };
  return (
   <div> 
  <HeaderFooterLayout>
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Sidebar - Chats */}
          <div className="bg-white rounded-lg shadow p-4 md:col-span-1">
            <h2 className="text-lg font-semibold mb-4">Chats</h2>
            <ul className="space-y-2">
              {users.map((user) => (
                <li
                  key={user.id}
                  onClick={() => setSelectedUserId(user.id)}
                  className={`flex items-center gap-3 p-2 cursor-pointer rounded-md transition ${
                    user.id === selectedUserId
                      ? 'bg-blue-100'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500 truncate">{user.lastMessage}</p>
                  </div>
                  <span className="text-[10px] text-gray-400">{user.lastSeen}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Chat Window */}
          <div className="bg-white rounded-lg shadow flex flex-col h-[70vh] md:col-span-3">
            {/* Chat Header */}
            {selectedUser && (
              <div className="flex items-center gap-3 border-b border-gray-200 px-4 py-3">
                <img
                  src={selectedUser.avatar}
                  alt={selectedUser.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-sm font-semibold">{selectedUser.name}</h3>
                  <p className="text-xs text-gray-500">
                    {selectedUser.online ? 'Online' : 'Last seen ' + selectedUser.lastSeen}
                  </p>
                </div>
              </div>
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {selectedUser?.messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.sender === 'me' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-lg text-sm max-w-[70%] shadow-sm relative ${
                      msg.sender === 'me'
                        ? 'bg-blue-500 text-white rounded-br-none'
                        : 'bg-gray-200 text-gray-900 rounded-bl-none'
                    }`}
                  >
                    <p>{msg.content}</p>
                    <span className="absolute bottom-[-16px] right-1 text-[10px] text-gray-400">
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Box */}
            <div className="border-t border-gray-200 p-3 flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
              <button
                onClick={handleSend}
                className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </HeaderFooterLayout>
</div>

  )
}

export default Chat
