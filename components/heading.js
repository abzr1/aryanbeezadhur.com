export default function Heading({ size, children }) {
    return (
        <h1
            className={`
                ${size === 'h1' ? 'text-5xl' : ''}
                ${size === 'h4' ? 'text-2xl' : ''}
                font-display
                font-semibold
                inline-block
                relative

                after:content-['']
                after:w-full
                after:-z-10
                after:opacity-30
                after:bg-neutral-300
                after:absolute
                after:left-0
                ${size === 'h1' ? 'after:bottom-0' : ''}
                ${size === 'h1' ? 'after:h-3' : ''}
                ${size === 'h4' ? 'after:bottom-[3px]' : ''}
                ${size === 'h4' ? 'after:h-2' : ''}
            `}
        >
            {children}
        </h1>
    )
}
