import H1 from '../components/h1'

export default function Custom404() {
    return (
        <div className="flex justify-center items-center h-screen text-center">
            <H1 className="text-2xl pr-5">404</H1>

            <p className="pl-5">This page could not be found.</p>
        </div>
    )
}
