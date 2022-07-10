export default function LinkWithIcon({ children, ...props }) {
    return (
        <a className="inline-flex items-center gap-1" {...props}>
            {children}
        </a>
    )
}
