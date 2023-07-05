import { NextSeo } from 'next-seo'
import Heading from '../components/heading'
import LinkWithIcon from '../components/link-with-icon'
import Paragraph from '../components/paragraph'

const items = [
    {
        name: 'Email',
        url: 'mailto:aryanbeezadhur@gmail.com'
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/no2reasons'
    },
    {
        name: 'GitHub',
        url: 'https://github.com/no2reasons'
    },
    {
        name: 'Stack Overflow',
        url: 'https://stackoverflow.com/users/12860895'
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/aryan-beezadhur-833b34171/'
    }
]

export default function Contact() {
    return (
        <>
            <NextSeo title="Contact & Social" description="Get in touch." />

            <div>
                <Heading size="h1">Contact &&nbsp;</Heading>
                <Heading size="h1">Social</Heading>

                <Paragraph>Get in touch.</Paragraph>

                {items.map((item) => (
                    <Paragraph key={item.name}>
                        <LinkWithIcon
                            direction="right"
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {item.name}
                        </LinkWithIcon>
                    </Paragraph>
                ))}
            </div>
        </>
    )
}
