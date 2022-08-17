export default function LinkWithIcon({ children, ...props }) {
    return (
        <a className="my-2 inline-flex items-center gap-1" {...props}>
            {children}
        </a>
    )
}
