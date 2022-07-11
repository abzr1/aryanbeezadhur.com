import { NextSeo } from 'next-seo'
import Cards from '../components/cards'
import H1 from '../components/h1'
import P from '../components/p'

export default function Snippets({ snippets }) {
    return (
        <>
            <NextSeo
                title="Snippets"
                description="A collection of code snippets I often use. Imported from the GitHub Gists REST API."
            />

            <H1>Snippets</H1>

            <P>
                A collection of code snippets I often use. Imported from the
                GitHub Gists REST API.
            </P>

            <Cards data={snippets} />
        </>
    )
}

export async function getStaticProps() {
    const gists = await fetch(
        'https://api.github.com/users/AryanBeezadhur/gists'
    )
    const gistsJson = await gists.json()

    const snippets = []

    gistsJson.map((gist) => {
        snippets.push({
            title: gist.files[Object.keys(gist.files)[0]].filename,
            description: gist.description,
            codeUrl: gist.html_url
        })
    })

    return {
        props: { snippets },
        revalidate: 60
    }
}
