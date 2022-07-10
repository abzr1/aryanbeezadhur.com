import { Code, ExternalLink } from './icons'

export default function Item({ title, description, site, code }) {
    return (
        <div>
            <h4>{title}</h4>

            <p>{description}</p>

            {site && (
                <>
                    <a href={site} target="_blank" rel="noopener noreferrer">
                        Site
                        <ExternalLink />
                    </a>

                    <br />
                </>
            )}

            <a href={code} target="_blank" rel="noopener noreferrer">
                Code
                <Code />
            </a>

            <style jsx>{`
                div {
                    padding: 3rem 0;
                    border-top: 1px solid var(--gray-700);
                }

                h4 {
                    padding: 0.5rem 0;

                    font-size: var(--fs-2xl);
                }

                p {
                    padding: 0.5rem 0;

                    color: var(--gray-500);

                    line-height: var(--lh-normal);
                }

                a {
                    display: inline-flex;
                    margin: 0.5rem 0;
                }
            `}</style>
        </div>
    )
}
