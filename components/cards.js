import H4 from './h4'
import { ArrowRight } from './icons'
import LinkWithIcon from './link-with-icon'
import P from './p'

export default function Cards({ items }) {
    return (
        <div className="divide-y divide-neutral-500">
            {items.map((item) => (
                <div key={item.title} className="py-12">
                    <H4>{item.title}</H4>

                    <P>{item.description}</P>

                    <LinkWithIcon
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit
                        <ArrowRight />
                    </LinkWithIcon>
                </div>
            ))}
        </div>
    )
}
