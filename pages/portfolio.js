import Wrapper from '../components/wrapper'
import Header from '../components/header'
import Item from '../components/item'

export default function Portfolio() {
    return (
        <Wrapper>
            <Header />

            <h1>Portfolio</h1>

            <p>Projects that I am working on.</p>

            <Item
                title="Linkpad"
                description="Shorten multiple links into one short URL. Powered by TinyURL."
                site="https://linkpad.vercel.app"
                code="https://github.com/AryanBeezadhur/linkpad"
            />
        </Wrapper>
    )
}
