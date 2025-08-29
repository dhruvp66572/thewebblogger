import React from 'react'

const loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="relative w-32 h-32">
        <div className="absolute top-0 left-0 w-full h-full border-8 border-gray-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-8 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full animate-ping opacity-75 bg-blue-500 rounded-full"></div>
      </div>
      <h2 className="mt-4 text-xl font-semibold text-gray-700 animate-pulse">Loading...</h2>
      <p className="mt-2 text-sm text-gray-500">Please wait while we fetch the content</p>
    </div>
  )
}

export default loading