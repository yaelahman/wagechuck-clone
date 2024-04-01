import React, { useEffect, useState } from 'react'
import { ControlBar, Player } from 'video-react';
import 'video-react/dist/video-react.css'; // import css
import Button from '../Button';

export default function Home() {
    const Address = "BxyWNDB1SW2vuZ59HuhkPpLEHbjH7ERnYP64gx19q9cm"
    const [animate, setAnimate] = useState(false)
    const [isCopied, setIsCopied] = useState(false)
    const [turnSound, setTurnSound] = useState(false)
    const handleCopy = () => {
        setIsCopied(true)

        navigator.clipboard.writeText(Address)
        setTimeout(() => {
            setIsCopied(false)
        }, 3000)
    }

    const handleTurnSound = () => {
        setTurnSound(current => !current)
    }

    useEffect(() => {
        setAnimate(true)
    }, [])

    return (
        <>
            <div className="md:px-20 md:py-10 text-white">
                <div className="flex md:flex-row flex-col gap-6">
                    <div className={"transition-all duration-300 " + (animate ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0')}>
                        <h1 className="md:text-[98px] leading-none">Stop <span className="text-mcyellow">wage</span> <br /> cucking it!</h1>
                        <p className="text-3xl max-w-60">Send your boss your resignation letter right now, stop being a wagecuck and load up some $WAGECUCK</p>
                        <div className="py-8">
                            <Button onClick={() => handleCopy()}>{isCopied ? 'Copied!' : 'Copy Address'}</Button>
                            {!isCopied && <span className='text-xl'>{Address}</span>}
                        </div>
                    </div>
                    <div className="">
                        <Player muted={!turnSound} fluid={false} heigth={10} width={360} autoPlay src="/wagecuckingit.Bsw6jkMd.mp4" className="border-4 border-mcyellow shadow-lg px-0">

                            <ControlBar autoHide={false} className="my-class" />
                        </Player>
                        <div className="mt-3">

                            <Button onClick={() => handleTurnSound()}>{turnSound ? 'Turn Off Sound' : 'Turn On Sound'}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}