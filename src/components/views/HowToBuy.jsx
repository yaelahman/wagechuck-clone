import { useEffect, useState } from "react"

export default function HowToBuy() {
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        setAnimate(true)
    }, [])
    return (
        <>
            <div className="md:px-20 md:py-10 text-white">
                <div className={"transition-all duration-300 " + (animate ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0')}>

                    <h1 className="text-white text-7xl">How To <span className="text-mcyellow">Buy</span></h1>
                </div>
                <div className={"transition-all duration-300 " + (animate ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0')}>
                    <div className="flex gap-6 flex-wrap">
                        <CreateWallet />
                        <GetSomeSOL />
                        <GoToRaydium />
                        <SwapSOL />
                    </div>
                </div>
            </div>
        </>
    )
}

const CreateWallet = () => {
    return (
        <>
            <div className="transition-all duration-150 cursor-pointer bg-mcyellow text-mcdark hover:text-mcyellow hover:bg-mcdark px-4 py-4 hover:translate-x-1">
                <h1 className="text-5xl flex gap-2 max-w-[330px] min-w-[320px]">1. Create a wallet <svg
                    data-v-46c2e1f1=""
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="icon mr-4"
                    width="1em"
                    height="1em"
                    viewBox="0 0 512 512"
                >
                    <path
                        fill="currentColor"
                        d="M200.4 27.39L180.9 183h42.8l49.1-146.57zm91.7 8L242.7 183l149.7.1l34.3-102.61zM180 46.03l-71.9 7.84L122.2 183h40.7zM64 153c-11.5 0-19.18 8.8-21.27 17.2c-1.04 4.2-.45 7.6.73 9.5c1.17 1.8 2.79 3.3 8.54 3.3h52.1l-3.3-30zm357.4 0l-10 30h47.5c-2.6-5-3.7-10.3-3-15.6c.7-5.2 2.7-9.9 5.3-14.4zM41 201v246.9c0 5.1 2.79 11.1 7.37 15.7C52.96 468.2 59 471 64 471l384 .1c5 0 11-2.8 15.6-7.4c4.6-4.6 7.4-10.6 7.4-15.7v-71h-87c-44 0-44-82 0-82h87v-93.9zm343 112c-20 0-20 46 0 46h22.3c-9-3.8-15.3-12.7-15.3-23s6.3-19.2 15.3-23zm41.7 0c9 3.8 15.3 12.7 15.3 23s-6.3 19.2-15.3 23H487v-46zm-9.7 16c-4 0-7 3-7 7s3 7 7 7s7-3 7-7s-3-7-7-7"
                    />
                </svg>
                </h1>
                <p className="text-2xl max-w-72">Download phantom or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to phantom.app. </p>
            </div>
        </>
    )
}

const SwapSOL = () => {
    return (
        <>
            <div className="transition-all duration-150 cursor-pointer bg-mcyellow text-mcdark hover:text-mcyellow hover:bg-mcdark px-4 py-4 hover:translate-x-1">
                <h1 className="text-5xl flex gap-2 max-w-[330px] min-w-[320px]">4. Swap SOL For Wagechuck <svg
                    data-v-46c2e1f1=""
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="icon mr-4"
                    width="1em"
                    height="1em"
                    viewBox="0 0 512 512"
                >
                    <path
                        fill="currentColor"
                        d="M200.4 27.39L180.9 183h42.8l49.1-146.57zm91.7 8L242.7 183l149.7.1l34.3-102.61zM180 46.03l-71.9 7.84L122.2 183h40.7zM64 153c-11.5 0-19.18 8.8-21.27 17.2c-1.04 4.2-.45 7.6.73 9.5c1.17 1.8 2.79 3.3 8.54 3.3h52.1l-3.3-30zm357.4 0l-10 30h47.5c-2.6-5-3.7-10.3-3-15.6c.7-5.2 2.7-9.9 5.3-14.4zM41 201v246.9c0 5.1 2.79 11.1 7.37 15.7C52.96 468.2 59 471 64 471l384 .1c5 0 11-2.8 15.6-7.4c4.6-4.6 7.4-10.6 7.4-15.7v-71h-87c-44 0-44-82 0-82h87v-93.9zm343 112c-20 0-20 46 0 46h22.3c-9-3.8-15.3-12.7-15.3-23s6.3-19.2 15.3-23zm41.7 0c9 3.8 15.3 12.7 15.3 23s-6.3 19.2-15.3 23H487v-46zm-9.7 16c-4 0-7 3-7 7s3 7 7 7s7-3 7-7s-3-7-7-7"
                    />
                </svg>
                </h1>
                <p className="text-2xl max-w-72">Swap SOL for $WAGECUCK. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility. </p>
            </div>
        </>
    )
}

const GetSomeSOL = () => {
    return (
        <>
            <div className="transition-all duration-150 cursor-pointer bg-mcdark text-mcyellow hover:text-mcdark hover:bg-mcyellow px-4 py-4 hover:translate-x-1">
                <h1 className="text-5xl flex gap-2 max-w-[330px] min-w-[320px]">2. Get some SOL
                    <svg
                        data-v-46c2e1f1=""
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="icon mr-4"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="m23.876 18.031l-3.962 4.14a.92.92 0 0 1-.306.21a.94.94 0 0 1-.367.074H.46a.469.469 0 0 1-.252-.073a.451.451 0 0 1-.17-.196a.438.438 0 0 1-.031-.255a.444.444 0 0 1 .117-.23l3.965-4.139a.92.92 0 0 1 .305-.21a.94.94 0 0 1 .366-.075h18.78a.47.47 0 0 1 .252.074a.453.453 0 0 1 .17.196a.438.438 0 0 1 .031.255a.444.444 0 0 1-.117.23m-3.962-8.335a.92.92 0 0 0-.306-.21a.941.941 0 0 0-.367-.075H.46a.469.469 0 0 0-.252.073a.451.451 0 0 0-.17.197a.438.438 0 0 0-.031.254a.444.444 0 0 0 .117.23l3.965 4.14a.92.92 0 0 0 .305.21a.94.94 0 0 0 .366.074h18.78a.469.469 0 0 0 .252-.073a.453.453 0 0 0 .17-.196a.438.438 0 0 0 .031-.255a.444.444 0 0 0-.117-.23zM.46 6.723h18.782a.941.941 0 0 0 .367-.075a.92.92 0 0 0 .306-.21l3.962-4.14a.444.444 0 0 0 .117-.23a.438.438 0 0 0-.032-.254a.453.453 0 0 0-.17-.196a.469.469 0 0 0-.252-.073H4.76a.941.941 0 0 0-.366.074a.92.92 0 0 0-.305.21L.125 5.97a.444.444 0 0 0-.117.23a.438.438 0 0 0 .03.254a.451.451 0 0 0 .17.196a.469.469 0 0 0 .252.074z"
                        />
                    </svg>

                </h1>
                <p className="text-2xl max-w-72">Have SOL in your wallet to switch to $WAGECUCK. If you don’t have any SOL, you can buy directly on phantom, transfer from another wallet, or buy on another exchange and send it to your wallet. </p>
            </div>
        </>
    )
}
const GoToRaydium = () => {
    return (
        <>
            <div className="transition-all duration-150 cursor-pointer bg-mcdark text-mcyellow hover:text-mcdark hover:bg-mcyellow px-4 py-4 hover:translate-x-1">
                <h1 className="text-5xl flex gap-2 max-w-[330px] min-w-[320px]">3. Go To Raydium
                    <svg
                        data-v-46c2e1f1=""
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        className="icon mr-4"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="m23.876 18.031l-3.962 4.14a.92.92 0 0 1-.306.21a.94.94 0 0 1-.367.074H.46a.469.469 0 0 1-.252-.073a.451.451 0 0 1-.17-.196a.438.438 0 0 1-.031-.255a.444.444 0 0 1 .117-.23l3.965-4.139a.92.92 0 0 1 .305-.21a.94.94 0 0 1 .366-.075h18.78a.47.47 0 0 1 .252.074a.453.453 0 0 1 .17.196a.438.438 0 0 1 .031.255a.444.444 0 0 1-.117.23m-3.962-8.335a.92.92 0 0 0-.306-.21a.941.941 0 0 0-.367-.075H.46a.469.469 0 0 0-.252.073a.451.451 0 0 0-.17.197a.438.438 0 0 0-.031.254a.444.444 0 0 0 .117.23l3.965 4.14a.92.92 0 0 0 .305.21a.94.94 0 0 0 .366.074h18.78a.469.469 0 0 0 .252-.073a.453.453 0 0 0 .17-.196a.438.438 0 0 0 .031-.255a.444.444 0 0 0-.117-.23zM.46 6.723h18.782a.941.941 0 0 0 .367-.075a.92.92 0 0 0 .306-.21l3.962-4.14a.444.444 0 0 0 .117-.23a.438.438 0 0 0-.032-.254a.453.453 0 0 0-.17-.196a.469.469 0 0 0-.252-.073H4.76a.941.941 0 0 0-.366.074a.92.92 0 0 0-.305.21L.125 5.97a.444.444 0 0 0-.117.23a.438.438 0 0 0 .03.254a.451.451 0 0 0 .17.196a.469.469 0 0 0 .252.074z"
                        />
                    </svg>

                </h1>
                <p className="text-2xl max-w-72">Connect to Raydium. Go directly to <a href="https://raydium.io/swap">https://raydium.io/swap</a> in google chrome or on the browser inside your Phantom app. Connect your wallet. Paste the $WAGECUCK token address into Raydium, select Wagecuck, and confirm. When Phantom prompts you for a wallet signature, sign. </p>
            </div>
        </>
    )
}