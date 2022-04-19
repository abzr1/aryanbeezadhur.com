export default function Custom404() {
    return (
        <div>
            <h1>404</h1>
            <p>This page could not be found.</p>

            <style jsx>{`
                div {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;

                    text-align: center;
                }

                h1 {
                    padding-right: 1.25rem;

                    border-right: 2px solid var(--gray-600);

                    font-size: var(--fs-2xl);
                }

                p {
                    padding-left: 1.25rem;
                }
            `}</style>
        </div>
    )
}
