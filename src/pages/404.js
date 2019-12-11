export default function NotFound() {
  if (typeof window !== "undefined") {
    window.location = "/website"
  }

  return null
}
