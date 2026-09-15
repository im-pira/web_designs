import Fifth from "../components/landing/Fifth"
import Forth from "../components/landing/Fourth"
import HeroVisual from "../components/landing/HeroVisual"
import Navbar from "../components/landing/Navbar"
import { Second } from "../components/landing/Second"
import { Third } from "../components/landing/Third"

function Landing() {
    return (
        <main className="bg-black">
            <Navbar />
            <HeroVisual />
            <Second />
            <Third />
            <Forth />
            <Fifth />
        </main>
    )
}

export default Landing