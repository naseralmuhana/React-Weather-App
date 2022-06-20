import { useEffect } from "react"

export const useClickOutside = (element, callback) => {
  useEffect(() => {
    const handleClick = (e) => {
      if (element.current && !element.current.contains(e.target)) {
        callback()
      }
    }
    document.addEventListener("click", handleClick)
    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [element, callback])
  return null
}
