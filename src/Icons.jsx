/* Line icons lifted verbatim from the original design (24×24, 1.6 stroke). */
const PATHS = {
  // problem cards
  noTime: (
    <>
      <path d="M6 3h12" />
      <path d="M6 21h12" />
      <path d="M7 3c0 4 4 5.5 5 6.5C13 8.5 17 7 17 3" />
      <path d="M7 21c0-4 4-5.5 5-6.5 1 1 5 2.5 5 6.5" />
    </>
  ),
  flame: <path d="M12 3c.5 3-2 4-2 6.5A2 2 0 0 0 12 12a2 2 0 0 0 2-2c1 1.5 3 3.2 3 6a5 5 0 0 1-10 0c0-3.5 3.5-4.5 5-13Z" />,
  bank: (
    <>
      <path d="M3 9 12 4l9 5" />
      <path d="M4 9v9" />
      <path d="M20 9v9" />
      <path d="M8 9v9" />
      <path d="M12 9v9" />
      <path d="M16 9v9" />
      <path d="M3 21h18" />
    </>
  ),
  // method steps
  pin: (
    <>
      <path d="M12 21s-6-5.3-6-10a6 6 0 0 1 12 0c0 4.7-6 10-6 10Z" />
      <circle cx="12" cy="11" r="2.2" />
    </>
  ),
  chart: (
    <>
      <path d="M3 11.5 8 9l3.5 2.5L15 6l6 2.5" />
      <path d="M3 15.5 8 13l3.5 2.5L15 10l6 2.5" />
    </>
  ),
  refresh: (
    <>
      <path d="M4 9a8 8 0 0 1 13-2.5L20 9" />
      <path d="M20 5v4h-4" />
      <path d="M20 15a8 8 0 0 1-13 2.5L4 15" />
      <path d="M4 19v-4h4" />
    </>
  ),
  // niches
  hotel: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
      <path d="M9 7h1" />
      <path d="M14 7h1" />
      <path d="M9 11h1" />
      <path d="M14 11h1" />
      <path d="M10 21v-3a2 2 0 0 1 4 0v3" />
    </>
  ),
  tooth: <path d="M12 5.5c-1.5-1.2-3-1.5-4.2-1C6 5 5 6.5 5 8.5c0 2 .6 3.5 1 5.5.4 2 .7 4.5 2 4.5 1 0 1.2-1.5 1.5-3 .3-1.3.6-2 2.5-2s2.2.7 2.5 2c.3 1.5.5 3 1.5 3 1.3 0 1.6-2.5 2-4.5.4-2 1-3.5 1-5.5 0-2-1-3.5-2.8-4-1.2-.5-2.7-.2-4.2 1Z" />,
  shoe: (
    <>
      <path d="M2 16.5V13c0-.6.4-1 1-1 2 0 3.5-.8 5-2l2-1.6c.4-.3 1-.2 1.2.3L12 11l6.5 2c1.5.5 2.5 1.2 2.5 2.5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z" />
      <path d="M9 9l1.5 2.5" />
      <path d="M2 16h19" />
    </>
  ),
  bag: (
    <>
      <path d="M5 8h14l-1 12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1L5 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </>
  ),
  paw: (
    <>
      <circle cx="6.5" cy="11.5" r="1.6" />
      <circle cx="10" cy="7.5" r="1.6" />
      <circle cx="14" cy="7.5" r="1.6" />
      <circle cx="17.5" cy="11.5" r="1.6" />
      <path d="M12 12.5c-2.2 0-4 1.7-4 3.8 0 1.4 1 2.2 2.3 2.2.9 0 1.2-.4 1.7-.4s.8.4 1.7.4c1.3 0 2.3-.8 2.3-2.2 0-2.1-1.8-3.8-4-3.8Z" />
    </>
  ),
  restaurant: (
    <>
      <path d="M4 3v7a2 2 0 0 0 4 0V3" />
      <path d="M6 3v18" />
      <path d="M18 3c-1.7 0-3 2-3 5s1 4 2 4v9" />
      <path d="M17 12h2" />
    </>
  ),
  beauty: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
      <path d="M2 9c1-1 2-1 3 0" />
      <path d="M19 9c1-1 2-1 3 0" />
    </>
  ),
  wrench: <path d="M14.5 6a3.5 3.5 0 0 0-4.6 4.3L4 16.2 6.8 19l5.9-5.9A3.5 3.5 0 0 0 17 8.5l-2.2 2.2-1.5-1.5L15.5 7c-.3-.4-.6-.7-1-1Z" />,
}

export default function Icon({ name, size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  )
}
