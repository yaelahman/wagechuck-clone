import { useEffect, useState } from "react"
import wageImg from "../../assets/img/wage.png"

export default function Roadmap() {

    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        setAnimate(true)
    }, [])
    return (
        <>

            <div className="md:px-20 md:py-10 text-white">
                <div className="flex gap-3">
                    <div>
                        <div className={"transition-all duration-300 " + (animate ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0')}>
                            <h1 className="text-7xl">Road<span className="text-mcyellow">map</span></h1>
                        </div>

                        <div className={"transition-all duration-300 " + (animate ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0')}>
                            <div className="mt-3 flex">
                                <div className="bg-mcdark px-3 py-3 rounded-lg">
                                    <div className="flex flex-col gap-3">
                                        <div className="mb-3">
                                            <h6 className="flex text-4xl">Phase 1:
                                                <svg
                                                    data-v-46c2e1f1=""
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    aria-hidden="true"
                                                    role="img"
                                                    className="icon"
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 48 48"
                                                >
                                                    <path
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M12.07 42.5s-1-2.39-.85-3.15a9.86 9.86 0 0 0-.51-3.35c-.17-.38-1-3.91-1.09-4.42s-.34-5.09 0-5.51a5.86 5.86 0 0 0 1.07-2a5.25 5.25 0 0 1 .4-2.65c.46-.67 6-6.85 6.86-7.19s1.93-.5 2.23-.71A24.63 24.63 0 0 1 26 12.27c1.72 0 6.52 2.1 7.7 6.35s3.42 5.38 3.8 6.14s.51 7.49.51 9.38s.71 2.86.5 3.53s-1.62 4.83-1.62 4.83"
                                                    />
                                                    <path
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M22.36 34.77a3.74 3.74 0 0 0 4.25 2.61c2.48-.47 2.73-1.73 2.65-3.07a16.31 16.31 0 0 0-.17-1.81m-1.56-14.45a3.29 3.29 0 0 1 3.33.93c1.13 1.26 3.74 4.45 2.69 6s-4.25 2.48-5.72 1.51s-3.83-2.9-3.49-4.16s2.44-4 3.19-4.28m-8.99 3.81c1.21.7 3.11 1.6 2.6 3s-2.39 4.2-3.53 4.58s-3.28.38-4-.76s-.88-4.37-.37-5s3.25-3.01 5.3-1.82"
                                                    />
                                                    <path
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M13.57 23.41c.68.16 1.71.52 1.61 1.77c-.07.88-1.83 1.37-2.17 1.33M30.86 19a1.49 1.49 0 0 0-1.76 1.78a1.73 1.73 0 0 0 2 .8a1.47 1.47 0 0 0 .9-1.26"
                                                    />
                                                    <path
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M40.5 42.5h-33a2 2 0 0 1-2-2v-33a2 2 0 0 1 2-2h33a2 2 0 0 1 2 2v33a2 2 0 0 1-2 2"
                                                    />
                                                </svg>
                                            </h6>
                                            <h6 className="text-4xl text-mcyellow">Meme</h6>
                                        </div>
                                        <div className="mb-3">
                                            <h6 className="flex text-4xl">Phase 2:
                                                <svg
                                                    data-v-46c2e1f1=""
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    aria-hidden="true"
                                                    role="img"
                                                    className="icon"
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 48 48"
                                                >
                                                    <g fill="none" stroke="currentColor" strokeWidth={4}>
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="m20 33l6 2s15-3 17-3s2 2 0 4s-9 8-15 8s-10-3-14-3H4"
                                                        />
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M4 29c2-2 6-5 10-5s13.5 4 15 6s-3 5-3 5"
                                                        />
                                                        <rect width={16} height={6} x={26} y={15} fill="currentColor" rx={3} />
                                                        <path strokeLinecap="round" d="M26 9h16" />
                                                    </g>
                                                </svg>

                                            </h6>
                                            <h6 className="text-4xl text-mcyellow">Vibe and HODL</h6>
                                        </div>
                                        <div className="mb-3">
                                            <h6 className="flex text-4xl">Phase 3:
                                                <svg
                                                    data-v-46c2e1f1=""
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    aria-hidden="true"
                                                    role="img"
                                                    className="icon"
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-.175-.012-.363t-.013-.312q-.125.725-.675 1.2T18 13h-2q-.825 0-1.412-.587T14 11v-1h-4V8q0-.825.588-1.412T12 6h1q0-.575.313-1.012t.762-.713q-.5-.125-1.012-.2T12 4Q8.65 4 6.325 6.325T4 12h5q1.65 0 2.825 1.175T13 16v1h-3v2.75q.5.125.988.188T12 20"
                                                    />
                                                </svg>

                                            </h6>
                                            <h6 className="text-4xl text-mcyellow">Quit Your 9-5</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"transition-all duration-300 " + (animate ? 'scale-[1] opacity-100' : 'scale-[0.8] opacity-0')}>
                        <img src={wageImg} width={"400px"} height={"100%"} alt="" />
                    </div>
                </div>
            </div >
        </>
    )
}