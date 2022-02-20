import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { ArrowRight } from '../components/icons'

export default function Index() {
    return (
        <>
            <NextSeo
                title="Full-Stack Developer"
                description="I am a young and dynamic full-stack developer."
            />

            <h1>Aryan Beezadhur</h1>

            <p>
                I am a young and dynamic full-stack developer based in London,
                UK.
            </p>

            <p>
                I had a 10-month work placement with the Sage Foundation as a
                full-stack web developer with Python, Django, PostgreSQL and
                Heroku.
            </p>

            <p>
                Tech: HTML, CSS, JavaScript, Python, Django, Node.js, React,
                Next.js, TailwindCSS.
            </p>

            <nav>
                <ul>
                    <li>
                        <Link href="/portfolio">
                            <a>
                                Portfolio
                                <ArrowRight />
                            </a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/contact">
                            <a>
                                Contact
                                <ArrowRight />
                            </a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/snippets">
                            <a>
                                Snippets
                                <ArrowRight />
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>

            <style jsx>{`
                li {
                    padding: 1rem 0;

                    list-style-type: none;
                }
            `}</style>
        </>
    )
}
