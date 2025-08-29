"use client";

const error = ({ error }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Oops! An Error Occurred</h1>
        <p className="text-gray-600 mb-4">Something went wrong. Please try again later.</p>
        {error && (
          <div className="p-4 bg-red-50 rounded-md">
            <p className="text-red-700 text-sm font-medium">{error.message}</p>
          </div>
        )}
        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}

export default error