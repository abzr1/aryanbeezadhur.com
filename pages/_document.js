import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en" className="h-full">
                <Head>
                    <link
                        href="https://api.fontshare.com/v2/css?f[]=general-sans@600&f[]=switzer@400&display=swap"
                        rel="stylesheet"
                    />
                </Head>

                <body className="h-full bg-black text-white">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
