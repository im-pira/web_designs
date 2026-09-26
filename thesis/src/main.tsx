import { StrictMode, useEffect } from "react"
import { createRoot } from "react-dom/client"
import Lenis from "lenis"
import "./index.css"
import App from "./App"

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    })

    let frame: number

    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }

    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  return <App />
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SmoothScroll />
  </StrictMode>,
)