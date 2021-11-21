import { NextSeo } from 'next-seo'
import { Mail } from 'react-feather'
import {
    GitHub,
    LinkedIn,
    Reddit,
    StackOverflow,
    Twitter
} from '../components/icons'
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
                        onClick={() => splitbee.track('Click email link')}
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
                        onClick={() => splitbee.track('Visit Twitter account')}
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
                        onClick={() => splitbee.track('Visit GitHub account')}
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
                        onClick={() =>
                            splitbee.track('Visit Stack Overflow account')
                        }
                    >
                        Stack Overflow
                        <StackOverflow />
                    </a>
                </p>

                <p>
                    <a
                        href="https://www.linkedin.com/in/aryan-beezadhur-833b34171/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => splitbee.track('Visit LinkedIn account')}
                    >
                        LinkedIn
                        <LinkedIn />
                    </a>
                </p>

                <p>
                    <a
                        href="https://www.reddit.com/user/realAryanBeezadhur"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => splitbee.track('Visit Reddit account')}
                    >
                        Reddit
                        <Reddit />
                    </a>
                </p>
            </div>
        </Wrapper>
    )
}
