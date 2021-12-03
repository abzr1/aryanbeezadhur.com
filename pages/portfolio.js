import { NextSeo } from 'next-seo'
import Header from '../components/header'
import Item from '../components/item'
import Wrapper from '../components/wrapper'

export default function Portfolio() {
    return (
        <Wrapper>
            <NextSeo
                title="Portfolio"
                description="Apps and sites I've built."
            />

            <Header />

            <h1>Portfolio</h1>

            <p>Apps and sites I&apos;ve built.</p>

            <Item
                title="AryanBeezadhur"
                description="My portfolio site built with React and Next.js, deployed with Vercel."
                site="https://www.aryanbeezadhur.com"
                code="https://github.com/AryanBeezadhur/AryanBeezadhur"
            />

            <Item
                title="Linkpad"
                description="Shorten multiple links into one short URL. Powered by TinyURL."
                site="https://linkpad.vercel.app"
                code="https://github.com/AryanBeezadhur/linkpad"
            />

            <Item
                title="next-project-template"
                description="A simple template for Next.js projects."
                site="https://next-project-template.vercel.app"
                code="https://github.com/AryanBeezadhur/next-project-template"
            />
        </Wrapper>
    )
}
