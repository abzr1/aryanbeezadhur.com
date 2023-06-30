import Heading from '../components/heading'

export default function Custom404() {
    return (
        <div className="flex justify-center items-center h-screen text-center">
            <Heading size="h1" className="text-2xl pr-5">
                404
            </Heading>

            <p className="pl-5">This page could not be found.</p>
        </div>
    )
}
