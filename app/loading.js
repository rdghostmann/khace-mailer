// app/loading.js
import React from 'react';
import loadingImg from '../public/loading-img.gif';
import Image from 'next/image';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50">
      <Image 
        src={loadingImg} 
        alt="Loading..." 
        width={100} 
        height={100} 
      />
    </div>
  );
};

export default Loading;
