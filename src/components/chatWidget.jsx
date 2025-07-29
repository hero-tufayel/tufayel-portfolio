import React from "react";

export default function ChatWidget() {
  const chatLink = "https://wa.link/6spm0v";

  return (
    <a
      href={chatLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        fixed bottom-4 right-4 z-50
        group
      `}
      aria-label="Chat with me"
    >
      <div
        className="flex items-center gap-3 px-5 py-3 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl transition-all duration-200 hover:shadow-2xl hover:scale-105 active:scale-95 cursor-pointer"
      >
        {/* WhatsApp Icon (green in light, white in dark) */}
        <svg
          className="w-7 h-7 text-green-500 group-hover:text-green-600 dark:text-white transition-colors"
          viewBox="0 0 32 32"
          fill="currentColor"
        >
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.393L4 29l7.824-2.05C13.6 27.633 14.782 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.09 0-2.164-.176-3.186-.523l-.227-.075-4.646 1.217 1.24-4.53-.148-.234C7.13 18.36 6 16.74 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.98 2.43.02 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.22.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
        </svg>
        <span className="font-semibold text-base text-gray-900 dark:text-white group-hover:underline drop-shadow-sm">
          Chat with Me <span role="img" aria-label="wave">👋</span>
        </span>
      </div>
    </a>
  );
}
