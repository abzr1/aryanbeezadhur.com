import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import LinkWithIcon from '../components/link-with-icon'

import '../public/fonts/general-sans.css'
import '../public/fonts/switzer.css'
import '../public/output.css'

export default function MyApp({ Component, pageProps }) {
    const router = useRouter()

    return (
        <>
            <DefaultSeo
                titleTemplate="Aryan Beezadhur - %s"
                defaultTitle="AryanBeezadhur.com"
                canonical="https://www.aryanbeezadhur.com"
                description="I'm a young programmer based in London."
                openGraph={{
                    type: 'website',
                    locale: 'en_GB',
                    url: 'https://www.aryanbeezadhur.com',
                    title: 'Aryan Beezadhur - Programmer',
                    description: 'Programmer',
                    site_name: 'AryanBeezadhur.com',
                    images: [
                        {
                            url: 'https://www.aryanbeezadhur.com/opengraph.jpg',
                            width: 1000,
                            height: 1000,
                            alt: 'www.aryanbeezadhur.com',
                            type: 'image/jpg'
                        }
                    ]
                }}
                twitter={{
                    handle: '@AryanBeezadhur',
                    site: '@AryanBeezadhur',
                    cardType: 'summary_large_image'
                }}
            />

            <main className="w-4/5 md:w-3/5 mx-auto">
                <div className="py-14">
                    {router.pathname === '/' ? null : (
                        <LinkWithIcon direction="left" href="/">
                            Home
                        </LinkWithIcon>
                    )}
                </div>

                <Component {...pageProps} />
            </main>
        </>
    )
}
