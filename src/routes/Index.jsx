import About from "../components/views/About"
import Home from "../components/views/Home"
import HowToBuy from "../components/views/HowToBuy"
import Roadmap from "../components/views/Roadmap"
import Tokenomics from "../components/views/Tokenomics"

const routes = [
    { path: "/", main: () => <Home /> },
    { path: "/about", main: () => <About />, },
    { path: "/how-to-buy", main: () => <HowToBuy />, },
    { path: "/tokenomics", main: () => <Tokenomics />, },
    { path: "/roadmap", main: () => <Roadmap />, },
]

export { routes }