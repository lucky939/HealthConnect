import React from "react";

const Loading = () => {
  return (
    <div class="flex space-x-2 justify-center items-center bg-white h-screen">
      <span class="sr-only">Loading...</span>
      <div class="h-6 w-6 bg-blue-300 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div class="h-6 w-6 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.10s]"></div>
      <div class="h-6 w-6 bg-blue-900 rounded-full animate-bounce"></div>
    </div>
  );
};

export default Loading;
