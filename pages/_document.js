import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en" className="h-full">
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz@0,6..72;1,6..72&display=swap"
                        rel="stylesheet"
                    />
                </Head>

                <body className="h-full bg-neutral-900 text-neutral-50 text-lg font-serif">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
