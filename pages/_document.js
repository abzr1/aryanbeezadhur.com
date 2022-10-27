import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en" className="h-full">
                <Head>
                    <link
                        href="https://api.fontshare.com/v2/css?f[]=switzer@400&f[]=clash-display@600&display=swap"
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
