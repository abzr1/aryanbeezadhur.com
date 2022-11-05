import LinkWithIcon from '../components/link-with-icon'
import { NextSeo } from 'next-seo'
import H1 from '../components/h1'
import { ArrowRight } from '../components/icons'
import P from '../components/p'

export default function Index() {
    return (
        <>
            <NextSeo
                title="Software Engineer"
                description="I'm a young software engineer based in London."
            />

            <H1>Aryan Beezadhur</H1>

            <P>I&apos;m a young software engineer based in London.</P>

            <P>
                I had a 10-month work placement with the Sage Foundation as a
                full-stack web developer with Python, Flask and Heroku.
            </P>

            <P>Tech: Python, Django, Flask, Node.js, React, Next.js.</P>

            <nav className="mt-4">
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
