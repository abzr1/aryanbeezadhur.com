import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { ArrowRight } from 'react-feather'

import Wrapper from '../components/wrapper'
import Header from '../components/header'

export default function Index() {
    return (
        <Wrapper>
            <NextSeo
                title="Full-Stack Developer"
                description="I am a young and dynamic full-stack developer."
            />

            <Header />

            <h1>Aryan Beezadhur</h1>

            <p>
                I am a young and dynamic full-stack developer based in London,
                UK.
            </p>

            <p>
                I had a 10-month work placement with the Sage Foundation as a
                full-stack web developer with HTML, CSS, JavaScript, Git CLI,
                Django, PostgreSQL and Heroku.
            </p>

            <p>
                Technologies: HTML, CSS, JavaScript, Node.js, Express, React,
                Next.js, Prisma, Git.
            </p>

            <nav>
                <ul>
                    <li>
                        <Link href="/portfolio">
                            <a>
                                Portfolio
                                <ArrowRight />
                            </a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/contact">
                            <a>
                                Contact
                                <ArrowRight />
                            </a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/snippets">
                            <a>
                                Snippets
                                <ArrowRight />
                            </a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/how-i-built-my-site">
                            <a>
                                How I Built My Site
                                <ArrowRight />
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>

            <style jsx>{`
                li {
                    padding: 1rem 0;

                    list-style-type: none;
                }
            `}</style>
        </Wrapper>
    )
}
