import { NextSeo } from 'next-seo'
import splitbee from '@splitbee/web'
import Link from 'next/link'

import Header from '../components/header'
import Wrapper from '../components/wrapper'

export default function HowIBuiltMySite() {
    return (
        <Wrapper>
            <NextSeo
                title="How I Built My Site"
                description="Using React and Next.js."
            />

            <Header />

            <h1>How I Built My Site</h1>

            <p>
                I built my site using{' '}
                <a
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => splitbee.track('Visit React site')}
                >
                    React
                </a>
                , a JavaScript library for building user interfaces, because of
                its convenient componentization and massive ecosystem.
            </p>

            <p>
                I used React in conjunction with{' '}
                <a
                    href="https://nextjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => splitbee.track('Visit Next.js site')}
                >
                    Next.js
                </a>
                , a React framework, as it provides code splitting and
                server-side rendering for React components, improving user
                experience and search engine optimisation (SEO). Next.js also
                supports client-side routing, which makes page transitions
                faster.
            </p>

            <p>
                For the{' '}
                <Link href="/snippets">
                    <a>
                        <code>/snippets</code> page
                    </a>
                </Link>
                , data is fetched from the{' '}
                <a
                    href="https://docs.github.com/en/rest/reference/gists"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                        splitbee.track('Visit GitHub Gists REST API Docs')
                    }
                >
                    GitHub Gists REST API
                </a>{' '}
                using Next.js{' '}
                <a
                    href="https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                        splitbee.track(
                            'Visit Next.js Incremental Static Regeneration Docs'
                        )
                    }
                >
                    incremental static regeneration
                </a>
                , which generates a static version of the page at build time,
                and regenerates the page in the background after a certain
                amount of time (
                <a
                    href="https://github.com/AryanBeezadhur/AryanBeezadhur/blob/master/pages/snippets.js#L54"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                        splitbee.track('Visit snippets.js `revalidate` line')
                    }
                >
                    in my case I&apos;ve set it to every 60 seconds
                </a>
                ). This means that the page is always blazing fast because it is
                static HTML, but still has accurate data.
            </p>
        </Wrapper>
    )
}
