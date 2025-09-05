import React from 'react'

function chromadb() {
    return (
        <div>
             <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 164"
    fill="currentColor"
    width="24"
    height="24"
  >
    {/* Left circle (filled) */}
    <ellipse cx="85.3" cy="81.9" rx="85.3" ry="81.9" fill="currentColor" />

    {/* Right circle (outlined) */}
    <ellipse
      cx="170.7"
      cy="81.9"
      rx="85.3"
      ry="81.9"
      fill="none"
      stroke="currentColor"
      strokeWidth="16"
    />

    {/* Overlap cutout */}
    <path
      d="M170.7,81.9c0,45.2-38.2,81.9-85.3,81.9V81.9h85.3zM85.3,81.9C85.3,36.7,123.5,0,170.7,0v81.9H85.3z"
      fill="white"
    />
  </svg>

                    </div>
  )
}

export default chromadb
