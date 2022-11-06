import { DefaultSeo } from 'next-seo'
import Header from '../components/header'
import Wrapper from '../components/wrapper'

import '../public/output.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <DefaultSeo
                titleTemplate="Aryan Beezadhur - %s"
                defaultTitle="AryanBeezadhur.com"
                canonical="https://www.aryanbeezadhur.com"
                description="I'm a young software engineer based in London."
                openGraph={{
                    type: 'website',
                    locale: 'en_GB',
                    url: 'https://www.aryanbeezadhur.com',
                    title: 'Aryan Beezadhur - Software Engineer',
                    description: 'Software Engineer',
                    site_name: 'AryanBeezadhur.com',
                    images: [
                        {
                            url: 'https://www.aryanbeezadhur.com/opengraph.png',
                            width: 578,
                            height: 321,
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
