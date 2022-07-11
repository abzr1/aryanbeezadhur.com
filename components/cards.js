import H4 from './h4'
import { Code, ExternalLink } from './icons'
import LinkWithIcon from './link-with-icon'
import P from './p'

export default function Cards({ data }) {
    return (
        <div className="divide-y divide-gray-500">
            {data.map((datum) => (
                <div key={datum.title} className="py-12">
                    <H4>{datum.title}</H4>

                    <P>{datum.description}</P>

                    {datum.link && (
                        <P>
                            <LinkWithIcon
                                href={datum.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Site
                                <ExternalLink />
                            </LinkWithIcon>

                            <br />
                        </P>
                    )}

                    <LinkWithIcon
                        href={datum.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Code
                        <Code />
                    </LinkWithIcon>
                </div>
            ))}
        </div>
    )
}
