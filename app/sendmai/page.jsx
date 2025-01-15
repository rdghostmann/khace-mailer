"use client";
import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";

import Loading from "../loading";  // Import the Loading component

const Page = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState(""); // State for the sender's email
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false); // Boolean state for loading

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading component

    try {
      const res = await fetch("/api/mailer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to: email, name, fromEmail, subject, body }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Email sent successfully!"); // Success message
      } else {
        alert(`Error: ${data.message}`); // Error message
      }
    } catch (error) {
      alert(`Error: ${error.message}`); // Catch network or other errors
    } finally {
      setLoading(false); // Hide loading component
    }
  };

  return (
    <>
      {/* Show loading component when `loading` is true */}
      {loading && <Loading />} 
      <main className="flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold mb-4">Send Email</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-sm font-medium" htmlFor="to">
              To:
            </label>
            <input
              type="email"
              id="to"
              placeholder="recipient@example.com"
              className="w-full p-2 border-b-2 border-slate-200"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-sm font-medium" htmlFor="from">
              Sender Name:
            </label>
            <input
              id="from"
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border-b-2 border-slate-200"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-sm font-medium" htmlFor="fromEmail">
              Sender Email:
            </label>
            <input
              id="fromEmail"
              type="email"
              placeholder="youremail@example.com"
              className="w-full p-2 border-b-2 border-slate-200"
              value={fromEmail}
              onChange={(e) => setFromEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-sm font-medium" htmlFor="subject">
              Subject:
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Subject"
              className="w-full p-2 border-b-2 border-slate-200"
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-sm font-medium" htmlFor="body">
              Message:
            </label>
            <textarea
              id="body"
              placeholder="Message content here"
              className="w-full p-2 border-b-2 border-slate-200"
              rows="4"
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-fit flex items-center justify-center space-x-2 bg-blue-600 text-white p-2 rounded-sm">
            {loading ? "Sending..." : <><span>Send</span> <FaTelegramPlane /> </>}
          </button>
        </form>
      </main>
    </>
  );
};

export default Page;
