import Image from 'next/image'
import { useRouter } from 'next/router'
import icon from '../public/icon.jpg'
import { ArrowLeft } from './icons'
import LinkWithIcon from './link-with-icon'

export default function Header() {
    const router = useRouter()

    return (
        <div className="py-12">
            {router.pathname === '/' ? (
                <Image
                    src={icon}
                    alt="Icon"
                    width={100}
                    height={103.79}
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
