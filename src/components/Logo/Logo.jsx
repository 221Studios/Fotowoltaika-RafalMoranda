export default function Logo({ color = "var(--base-300)", className = "" }) {
  return (
    <svg
      width="500"
      height="500"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M500 0V166.75H333.333V500H166.667V166.75H0V0H500Z"
        fill={color}
      />
    </svg>
  );
}
