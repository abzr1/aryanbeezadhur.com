import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en" className="h-full">
                <Head />

                <body className="h-full bg-neutral-900 text-white font-body">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
