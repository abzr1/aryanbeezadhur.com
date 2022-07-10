import { NextSeo } from 'next-seo'
import H1 from '../components/h1'
import {
    GitHub,
    LinkedIn,
    Mail,
    Reddit,
    StackOverflow,
    Twitter
} from '../components/icons'
import LinkWithIcon from '../components/link-with-icon'
import P from '../components/p'

export default function Contact() {
    return (
        <>
            <NextSeo title="Contact" description="Get in touch." />

            <div>
                <H1>Contact</H1>

                <P>Get in touch.</P>

                <P>
                    <LinkWithIcon
                        href="mailto:aryanbeezadhur@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Email
                        <Mail />
                    </LinkWithIcon>
                </P>

                <P>
                    <LinkWithIcon
                        href="https://twitter.com/AryanBeezadhur"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Twitter
                        <Twitter />
                    </LinkWithIcon>
                </P>

                <P>
                    <LinkWithIcon
                        href="https://github.com/AryanBeezadhur"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                        <GitHub />
                    </LinkWithIcon>
                </P>

                <P>
                    <LinkWithIcon
                        href="https://stackoverflow.com/users/12860895"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Stack Overflow
                        <StackOverflow />
                    </LinkWithIcon>
                </P>

                <P>
                    <LinkWithIcon
                        href="https://www.linkedin.com/in/aryan-beezadhur-833b34171/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                        <LinkedIn />
                    </LinkWithIcon>
                </P>

                <P>
                    <LinkWithIcon
                        href="https://www.reddit.com/user/realAryanBeezadhur"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Reddit
                        <Reddit />
                    </LinkWithIcon>
                </P>
            </div>
        </>
    )
}
