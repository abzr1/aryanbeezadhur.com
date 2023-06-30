import { ArrowLeft, ArrowRight } from './icons'

export default function LinkWithIcon({ direction, children, ...props }) {
    return (
        <a
            className={`
                my-2
                inline-flex
                items-center
                bg-gradient-to-r
                from-neutral-500
                to-neutral-500
                bg-[length:100%_0.125rem]
                bg-[0_100%]
                bg-no-repeat
                gap-0
                duration-200
                hover:gap-1
                hover:text-neutral-500
            `}
            {...props}
        >
            {direction === 'left' ? <ArrowLeft /> : ''}

            {children}

            {direction === 'right' ? <ArrowRight /> : ''}
        </a>
    )
}
