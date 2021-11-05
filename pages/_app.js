import { useRouter } from 'next/router'
import { useEffect } from 'react'
import NProgress from 'nprogress'
import splitbee from '@splitbee/web'
import { DefaultSeo } from 'next-seo'

import '../public/theme.css'
import '../public/nprogress.css'
import '../public/preflight.css'

export default function MyApp({ Component, pageProps }) {
    const router = useRouter()

    useEffect(() => {
        const handleStart = (url) => {
            console.log(`Loading: ${url}`)
            NProgress.start()
        }
        const handleStop = () => {
            NProgress.done()
        }

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleStop)
        router.events.on('routeChangeError', handleStop)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleStop)
            router.events.off('routeChangeError', handleStop)
        }
    }, [router])

    useEffect(() => {
        splitbee.init({
            scriptUrl: '/bee.js',
            apiUrl: '/_hive',
            disableCookie: true
        })
    }, [])

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

            <Component {...pageProps} />

            <style jsx global>{`
                body {
                    background: var(--warm-gray-900);
                    color: var(--warm-gray-200);

                    font-family: 'DM Sans', var(--font-default);
                    font-weight: var(--fw-normal);
                    font-size: var(--fs-lg);
                }

                h1 {
                    font-family: 'DM Serif Display', var(--font-default);
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
                    background-size: 100% 2px;
                    background-position: 0 100%;
                    background-repeat: no-repeat;

                    transition: 200ms;
                }

                a:hover {
                    color: var(--warm-gray-500);
                }

                ::-webkit-scrollbar {
                    width: 15px;
                }

                ::-webkit-scrollbar-thumb {
                    border: 5px solid rgba(0, 0, 0, 0);
                    background-clip: padding-box;
                    border-radius: 9999px;
                    background-color: var(--yellow-200);
                }

                ::selection {
                    background: var(--yellow-200);
                    color: var(--warm-gray-900);
                }
            `}</style>
        </>
    )
}
