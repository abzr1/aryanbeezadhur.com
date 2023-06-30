import LinkWithIcon from '../components/link-with-icon'
import { NextSeo } from 'next-seo'
import Heading from '../components/heading'
import Paragraph from '../components/paragraph'

export default function Index() {
    return (
        <>
            <NextSeo
                title="Programmer"
                description="I'm a young programmer based in London."
            />

            <Heading size="h1">Aryan Beezadhur</Heading>

            <Paragraph>I&apos;m a young programmer based in London.</Paragraph>

            <Paragraph>
                I did a work placement with the Sage Foundation as a full-stack
                programmer with Python, Flask and Heroku.
            </Paragraph>

            <Paragraph>
                Skills: Git, Python, Django, Flask, JavaScript, Node.js, React,
                Next.js.
            </Paragraph>

            <nav className="mt-4">
                <ul>
                    <li className="py-4">
                        <LinkWithIcon direction="right" href="/portfolio">
                            Portfolio
                        </LinkWithIcon>
                    </li>

                    <li className="py-4">
                        <LinkWithIcon direction="right" href="/contact">
                            Contact & Social
                        </LinkWithIcon>
                    </li>
                </ul>
            </nav>
        </>
    )
}
