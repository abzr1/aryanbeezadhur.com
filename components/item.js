export default function Item({ title, description, site, code }) {
    return (
        <div>
            <h4>{title}</h4>

            <p>{description}</p>

            {site && (
                <>
                    <a href={site} target="_blank" rel="noopener noreferrer">
                        Site

                        <svg fill="currentColor" viewBox="0 0 20 20">
                            <path d="M11 3a1 1 0 1 0 0 2h2.586l-6.293 6.293a1 1 0 1 0 1.414 1.414L15 6.414V9a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-5z" />
                            <path d="M5 5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3a1 1 0 1 0-2 0v3H5V7h3a1 1 0 0 0 0-2H5z" />
                        </svg>
                    </a>

                    <br />
                </>
            )}

            <a href={code} target="_blank" rel="noopener noreferrer">
                Code

                <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.316 3.051a1 1 0 0 1 .633 1.265l-4 12a1 1 0 1 1-1.898-.632l4-12a1 1 0 0 1 1.265-.633zM5.707 6.293a1 1 0 0 1 0 1.414L3.414 10l2.293 2.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0zm8.586 0a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 1 1-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 0 1 0-1.414z" />
                </svg>
            </a>

            <style jsx>{`
                div {
                    padding: 3rem 0;
                    border-top: 1px solid var(--gray-700);
                }

                h4 {
                    padding: 0.5rem 0;

                    font-size: var(--fs-2xl);
                    font-weight: var(--fw-bold);
                }

                p {
                    padding: 0.5rem 0;

                    color: var(--gray-500);

                    line-height: var(--lh-normal);
                }

                a {
                    display: inline-block;
                    margin: 0.5rem 0;
                }

                svg {
                    display: inline-block;
                    width: 1.2rem;
                    margin: 0 0 0 0.2rem;
                }
            `}</style>
        </div>
    )
}
