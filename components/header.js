import { useRouter } from 'next/router'
import Link from 'next/link'
import { ArrowLeft } from 'react-feather'

export default function Header() {
    const router = useRouter()

    return (
        <div>
            {router.pathname === '/' ? (
                <img src="icon.jpg" alt="Logo" />
            ) : (
                <Link href="/">
                    <a>
                        <ArrowLeft />
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

                div :global(svg) {
                    display: inline-block;
                    width: 1.2rem;
                    margin: 0 0.3rem 0 0;
                }
            `}</style>
        </div>
    )
}
