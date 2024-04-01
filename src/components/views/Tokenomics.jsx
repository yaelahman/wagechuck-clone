import Button from "../Button"
import { useEffect, useState } from "react"

export default function Tokenomics() {

    const Address = "BxyWNDB1SW2vuZ59HuhkPpLEHbjH7ERnYP64gx19q9cm"
    const [isCopied, setIsCopied] = useState(false)
    const [turnSound, setTurnSound] = useState(false)
    const handleCopy = () => {
        setIsCopied(true)

        navigator.clipboard.writeText(Address)
        setTimeout(() => {
            setIsCopied(false)
        }, 3000)
    }

    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        setAnimate(true)
    }, [])
    return (
        <>

            <div className="md:px-20 md:py-10 text-white">
                <div className={"transition-all duration-300 " + (animate ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0')}>
                    <h1 className="text-7xl">Token<span className="text-mcyellow">omics</span></h1>
                </div>

                <div className={"transition-all duration-300 " + (animate ? 'scale-[1] opacity-100' : 'scale-[0.8] opacity-0')}>
                    <div className="mt-3">
                        <div className="bg-mcdark px-3 py-3 rounded-lg">
                            <h6 className="text-4xl">Token supply: 1.000.000.000</h6>
                            <span className="text-2xl">Token: {Address}</span>
                            <h6 className="text-4xl text-mcyellow">No taxes, no bullshit, it's that simple.</h6>
                            <h6 className="text-4xl text-mcyellow">LP tokens are burnt, and 2% dev tokens</h6>
                        </div>
                    </div>
                </div>
                <div className="py-8">
                    <Button onClick={() => handleCopy()}>{isCopied ? 'Copied!' : 'Copy Address'}</Button>
                </div>
            </div >
        </>
    )
}