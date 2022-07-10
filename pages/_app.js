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
                    site_name: 'AryanBeezadhur.com',
                    description: 'Full-Stack Developer',
                    images: [
                        {
                            url: 'https://www.aryanbeezadhur.com/favicon.ico',
                            width: 132,
                            height: 137,
                            alt: 'www.aryanbeezadhur.com'
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
