'use client'

export default function ScrollDownIcon() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        <svg
          width="32"
          height="40"
          viewBox="0 0 32 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-[chevronBounce_2s_ease-in-out_infinite] text-white transition-colors duration-300 hover:text-gray-200"
        >
          {/* First chevron */}
          <path
            d="M8 12L16 20L24 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.5"
          />
          {/* Second chevron with increased spacing */}
          <path
            d="M8 22L16 30L24 22"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="1"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes chevronBounce {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(8px);
          }
        }
      `}</style>
    </div>
  )
}
