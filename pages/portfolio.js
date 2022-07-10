import { NextSeo } from 'next-seo'
import H1 from '../components/h1'
import Item from '../components/item'
import P from '../components/p'

export default function Portfolio() {
    return (
        <>
            <NextSeo
                title="Portfolio"
                description="Apps and sites I've built."
            />

            <H1>Portfolio</H1>

            <P>Apps and sites I&apos;ve built.</P>

            <Item
                title="AryanBeezadhur"
                description="My portfolio site built with React and Next.js, deployed with Vercel"
                site="https://www.aryanbeezadhur.com"
                code="https://github.com/AryanBeezadhur/AryanBeezadhur"
            />

            <Item
                title="Wordstats"
                description="A web tool that display text stats, built with Alpine.js and Tailwind CSS"
                site="https://wordstats.vercel.app"
                code="https://github.com/AryanBeezadhur/wordstats"
            />
        </>
    )
}
