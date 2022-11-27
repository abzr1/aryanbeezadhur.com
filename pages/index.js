import LinkWithIcon from '../components/link-with-icon'
import { NextSeo } from 'next-seo'
import H1 from '../components/h1'
import { ArrowRight } from '../components/icons'
import P from '../components/p'

export default function Index() {
    return (
        <>
            <NextSeo
                title="Programmer"
                description="I'm a young programmer based in London."
            />

            <H1>Aryan Beezadhur</H1>

            <P>I&apos;m a young programmer based in London.</P>

            <P>
                I did a work placement with the Sage Foundation as a full-stack
                programmer with Python, Flask and Heroku.
            </P>

            <P>Skills: Python, Django, Flask, Node.js, React, Next.js.</P>

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
