import React from 'react'

const Manager = () => {
  return (
    <>
      <div className="bg-slate-50 mycontainer">
        <h1 className="text-4xl text font-bold text-center">
          <span className="text-green-600"> &lt;</span>Pass
          <span className="text-green-600">OP/&gt;</span>
        </h1>
        <p className="text-green-700 text-lg text-center">
          Your Own Password Manager
        </p>
        <div className="text-black flex flex-col p-4">
          <input
            type="text"
            className=" rounded-full border border-green-500 w-full p-4 py-1"
          />
          <div className="flex w-full justify-between gap-8">
            <input
              type="text"
              className=" rounded-full border border-green-500 w-full p-4 py-1"
            />
            <input
              type="text"
              className=" rounded-full border border-green-500 w-full p-4 py-1"
            />
          </div>

          <button className="flex justify-center items-center">
            <lord-icon
              src="https://cdn.lordicon.com/ftndcppj.json"
              trigger="in"
              delay="1500"
              state="in-reveal"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </>
  )
}

export default Manager
