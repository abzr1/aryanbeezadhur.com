import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ArrowLeft } from './icons'
import icon from '../public/icon.jpg'

export default function Header() {
    const router = useRouter()

    return (
        <div>
            {router.pathname === '/' ? (
                <Image
                    src={icon}
                    alt="Icon"
                    width={100}
                    height={103.79}
                    className="icon"
                />
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

                :global(.icon) {
                    border-radius: var(--br-full);
                }
            `}</style>
        </div>
    )
}
