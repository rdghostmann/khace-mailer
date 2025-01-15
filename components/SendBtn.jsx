"use client";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import {useFormStatus } from "react-dom";

const SendBtn = () => {
  const { pending } = useFormStatus();

  return (
    <div className="flex items-end justify-center">
      <button
        className="w-fit flex items-center justify-center space-x-2 bg-blue-600 text-white p-2 rounded-sm disabled:bg-gray-400"
        type="submit"
        disabled={pending}
      >
        <>
          <span>{pending ? "Sending..." : "Send"}</span> <FaTelegramPlane />
        </>
      </button>
    </div>
  );
};

export default SendBtn;
