import Header from '../components/header'
import Wrapper from '../components/wrapper'

export default function HowIBuiltThisSite() {
    return (
        <Wrapper>
            <Header />

            <h1>How I Built This Site</h1>

            <p>
                I built this site using{' '}
                <a
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
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
