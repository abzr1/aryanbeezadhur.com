import H4 from '../components/h4'
import LinkWithIcon from '../components/link-with-icon'
import P from '../components/p'
import { Code, ExternalLink } from './icons'

export default function Item({ title, description, site, code }) {
    return (
        <div className="py-12 border-y border-y-stone-700">
            <H4>{title}</H4>

            <P>{description}</P>

            {site && (
                <>
                    <LinkWithIcon
                        href={site}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Site
                        <ExternalLink />
                    </LinkWithIcon>

                    <br />
                </>
            )}

            <LinkWithIcon href={code} target="_blank" rel="noopener noreferrer">
                Code
                <Code />
            </LinkWithIcon>
        </div>
    )
}
