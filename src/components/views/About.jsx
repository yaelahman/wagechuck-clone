import { useEffect, useState } from "react"

export default function About() {
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        setAnimate(true)
    }, [])
    return (
        <>

            <div className="md:px-20 md:py-10 text-white">
                <div className={"transition-all duration-300 " + (animate ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0')}>

                    <h1 className="text-mcyellow text-7xl">About</h1>
                </div>
                <div className={"transition-all duration-300 " + (animate ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0')}>

                    <p className="text-3xl">BZZZZZZZZ. Your alarm goes off, its 06:00 on a monday. Time to go to work anon! Wagey wagey get in cagey. Break this cycle and invest in $WAGECUCK. This is your last chance before the Bogs take everything you own. There's more to life than flipping burgers at McDonald's, anon.</p>
                </div>
            </div>
        </>
    )
}