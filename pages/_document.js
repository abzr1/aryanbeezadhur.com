import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en" className="h-full">
                <Head></Head>

                <body className="h-full bg-black text-gray-100 text-lg font-normal">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
