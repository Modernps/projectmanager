import React from 'react'


const LoginPage = () => {
  return (
    <section id="#header-top">
    <header className="text-xl bg-white text-black font-bold flex justify-between items-center p-4 mx-4 my-4 rounded-xl shadow-xl">
        <div className="flex justify-start">
            <img src ="/logo-placeholder.webp" alt="Logo" className="h-20 w-20 mr-2 ml-4"/>
        </div>
        <div className="flex items-center gap-20 mr-4">
            <button id="#aboutus">About Us</button>
            <button id="#contactus">Contact Us</button>
            <button id="#Mission">Mission</button>
        </div>
        <div className="flex justify-end mx-10">
            <button id="#login" className="rounded-lg border-3 p-2 bg-gray-400 text-white">Login</button>
        </div>
    </header>
    </section>
  )
}

export default LoginPage