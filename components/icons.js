function SVG({ children, ...props }) {
    return (
        <svg className="inline-block w-5" {...props}>
            {children}
        </svg>
    )
}

export function ArrowLeft() {
    return (
        <SVG
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
        >
            <path d="M19 12H5M12 19l-7-7 7-7" />
        </SVG>
    )
}

export function ArrowRight() {
    return (
        <SVG
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
        >
            <path d="M5 12h14M12 5l7 7-7 7" />
        </SVG>
    )
}
