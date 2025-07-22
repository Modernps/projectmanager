import React from 'react'

const dashboard = () => {
  return (
    <>
    <header className="text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-black font-bold flex justify-between items-center p-4 mx-4 my-4 rounded-xl shadow-xl border-e-red-950">
      <div>Hi</div>
      <div className="flex space-x-4 justify-end">
              <button className=" text-white flex text-lg justify-center space-x-1 hover:text-black p-2 px-2 shadow-xl rounded-lg bg-gradient-to-r from-black  to-white" href="#">button1</button>
              <button className=" text-white flex text-lg justify-center space-x-1 hover:text-black p-2 px-2 shadow-xl rounded-lg bg-gradient-to-r from-black  to-white" href="#">button1</button>
      </div>
    </header>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="grid-cols-4">Dashboard Content</h2>
      <p className="mt-2">This is the main content area for the dashboard.</p>

    </div>
    </>
  )
}

export default dashboard