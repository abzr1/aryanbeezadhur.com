import { DefaultSeo } from 'next-seo'
import Header from '../components/header'
import Wrapper from '../components/wrapper'
import '../public/base.css'
import '../public/theme.css'

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

            <style jsx global>{`
                body {
                    background: var(--warm-gray-900);
                    color: var(--warm-gray-200);

                    font-family: 'Overpass', var(--font-default);
                    font-weight: var(--fw-normal);
                    font-size: var(--fs-lg);
                }

                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                    font-family: 'Space Grotesk', var(--font-default);
                    font-weight: var(--fw-bold);
                }

                svg {
                    display: inline-block;
                    width: 1.2rem;
                    margin: 0 0 0 0.2rem;
                }

                a {
                    background-image: linear-gradient(
                        to right,
                        var(--warm-gray-500),
                        var(--warm-gray-500)
                    );
                    background-size: 100% 0.125rem;
                    background-position: 0 100%;
                    background-repeat: no-repeat;

                    transition: 200ms;
                }

                a:hover {
                    color: var(--warm-gray-500);
                }

                ::selection {
                    background: var(--yellow-200);
                    color: var(--warm-gray-900);
                }

                ::-webkit-scrollbar {
                    width: 0.9375rem;
                }

                ::-webkit-scrollbar-thumb {
                    border: 0.3125rem solid rgba(0, 0, 0, 0);
                    background-clip: padding-box;
                    border-radius: 1000rem;
                    background-color: var(--yellow-200);
                }
            `}</style>
        </>
    )
}
