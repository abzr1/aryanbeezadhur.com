import Link from 'next/link'

import Wrapper from '../components/wrapper'
import Header from '../components/header'

export default function Index() {
    return (
        <Wrapper>
            <Header />

            <h1>Aryan Beezadhur</h1>

            <p>I'm a young and dynamic full-stack developer based in London, UK.</p>

            <p>I had a 10-month work placement with the Sage Foundation as a full-stack web developer with HTML, CSS, JavaScript, Git CLI, Django, PostgreSQL and Heroku.</p>

            <p>Technologies: HTML, CSS, JavaScript, Node.js, React, Next.js, PostgreSQL, MySQL, MongoDB, Git.</p>

            <nav>
                <ul>
                    <li>
                        <Link href="/portfolio">
                            <a>Portfolio</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/snippets">
                            <a>Snippets</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/how-i-built-this-site">
                            <a>How I Built This Site</a>
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
        </Wrapper>
    )
}
