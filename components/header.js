import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Header() {
    const router = useRouter()

    return (
        <div>
            {router.pathname === '/' ? (
                <img src="icon.jpg" alt="Logo" />
            ) : (
                <Link href="/">
                    <a>
                        <svg fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.707 16.707a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 1.414L5.414 9H17a1 1 0 1 1 0 2H5.414l4.293 4.293a1 1 0 0 1 0 1.414z" />
                        </svg>

                        Home
                    </a>
                </Link>
            )}

            <style jsx>{`
                div {
                    padding: 3rem 0;
                }

                img {
                    width: 4.6875rem;
                    border-radius: var(--br-full);
                }

                svg {
                    display: inline-block;
                    width: 1rem;
                    margin: 0 0.2rem 0 0;
                }
            `}</style>
        </div>
    )
}
