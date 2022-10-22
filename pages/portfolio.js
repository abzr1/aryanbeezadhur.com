import { NextSeo } from 'next-seo'
import Cards from '../components/cards'
import H1 from '../components/h1'
import P from '../components/p'

const data = [
    {
        title: 'AryanBeezadhur',
        description:
            'My portfolio site built with React and Next.js, deployed with Vercel.',
        link: 'https://www.aryanbeezadhur.com',
        codeUrl: 'https://github.com/AryanBeezadhur/AryanBeezadhur'
    },
    {
        title: 'Wordstats',
        description:
            'A web tool that display text stats, built with Alpine.js and Tailwind CSS.',
        link: 'https://wordstats.vercel.app',
        codeUrl: 'https://github.com/AryanBeezadhur/wordstats'
    },
    {
        title: 'project_euler',
        description: 'My solutions to Project Euler',
        codeUrl: 'https://github.com/AryanBeezadhur/project_euler'
    }
]

export default function Portfolio() {
    return (
        <>
            <NextSeo title="Portfolio" description="Projects I'm working on." />

            <H1>Portfolio</H1>

            <P>Projects I&apos;m working on.</P>

            <Cards data={data} />
        </>
    )
}
