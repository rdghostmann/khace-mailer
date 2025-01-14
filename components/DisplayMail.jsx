import React from "react";

const DisplayMail = () => {
  return (
    <div className="p-4 bg-gray-900 text-white min-h-screen">
      <div className="space-y-4">
        <div className="text-lg font-semibold">Invitation</div>
        <div className="text-sm">
          <span className="block">
            <strong>From:</strong> Bob Johnson
          </span>
          <span className="block">
            <strong>To:</strong> Me
          </span>
        </div>
        <div className="text-sm">
          <strong>Date:</strong> 1/1/2022, 7:00:00 AM
        </div>
        <div className="pt-4">
          <p>You are invited to my party.</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayMail;
