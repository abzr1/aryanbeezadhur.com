import LinkWithIcon from '../components/link-with-icon'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import H1 from '../components/h1'
import { ArrowRight } from '../components/icons'
import P from '../components/p'

export default function Index() {
    return (
        <>
            <NextSeo
                title="Full-Stack Developer"
                description="I am a young and dynamic full-stack developer."
            />

            <H1>Aryan Beezadhur</H1>

            <P>
                I am a young and dynamic full-stack developer based in London,
                UK.
            </P>

            <P>
                I had a 10-month work placement with the Sage Foundation as a
                full-stack web developer with Python, Django, PostgreSQL and
                Heroku.
            </P>

            <P>Tech: Python, Django, Node.js, React, Next.js.</P>

            <nav>
                <ul>
                    <li className="py-4">
                        <LinkWithIcon href="/portfolio">
                            Portfolio
                            <ArrowRight />
                        </LinkWithIcon>
                    </li>

                    <li className="py-4">
                        <LinkWithIcon href="/contact">
                            Contact
                            <ArrowRight />
                        </LinkWithIcon>
                    </li>

                    <li className="py-4">
                        <LinkWithIcon href="/snippets">
                            Snippets
                            <ArrowRight />
                        </LinkWithIcon>
                    </li>
                </ul>
            </nav>
        </>
    )
}
