import { NextSeo } from 'next-seo'
import Heading from '../components/heading'
import LinkWithIcon from '../components/link-with-icon'
import Paragraph from '../components/paragraph'

const items = [
    {
        title: 'atyb4',
        description: 'My personal site, built with Next.js.',
        url: 'https://github.com/atyb4/atyb4'
    },
    {
        title: 'wordstats',
        description:
            'A website that calculates text stats, built with Next.js.',
        url: 'https://github.com/atyb4/wordstats'
    },
    {
        title: 'project_euler',
        description: 'My solutions to Project Euler.',
        url: 'https://github.com/atyb4/project_euler'
    }
]

export default function Portfolio() {
    return (
        <>
            <NextSeo title="Portfolio" description="Projects I'm working on." />

            <Heading size="h1">Portfolio</Heading>

            <Paragraph>Projects I&apos;m working on.</Paragraph>

            <div className="divide-y divide-neutral-500">
                {items.map((item) => (
                    <div key={item.title} className="py-12">
                        <Heading size="h4">{item.title}</Heading>

                        <Paragraph>{item.description}</Paragraph>

                        <LinkWithIcon
                            direction="right"
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visit
                        </LinkWithIcon>
                    </div>
                ))}
            </div>
        </>
    )
}
