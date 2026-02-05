import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import ChatModal from './ChatModal';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-gray-900 text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-all hover:scale-110 active:scale-95"
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <ChatModal onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}