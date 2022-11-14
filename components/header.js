import Image from 'next/image'
import { useRouter } from 'next/router'
import avatar from '../public/avatar.jpg'
import { ArrowLeft } from './icons'
import LinkWithIcon from './link-with-icon'

export default function Header() {
    const router = useRouter()

    return (
        <div className="py-10">
            {router.pathname === '/' ? (
                <Image
                    src={avatar}
                    alt="Avatar"
                    width={150}
                    height={150}
                    className="rounded-full"
                />
            ) : (
                <LinkWithIcon href="/">
                    <ArrowLeft />
                    Home
                </LinkWithIcon>
            )}
        </div>
    )
}
