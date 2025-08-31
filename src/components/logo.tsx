import * as React from "react"

export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 80V20L50 45V80L20 80Z"
        className="fill-primary"
      />
      <path
        d="M50 20L80 20L50 45V20Z"
        className="fill-secondary"
      />
      <path
        d="M85 35L100 50L85 65V35Z"
        className="fill-secondary"
      />
    </svg>
  )
}
