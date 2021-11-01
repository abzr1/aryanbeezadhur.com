import { NextSeo } from 'next-seo'
import splitbee from '@splitbee/web'

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
        </Wrapper>
    )
}
