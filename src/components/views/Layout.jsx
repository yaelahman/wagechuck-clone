import { Outlet, useLocation } from "react-router-dom"
import homeImage from "../../assets/img/home.png"
import aboutImage from "../../assets/img/about.png"
import howImage from "../../assets/img/how_to_buy.png"
import tokenomicsImage from "../../assets/img/tokenomics.png"
import roadmapImage from "../../assets/img/roadmap.webp"

export default function Layout() {
    const { pathname } = useLocation()
    return (
        <>
            <Outlet />
            <div className="absolute md:block hidden bottom-0 right-20">
                {pathname == "/" && (
                    <img src={homeImage} width={"300px"} />
                )}
                {pathname == "/about" && (
                    <img src={aboutImage} width={"400px"} />
                )}
                {pathname == "/how-to-buy" && (
                    <img src={howImage} width={"200px"} />
                )}
                {pathname == "/tokenomics" && (
                    <img src={tokenomicsImage} width={"400px"} />
                )}
                {pathname == "/roadmap" && (
                    <img src={roadmapImage} width={"400px"} />
                )}
            </div>
        </>
    )
}