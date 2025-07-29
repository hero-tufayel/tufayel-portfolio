import React from "react";

export default function ChatWidget() {
  return (
    <button
      className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full shadow-lg p-4 flex items-center gap-2 hover:bg-blue-700 transition"
      style={{ zIndex: 9999 }}
      aria-label="Chat with me"
    >
      {/* Chat icon (SVG) */}
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path
          d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
      <span className="hidden sm:inline">Chat with me</span>
    </button>
  );
}
