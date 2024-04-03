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

            <Heading size="h1">Aryan&nbsp;</Heading>
            <Heading size="h1">Beezadhur</Heading>

            <Paragraph>
                I am a young and dynamic programmer with a passion for learning.
            </Paragraph>

            <Paragraph>
                I have experience working with Git, Python, Django, Flask,
                JavaScript, Node.js, React and Next.js.
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
