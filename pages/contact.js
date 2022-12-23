import { NextSeo } from 'next-seo'
import H1 from '../components/h1'
import { ArrowRight } from '../components/icons'
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
                        <ArrowRight />
                    </LinkWithIcon>
                </P>

                <P>
                    <LinkWithIcon
                        href="https://github.com/yadavkcbr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                        <ArrowRight />
                    </LinkWithIcon>
                </P>

                <P>
                    <LinkWithIcon
                        href="https://stackoverflow.com/users/12860895"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Stack Overflow
                        <ArrowRight />
                    </LinkWithIcon>
                </P>

                <P>
                    <LinkWithIcon
                        href="https://www.linkedin.com/in/aryan-beezadhur-833b34171/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                        <ArrowRight />
                    </LinkWithIcon>
                </P>
            </div>
        </>
    )
}
