import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Markets from "./components/Markets"
import About from "./components/About"
import Docs from "./components/Docs"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <Nav />

      <main>
        <Hero />
        <Markets />
        <About />
        <Docs />
        <Footer />
      </main>
    </>
  )
}