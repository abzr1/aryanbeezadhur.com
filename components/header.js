import { useRouter } from 'next/router'
import { ArrowLeft } from './icons'
import LinkWithIcon from './link-with-icon'

export default function Header() {
    const router = useRouter()

    return (
        <div className="py-14">
            {router.pathname === '/' ? null : (
                <LinkWithIcon href="/">
                    <ArrowLeft />
                    Home
                </LinkWithIcon>
            )}
        </div>
    )
}
