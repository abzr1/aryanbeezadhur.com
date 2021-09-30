import { useRouter } from 'next/router'
import { useEffect } from 'react'
import NProgress from 'nprogress'
import splitbee from '@splitbee/web'
import Head from 'next/head'

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
            <Head>
                <title>Aryan Beezadhur | Full-Stack Developer</title>

                <meta name="description" content="I'm a young and dynamic full-stack developer." />
                <meta name="title" content="Aryan Beezadhur | Full-Stack Developer" />
                <meta name="theme-color" content="#000000" />
                <meta name="robots" content="index, follow" />

                <meta property="og:title" content="Aryan Beezadhur | Full-Stack Developer" />
                <meta property="og:image" content="https://www.aryanbeezadhur.com/favicon.ico" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.aryanbeezadhur.com" />
                <meta property="og:site_name" content="www.aryanbeezadhur.com" />
                <meta property="og:description" content="I'm a young and dynamic full-stack developer." />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@AryanBeezadhur" />
                <meta name="twitter:creator" content="@AryanBeezadhur" />
                <meta name="twitter:domain" content="www.aryanbeezadhur.com" />
                <meta name="twitter:title" content="Aryan Beezadhur | Full-Stack Developer" />
                <meta name="twitter:description" content="I'm a young and dynamic full-stack developer." />
                <meta name="twitter:image" content="https://www.aryanbeezadhur.com/favicon.ico" />
                <meta name="twitter:image:alt" content="https://aryanbeezadhur.com" />
                <meta name="twitter:url" content="https://www.aryanbeezadhur.com" />
            </Head>

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

                a {
                    background-image: linear-gradient(to right, var(--warm-gray-500), var(--warm-gray-500));
                    background-size: 100% 2px;
                    background-position: 0 100%;
                    background-repeat: no-repeat;

                    transition: 100ms;
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
