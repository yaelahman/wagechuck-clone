export default function Button({ children, onClick }) {
    return (
        <>
            <button onClick={onClick} className="flex gap-3 transition-all duration-150 text-mcyellow px-4 py-2 bg-mcdark rounded-lg hover:text-mcdark hover:bg-mcyellow">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="icon mr-1"
                    style={{}}
                    width="2.2em"
                    height="2.2em"
                    viewBox="0 0 24 24"
                    data-v-46c2e1f1=""
                >
                    <path
                        fill="currentColor"
                        d="M17.243 3.006c2.066 0 3.742 8.714 3.742 19.478H24c0-11.588-3.042-20.968-6.766-20.968c-2.127 0-4.007 2.81-5.248 7.227c-1.241-4.416-3.121-7.227-5.231-7.227C3.031 1.516 0 10.888 0 22.476h3.014c0-10.763 1.658-19.47 3.724-19.47c2.066 0 3.741 8.05 3.741 17.98h2.997c0-9.93 1.684-17.98 3.75-17.98Z"
                    />
                </svg>
                <span className="text-3xl">{children}</span>
            </button>
        </>
    )
}