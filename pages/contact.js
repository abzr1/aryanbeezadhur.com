import { NextSeo } from 'next-seo'
import { Mail, Twitter, GitHub, Code } from 'react-feather'
import splitbee from '@splitbee/web'

import Wrapper from '../components/wrapper'
import Header from '../components/header'

export default function Contact() {
    return (
        <Wrapper>
            <NextSeo title="Contact" description="Get in touch." />

            <Header />

            <div>
                <h1>Contact</h1>

                <p>Get in touch.</p>

                <p>
                    <a
                        href="mailto:aryanbeezadhur@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => splitbee.track('Click email')}
                    >
                        Email
                        <Mail />
                    </a>
                </p>

                <p>
                    <a
                        href="https://twitter.com/AryanBeezadhur"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => splitbee.track('Visit Twitter')}
                    >
                        Twitter
                        <Twitter />
                    </a>
                </p>

                <p>
                    <a
                        href="https://github.com/AryanBeezadhur"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => splitbee.track('Visit GitHub')}
                    >
                        GitHub
                        <GitHub />
                    </a>
                </p>

                <p>
                    <a
                        href="https://stackoverflow.com/users/12860895"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => splitbee.track('Visit Stack Overflow')}
                    >
                        Stack Overflow
                        <Code />
                    </a>
                </p>
            </div>
        </Wrapper>
    )
}
