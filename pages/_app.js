import { DefaultSeo } from 'next-seo'
import Header from '../components/header'
import Layout from '../components/layout'

import '../public/output.css'

export default function MyApp({ Component, pageProps }) {
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
                            url: 'https://www.aryanbeezadhur.com/profile.png',
                            width: 1000,
                            height: 1000,
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

            <Layout>
                <Header />

                <Component {...pageProps} />
            </Layout>
        </>
    )
}
