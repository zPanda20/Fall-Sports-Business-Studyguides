// Small stroke icons, all drawn the same way so they feel like one family.
const PATHS = {
  plain: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z" />
      <path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5" transform="translate(0 -3)" />
    </>
  ),
  terms: (
    <>
      <path d="M3 12.5V4h8.5L21 13.5 13.5 21z" />
      <circle cx="7.5" cy="8.5" r="1.2" />
    </>
  ),
  real: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.6 2.6 3.8 5.6 3.8 9s-1.2 6.4-3.8 9c-2.6-2.6-3.8-5.6-3.8-9S9.4 5.6 12 3z" />
    </>
  ),
  sports: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 9.5C8 9.5 10 11 12 12s4 2.5 8.5 2.5M12 3c0 5-1 7-1 9s1 4 1 9M6 5.2c2.2 1.4 3.2 3.4 3.2 6.8S8.2 17.4 6 18.8M18 5.2c-2.2 1.4-3.2 3.4-3.2 6.8s1 5.4 3.2 6.8" />
    </>
  ),
  practice: (
    <>
      <path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19z" />
      <path d="M14.5 6.5l3 3" />
    </>
  ),
  ai: (
    <>
      <path d="M10 3l1.7 4.6L16.5 9.3l-4.8 1.7L10 15.6 8.3 11 3.5 9.3 8.3 7.6z" />
      <path d="M18.5 14l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" />
    </>
  ),
  watch: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="4" />
      <path d="M10.5 9.5v5l4.2-2.5z" />
    </>
  ),
  steps: (
    <>
      <path d="M5 4v16M5 7h9M5 12h14M5 17h9" />
    </>
  ),
  quiz: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.5a2.5 2.5 0 1 1 3.6 2.2c-.8.4-1.1 1-1.1 1.8M12 17h.01" />
    </>
  ),
  cards: (
    <>
      <rect x="3" y="6" width="14" height="14" rx="3" />
      <path d="M7 3h11a3 3 0 0 1 3 3v11" />
    </>
  ),
  bookmark: <path d="M6.5 3.5h11a1 1 0 0 1 1 1V21L12 16.8 5.5 21V4.5a1 1 0 0 1 1-1z" />,
  left: <path d="M15 5l-7 7 7 7" />,
  right: <path d="M9 5l7 7-7 7" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
};

export default function Icon({ name, size = 20 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
