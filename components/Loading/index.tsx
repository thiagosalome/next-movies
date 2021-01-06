import React from 'react'

const Loading: React.FC = () => {
  return (
    <svg width="30px" height="30px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <circle className='stroke-current text-wine dark:text-orange' cx="50" cy="50" fill="none" strokeWidth="7" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
      </circle>
    </svg>
  )
}

export default Loading
