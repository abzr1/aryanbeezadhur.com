import { NextSeo } from 'next-seo'
import Cards from '../components/cards'
import H1 from '../components/h1'
import P from '../components/p'

const items = [
    {
        title: 'ATYB4',
        description:
            'My portfolio site built with React and Next.js, deployed with Vercel.',
        url: 'https://github.com/ATYB4/ATYB4'
    },
    {
        title: 'wordstats',
        description:
            'A web tool that display text stats, built with Alpine.js and Tailwind CSS.',
        url: 'https://github.com/ATYB4/wordstats'
    },
    {
        title: 'project_euler',
        description: 'My solutions to Project Euler',
        url: 'https://github.com/ATYB4/project_euler'
    }
]

export default function Portfolio() {
    return (
        <>
            <NextSeo title="Portfolio" description="Projects I'm working on." />

            <H1>Portfolio</H1>

            <P>Projects I&apos;m working on.</P>

            <Cards items={items} />
        </>
    )
}
