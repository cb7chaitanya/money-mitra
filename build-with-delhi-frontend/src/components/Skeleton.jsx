import React from 'react'

const Skeleton = () => {
  return (
    <div role="status" className="max-w-sm animate-pulse">
        <div className="h-48 bg-gray-400 rounded w-48 mb-4 mx-6"></div>
    </div>
  )
}

export default Skeleton