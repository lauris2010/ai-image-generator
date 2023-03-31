"use client";
import React, { useState } from "react";

type Props = {};

const PromptInput = (props: Props) => {
  const [input, setInput] = useState("");
  console.log(input);
  return (
    <div className="m-10 ">
      <form className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 rounded-md lg:divide-x">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a prompt... "
          className="flex-1 p-4 outline-none rounded-md"
        />
        <button
          disabled={!input}
          type="submit"
          className={`p-4 font-bold ${
            input
              ? "bg-violet-500 text-white transition-colors duration-200"
              : "text-gray-300 cursor-not-allowed"
          }`}
        >
          Generate
        </button>
        <button
          type="button"
          className="p-4 bg-violet-400 text-white transition-colors duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          User Suggestion
        </button>
        <button
          type="button"
          className="p-4 bg-white text-violet-500 border-none md:rounded-bl-none font-bold"
        >
          New Suggestion
        </button>
      </form>
    </div>
  );
};

export default PromptInput;
