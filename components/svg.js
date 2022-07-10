export default function SVG({ children, ...props }) {
    return (
        <svg className="inline-block w-5" {...props}>
            {children}
        </svg>
    )
}
