import { ReactLenis } from "lenis/react"
import Landing from "./pages/Landing"

function App() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.035,
        smoothWheel: true,
        wheelMultiplier: 0.85,
      }}
    >
      <Landing />
    </ReactLenis>
  )
}

export default App