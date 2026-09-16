const AVATAR_PALETTE = [
  { bg: "#DBEAFE", fg: "#1D4ED8" }, // blue
  { bg: "#EDE9FE", fg: "#6D28D9" }, // purple
  { bg: "#CCFBF1", fg: "#0F766E" }, // teal
  { bg: "#FEF3C7", fg: "#B45309" }, // amber
  { bg: "#FCE7F3", fg: "#BE185D" }, // pink
]

function colorFor(seed: string) {
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0
  }
  return AVATAR_PALETTE[hash % AVATAR_PALETTE.length]
}

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

type EmployeeAvatarProps = {
  name: string
  seed?: string
  size?: "md" | "lg"
}

export function EmployeeAvatar({ name, seed, size = "md" }: EmployeeAvatarProps) {
  const color = colorFor(seed ?? name)
  const sizeClass = size === "lg" ? "h-14 w-14 text-lg" : "h-9 w-9 text-sm"
  return (
    <span
      className={`grid place-items-center rounded-full font-semibold shrink-0 ${sizeClass}`}
      style={{ backgroundColor: color.bg, color: color.fg }}
      aria-hidden="true"
    >
      {initialsOf(name)}
    </span>
  )
}
