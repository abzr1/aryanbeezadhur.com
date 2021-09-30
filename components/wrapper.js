export default function Wrapper({ children }) {
    return (
        <main>
            {children}

            <style jsx global>{`
                main {
                    max-width: 50rem;
                    margin: 0 auto;
                    padding: 2rem;
                }

                h1 {
                    font-size: var(--fs-5xl);
                }

                p {
                    padding: 1rem 0;

                    line-height: var(--lh-loose);
                }
            `}</style>
        </main>
    )
}
