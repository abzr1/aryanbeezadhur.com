import { DefaultSeo } from 'next-seo'
import Header from '../components/header'
import Wrapper from '../components/wrapper'

import '../public/output.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <DefaultSeo
                titleTemplate="AryanBeezadhur.com - %s"
                defaultTitle="AryanBeezadhur.com"
                canonical="https://www.aryanbeezadhur.com"
                description="I am a young and dynamic full-stack developer."
                openGraph={{
                    type: 'website',
                    locale: 'en_GB',
                    url: 'https://www.aryanbeezadhur.com',
                    title: 'AryanBeezadhur.com - Full-Stack Developer',
                    description: 'Full-Stack Developer',
                    site_name: 'AryanBeezadhur.com',
                    images: [
                        {
                            url: 'https://www.aryanbeezadhur.com/opengraph.png',
                            width: 536,
                            height: 285,
                            alt: 'www.aryanbeezadhur.com',
                            type: 'image/png'
                        }
                    ]
                }}
                twitter={{
                    handle: '@AryanBeezadhur',
                    site: '@AryanBeezadhur',
                    cardType: 'summary_large_image'
                }}
            />

            <Wrapper>
                <Header />

                <Component {...pageProps} />
            </Wrapper>
        </>
    )
}
