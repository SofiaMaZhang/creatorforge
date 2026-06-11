import type { SVGProps } from "react";

type IconName =
  | "download"
  | "toolbox"
  | "people"
  | "robot"
  | "present"
  | "spark"
  | "blocks"
  | "shield"
  | "arrow"
  | "check"
  | "play"
  | "menu"
  | "close"
  | "star"
  | "palette"
  | "code"
  | "globe";

const paths: Record<IconName, React.ReactNode> = {
  download: (
    <>
      <path d="M12 3v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M5 21h14" />
    </>
  ),
  toolbox: (
    <>
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="M8 9V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" />
      <path d="M3 13h18" />
      <path d="M10 13v2M14 13v2" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
      <path d="M16 7.5a3 3 0 0 1 0 5.8" />
      <path d="M17.5 14.5a5.5 5.5 0 0 1 3 5" />
    </>
  ),
  robot: (
    <>
      <rect x="5" y="8" width="14" height="11" rx="2" />
      <path d="M12 8V4" />
      <circle cx="12" cy="3" r="1" />
      <path d="M9 13h.01M15 13h.01" />
      <path d="M9.5 16h5" />
      <path d="M2 12v3M22 12v3" />
    </>
  ),
  present: (
    <>
      <path d="M3 4h18" />
      <path d="M4 4v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4" />
      <path d="M12 15v4" />
      <path d="m8 21 4-2 4 2" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="m6.3 6.3 2.4 2.4M15.3 15.3l2.4 2.4M17.7 6.3l-2.4 2.4M8.7 15.3l-2.4 2.4" />
    </>
  ),
  blocks: (
    <>
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v6c0 4 3 6.5 7 8 4-1.5 7-4 7-8V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="m5 12 4 4L19 7" />,
  play: <path d="M7 4v16l13-8L7 4Z" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  star: (
    <path d="m12 3 2.6 5.6 6 .8-4.4 4.2 1.1 6L12 17.8 6.7 19.6l1.1-6L3.4 9.4l6-.8L12 3Z" />
  ),
  palette: (
    <>
      <path d="M12 3a9 9 0 1 0 0 18c1.2 0 2-.9 2-2 0-1.4-1-1.7-1-3 0-.8.7-1.5 1.5-1.5H17a4 4 0 0 0 4-4c0-4.1-4-7.5-9-7.5Z" />
      <circle cx="7.5" cy="11" r="1" />
      <circle cx="11" cy="7.5" r="1" />
      <circle cx="15" cy="8" r="1" />
    </>
  ),
  code: <path d="m9 8-5 4 5 4M15 8l5 4-5 4M13 5l-2 14" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
    </>
  ),
};

export function Icon({
  name,
  ...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
