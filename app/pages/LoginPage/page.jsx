"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    // For now, we'll redirect without validation
    // You can add authentication logic here later
    router.push('/pages/Dashboard')
  }
  return (
    <div>
      <header className="text-xl bg-white text-black font-bold flex justify-between items-center p-4 mx-4 my-4 rounded-xl shadow-xl">
        <div className="flex justify-start">
          <img src="/logo-placeholder.webp" alt="Logo" className="h-20 w-20 mr-2 ml-4"/>
        </div>
        <div className="flex items-center gap-20 mr-4">
          <button className="hover:text-blue-600">About Us</button>
          <button className="hover:text-blue-600">Contact Us</button>
          <button className="hover:text-blue-600">Mission</button>
        </div>
        <div className="flex justify-end mx-10">
          <button href="#login-form" className="rounded-lg border-2 border-gray-300 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600">
            Login
          </button>
        </div>
      </header>
      
      <section id="#login-form" className="flex justify-center items-center min-h-[calc(100vh-120px)] px-4">
        <div className="max-w-md w-full bg-white border-2 border-gray-200 rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome</h1>
            <h2 className="text-xl font-semibold text-gray-600">Please Login to Continue</h2>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
            >
              Login
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <a href="#" className="text-blue-500 hover:text-blue-600 text-sm">
              Forgot your password?
            </a>
          </div>
        </div>
      </section>

      <footer className="text-center text-gray-600 text-sm py-4 border-t border-gray-200 mt-8 shadow-lg">
        <div>
          <p>Need help? Contact us at <a href="mailto:support@yourcompany.com" className="text-blue-500 hover:text-blue-600">support@yourcompany.com</a></p>
        </div>
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default LoginPage