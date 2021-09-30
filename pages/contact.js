import Wrapper from '../components/wrapper'
import Header from '../components/header'
import { GitHub, Twitter, Mail } from 'react-feather'

export default function Contact() {
    return (
        <Wrapper>
            <Header />

            <div>
                <h1>Contact and social</h1>

                <p>Send me a message.</p>

                <p>
                    <a href="mailto:aryanbeezadhur@gmail.com">
                        Email
                        <Mail />
                    </a>
                </p>

                <p>
                    <a href="https://github.com/AryanBeezadhur">
                        GitHub
                        <GitHub />
                    </a>
                </p>

                <p>
                    <a href="https://twitter.com/AryanBeezadhur">
                        Twitter
                        <Twitter />
                    </a>
                </p>

                <style jsx>{`
                    div :global(svg) {
                        display: inline-block;
                        width: 1.2rem;
                        margin: 0 0 0 0.3rem;
                    }
                `}</style>
            </div>
        </Wrapper>
    )
}
