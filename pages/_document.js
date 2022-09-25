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
                        href="https://fonts.googleapis.com/css2?family=Blinker:wght@400;600&display=swap"
                        rel="stylesheet"
                    />
                </Head>

                <body className="h-full bg-black text-gray-100 text-lg font-normal">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
