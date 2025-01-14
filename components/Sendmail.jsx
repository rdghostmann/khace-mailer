import React from "react";

const SendMail = () => {
  return (
    <div className="p-4 bg-gray-900 text-white min-h-screen">
      <form className="space-y-4">
        <div>
          <label className="block mb-2 text-sm font-medium" htmlFor="to">
            To:
          </label>
          <input
            id="to" 
            type="email"
            placeholder="lee@vercel.com"
            className="w-full p-2 rounded bg-gray-800 text-white"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium" htmlFor="from">
            From:
          </label>
          <input
            id="from"
            type="email"
            placeholder="your@email.com"
            className="w-full p-2 rounded bg-gray-800 text-white"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium" htmlFor="subject">
            Subject:
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Testing"
            className="w-full p-2 rounded bg-gray-800 text-white"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium" htmlFor="body">
            Message:
          </label>
          <textarea
            id="body"
            placeholder="Hello"
            className="w-full p-2 rounded bg-gray-800 text-white"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white flex items-center space-x-2"
        >
          <span>Send</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SendMail;
